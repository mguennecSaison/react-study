import { routes } from "./app/data/details.js";

const addRoute = (route, routeDetail, path = '') => {
  const { length } = Object.keys(routeDetail).filter(
    (key) => !key.startsWith("__")
  );
  if (length) {
    route(path || '/', 'components/common/RoutingIndexComponent.tsx', {id: path.replaceAll('/', '.').slice(1)})
    Object.entries(routeDetail).forEach(([key, val]) => {
      if (!key.startsWith("__")) {
        addRoute(route, val, `${path}/${key}`);
      }
    })
  } else {
    route(path, `examples/${path}.tsx`, { index: true, id: path })
  }
};

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  routes(defineRoutes) {
    const result = defineRoutes((route) => {
      addRoute(route, routes)
    });

    return result
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
