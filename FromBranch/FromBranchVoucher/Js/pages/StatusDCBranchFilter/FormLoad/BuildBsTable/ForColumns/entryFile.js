import { StartFunc as ColumnRate } from "./ColumnScanned/entryFile.js";
import { StartFunc as ColumnSerial } from "./ColumnEntryCancel/entryFile.js";
import { StartFunc as ColumnSent } from "./ColumnEntryCancel/entryFile.js";
import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";

let StartFunc = ({ inColumns }) => {
  let LocalColumns = inColumns;
  let LocalColumnRate = LocalColumns.find(
    (element) => element.field === "EntryCancel"
  );

  let LocalColumnScanned = LocalColumns.find(
    (element) => element.field === "Scanned"
  );

  let LocalColumnSerial = LocalColumns.find(
    (element) => element.field === "Serial"
  );
  let LocalColumnSent = LocalColumns.find(
    (element) => element.field === "Sent"
  );

  if ((LocalColumnEntryCancel === undefined) === false) {
    ColumnEntryCancel({ inFindColumn: LocalColumnEntryCancel });
  }

  if ((LocalColumnSerial === undefined) === false) {
    ColumnSerial({ inFindColumn: LocalColumnSerial});
  }

  if ((LocalColumnScanned === undefined) === false) {
    ColumnScanned({ inFindColumn: LocalColumnScanned });
  }

  if ((LocalColumnSent === undefined) === false) {
    ColumnSent({ inFindColumn: LocalColumnSent });
  }
};

export { StartFunc };
