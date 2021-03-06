// import { useState, useCallback } from "react";

// function useLoading() {
//   const [loadingState, setLoadingState] = useState(false);
//   // 節流
//   const debounce = () => {
//     let timer = null;
//     return (fn, delay = 300) => {
//       setLoadingState(true); // 開始 loading
//       if (timer) clearTimeout(timer); // timer若存在，則清除舊timer (刷新動作)
//       timer = setTimeout(async () => {
//         try {
//           await fn();
//           setLoadingState(false); // 結束 loading
//           timer = null;
//         } catch (err) {
//           console.error(err);
//         }
//       }, delay);
//     };
//   };
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const runLoad = useCallback(debounce(), []);
//   // state變更會刷新閉包, 用 useCallback 固定記憶體位置

//   const WhileLoad = ({ loading, done }) => {
//     return <>{loadingState ? loading : done}</>;
//   };

//   return [WhileLoad, runLoad];
// }

// export default useLoading;

import { useState, useCallback } from "react";

function useLoading() {
  const [loadingState, setLoadingState] = useState(false);

  // 節流
  const debounce = () => {
    let timer = null;
    return (fn, delay = 300) => {
      setLoadingState(true); // 開始 loading
      if (timer) clearTimeout(timer); // timer若存在，則清除舊timer (刷新動作)
      timer = setTimeout(async () => {
        try {
          await fn();
        } catch (err) {
          console.error(err);
        }
        timer = null;
        setLoadingState(false); // 結束 loading
      }, delay);
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const runLoading = useCallback(debounce(), []);
  // state變更會刷新閉包, 用 useCallback 固定記憶體位置

  const WhileLoad = useCallback(
    (props) => {
      const { done, onLoad } = props;
      return <>{loadingState ? onLoad : done}</>;
    },
    [loadingState]
  );

  return [WhileLoad, runLoading];
}

export default useLoading;
