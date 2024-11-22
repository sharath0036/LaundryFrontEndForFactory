import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";
import { StartFunc as queryParams } from "./queryParams/EntryFile.js";
import { StartFunc as responseHandler } from "./responseHandler/EntryFile.js";
let jVarLocalFactoryName = localStorage.getItem("FactoryName");

const StartFunc = () => {
    var $table = $('#table');
    let jVarLocalRefDC = getUrlQueryParams({ inGetKey: "RefDC" });

    optionsJson.onClickRow = onClickRow;
    optionsJson.queryParams = queryParams;
    optionsJson.responseHandler = responseHandler;
    optionsJson.url = optionsJson.url.replace("$RefDCValue", jVarLocalRefDC);

    $table.bootstrapTable(optionsJson);
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };