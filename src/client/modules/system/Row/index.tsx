import * as React from "react";
import * as style from "./main.scss";

export const Row: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <div className={style.row} {...props}>
      {children}
    </div>
  );
};
