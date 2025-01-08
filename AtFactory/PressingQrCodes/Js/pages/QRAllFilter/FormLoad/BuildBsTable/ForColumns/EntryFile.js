import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnStatus } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnScan } from "./ColumnScan/entryFile.js";
import { StartFunc as ColumnReturn } from "./ColumnReturn/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnRewash } from "./ColumnRewash/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial")
    let LocalColumnStatus = LocalColumns.find(element => element.field === "Status");
    let LocalColumnScan = LocalColumns.find(element => element.field === "Scan");
    let LocalColumnReturn = LocalColumns.find(element => element.field === "EntryReturnStatus");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");
    let LocalColumnRewash = LocalColumns.find(element => element.field === "ReWash");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };
    if (LocalColumnStatus === undefined === false) {
        ColumnStatus({ inFindColumn: LocalColumnStatus });
    };
    if (LocalColumnScan === undefined === false) {
        ColumnScan({ inFindColumn: LocalColumnScan });
    };
    if (LocalColumnReturn === undefined === false) {
        ColumnReturn({ inFindColumn: LocalColumnReturn });
    };
    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };
    if (LocalColumnRewash === undefined === false) {
        ColumnRewash({ inFindColumn: LocalColumnRewash });
    };
};
export { StartFunc };