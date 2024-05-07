import React, { ReactNode } from "react";
interface ControlTableRow {
    name: string;
    control: ReactNode;
    reset: ReactNode;
}
interface ControlTable {
    headReset: ReactNode;
    rows: ControlTableRow[];
}
declare const ControlTable: (props: ControlTable) => React.JSX.Element;
export default ControlTable;
