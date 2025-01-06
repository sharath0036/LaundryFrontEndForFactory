import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnSent } from "./ColumnSent/entryFile.js";
import { StartFunc as ColumnScanned } from "./ColumnScanned/entryFile.js";
import { StartFunc as ColumnPending } from "./ColumnPending/entryFile.js";
import { StartFunc as ColumnEntryCancel } from "./ColumnEntryCancel/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial")
    let LocalColumnSent = LocalColumns.find(element => element.field === "Sent");
    let LocalColumnScanned = LocalColumns.find(element => element.field === "Scanned");
    let LocalColumnPending = LocalColumns.find(element => element.field === "Pending");
    let LocalColumnEntryCancel = LocalColumns.find(element => element.field === "EntryCancel");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnSent === undefined === false) {
        ColumnSent({ inFindColumn: LocalColumnSent });
    };

    if (LocalColumnScanned === undefined === false) {
        ColumnScanned({ inFindColumn: LocalColumnScanned });
    };

    if (LocalColumnPending === undefined === false) {
        ColumnPending({ inFindColumn: LocalColumnPending });
    };

    if (LocalColumnEntryCancel === undefined === false) {
        ColumnEntryCancel({ inFindColumn: LocalColumnEntryCancel });
    };

};

export { StartFunc };