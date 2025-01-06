import { StartFunc as ColumnOperate } from "./ColumnOperate/entryFile.js";
import { StartFunc as ColumnItems } from "./ColumnItems/entryFile.js";
import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";


let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "operate");

    ColumnOperate({ inFindColumn: LocalColumnOperateFine });
};

let LocalColumnItems= LocalColumns.find(element => element.field === "ColumnItems");

ColumnItems({ inFindColumn: LocalColumnItems });

let LocalColumnSerial= LocalColumns.find(element => element.field === "ColumnSerial");

ColumnSerial({ inFindColumn: LocalColumnSerial });

export { StartFunc };