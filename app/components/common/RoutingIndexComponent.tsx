import { useMatches } from "@remix-run/react";
import { routes } from "~/data/details";
import lodash from "lodash";
import { Metadata } from "../../types/Metadata";

const RoutingIndexComponent = () => {
  const matches = useMatches();
  const { id, pathname } = matches[matches.length - 1];
  const metadata = (lodash.at(routes, id)?.[0] || routes) as unknown as Metadata;
  return (
    <>
      {matches.length > 1 && (
        <div>
          <a
            href={
              matches[matches.length - 1].pathname.slice(
                0,
                matches[matches.length - 1].pathname.lastIndexOf("/")
              ) || "/"
            }
          >
            Back
          </a>
        </div>
      )}
      {!!metadata?.__label && (
        <>
          <h1>{metadata.__label}</h1>
          {"__img" in metadata && (
            <img src={metadata.__img! as string} alt={metadata.__label} />
          )}
          <div>
            <>
              {Object.entries(metadata)
                .filter(([key]) => !key.startsWith("__"))
                .map(([key, value]) => {
                  const val = value as Metadata
                  return <div key={key}>
                    <a href={`${pathname === '/' ? '' : pathname}/${key}`}>
                      {key}
                      {!!val.__label && <> - {val.__label}</>}
                    </a>
                  </div>
                })}
            </>
          </div>
        </>
      )}
    </>
  );
};
export default RoutingIndexComponent;
