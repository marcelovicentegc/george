import * as React from "react";
import * as style from "./main.scss";

export const Column: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <div className={style.column} {...props}>
      {children}
    </div>
  );
};
