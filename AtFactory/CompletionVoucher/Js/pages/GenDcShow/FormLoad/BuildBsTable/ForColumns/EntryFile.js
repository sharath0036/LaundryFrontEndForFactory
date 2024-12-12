// import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
// import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
// import { StartFunc as BranchName } from "./BranchName/entryFile.js";
import { StartFunc as QrCount } from "./QrCount/entryFile.js";
import { StartFunc as ColumnPrint } from "./ColumnPrint/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    // let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    // let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");


    // if (LocalColumnOperateFine === undefined === false) {
    //     ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    // };
    // if (LocalColumnRate === undefined === false) {
    //     ColumnRate({ inFindColumn: LocalColumnRate });
    // };

    // let LocalBranchName = LocalColumns.find(element => element.field === "BranchName");

    // if (LocalBranchName === undefined === false) {
    //     BranchName({ inFindColumn: LocalBranchName });
    // };

    let LocalQrCount = LocalColumns.find(element => element.field === "QrCount");

    if (LocalQrCount === undefined === false) {
        QrCount({ inFindColumn: LocalQrCount });
    };

    let LocalPrint = LocalColumns.find(element => element.field === "Print");

    if (LocalPrint === undefined === false) {
        ColumnPrint({ inFindColumn: LocalPrint });
    };

};

export { StartFunc };