import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnReWash } from "./ColumnReWash/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial")
    let LocalColumnReWash = LocalColumns.find(element => element.field === "ReWash");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };
    if (LocalColumnReWash === undefined === false) {
        ColumnReWash({ inFindColumn: LocalColumnReWash });
    };
};

export { StartFunc };