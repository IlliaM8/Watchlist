import { useEffect, useState } from "react";

function useRuntime(time) {
  const [isM, setM] = useState("");
  const [isH, setH] = useState("");
  const [isRuntime, setRuntime] = useState("");

  useEffect(() => {
    setH((time / 60).toString().split(".")[0]);
    setM(
      (((time / 60).toString().split(".")[1] * 60) / 10)
        .toString()
        .substring(0, 2)
    );
    setRuntime(`${isH}h ${isM}m`);
  }, [time, isH, isM]);
  return { isRuntime };
}

export default useRuntime;
