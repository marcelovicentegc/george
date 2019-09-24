import * as React from "react";
import { DataSource, Column } from "../..";
import Table from "antd/lib/table";

interface Props {
  dataSource: DataSource;
  columns: Column[];
}

export const TableWrapper: React.SFC<Props> = React.memo(props => {
  return (
    <Table
      dataSource={props.dataSource}
      columns={props.columns}
      rowKey={record => record.key}
    />
  );
});
