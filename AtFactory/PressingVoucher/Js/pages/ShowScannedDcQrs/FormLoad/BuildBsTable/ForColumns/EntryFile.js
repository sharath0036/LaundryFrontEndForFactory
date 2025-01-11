import { StartFunc as ColumnRewash } from "./ColumnRewash/entryFile.js";
import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";


let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnSerial = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");
    let LocalColumnRewash = LocalColumns.find(element => element.field === "Rewash");


    if (LocalColumnSerial === undefined === false) {
        ColumnSerial({ inFindColumn: LocalColumnSerial });
    };
    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };
    if (LocalColumnRewash === undefined === false) {
        ColumnRewash({ inFindColumn: LocalColumnRewash });
    };


};

export { StartFunc };