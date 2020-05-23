import * as React from "react";
import * as s from "./style.scss";

interface TableWrapperProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const TableWrapper: React.SFC<TableWrapperProps> = ({
  children,
  ...props
}) => (
  <div className={s.tableWrapper} {...props}>
    {children}
  </div>
);
