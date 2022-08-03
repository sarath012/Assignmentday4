import React, { useContext } from "react";
import { appContext } from "../App";

export default function Grandchild() {
  const { counter } = useContext(appContext);

  return (
    <div>
      <p>{counter}</p>
    </div>
  );
}
