export const routes = {
  __label: "Index",
  "01-rerenders": {
    __label: "React re-renders guide: preventing unnecessary re-renders",
    __link:
      "https://adevnadia.medium.com/react-re-renders-guide-preventing-unnecessary-re-renders-8a3d2acbdba3",
    "01": {
      __label: "Preventing re-renders with composition",
      "01": {
        __label: "⛔️ Antipattern: Creating components in render function",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*M1b6pFHhNy5MH8cy.png",
        wrong: {},
        right: {},
      },
      "02": {
        __label: "✅ Preventing re-renders with composition: moving state down",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*rnmxuiCuV4bZrFaU.png",
        wrong: {},
        right: {},
      },
      "03": {
        __label: "✅ Preventing re-renders with composition: children as props",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*rnmxuiCuV4bZrFaU.png",
        wrong: {},
        right: {},
      },
      "04": {
        __label:
          "✅ Preventing re-renders with composition: components as props",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*rnmxuiCuV4bZrFaU.png",
        wrong: {},
        right: {},
      },
    },
    "02": {
      __label: "Preventing re-renders with React.memo",
      __img:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*-f9WqeSbIrSSOuMo.png",
      "00": {
        __label: "Preventing re-renders with React.memo",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*-f9WqeSbIrSSOuMo.png",
        wrong: {},
        right: {},
      },
      "01": {
        __label: "✅ React.memo: component with props",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*SQMGpLxH85yY_VJp.png",
        example: {},
      },
      "02": {
        __label: "✅ React.memo: components as props or children",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*HArrZ4LeZKzbqqnf.png",
        example: {},
      },
    },
    "03": {
      __label: "Improving re-renders performance with useMemo/useCallback",
      "00": {
        __label: "⛔️ Antipattern: unnecessary useMemo/useCallback on props",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*USxxXcRT8eYhtJd7.png",
          example: {},
      },
      "01": {
        __label: "✅ Necessary useMemo/useCallback",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*1UZHlMEo0JGq2HNw.png",
          example1: {},
          example2: {},
      },
      "02": {
        __label: "✅ useMemo for expensive calculations",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*mOw-pFnAJUxzVs8g.png",
        example: {},
      },
    },
    "04": {
      __label: "Improving re-render performance of lists",
      "00": {
        __label: "Improving re-render performance of lists",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*USxxXcRT8eYhtJd7.png",
        dynamic: {},
        static: {},
      },
      "01": {
        __label: "⛔️ Antipattern: random value as key in lists",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*tc2nrmSUnK7w1qHo.png",
        example: {},
      },
    },
    "05": {
      __label: "Preventing re-renders caused by Context",
      "01": {
        __label: "✅ Preventing Context re-renders: memoizing Provider value",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*tY1UXl68-axvgXLq.png",
        wrong: {},
        right: {},
      },
      "02": {
        __label: "✅ Preventing Context re-renders: splitting data and API",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*qiZUtLGHm6TzokmT.png",
        example: {},
      },
      "03": {
        __label: "✅ Preventing Context re-renders: splitting data into chunks",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*DCZY6dWjNgidwAV2.png",
          example: {},
      },
      "04": {
        __label: "✅ Preventing Context re-renders: Context selectors",
        __img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/1*n0B_Pda0XZ0kL3mdggDvZQ.png",
        example: {},
      },
    },
  },
};
