import optionsJson from './options.json' with {type: 'json'};

import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";
import { StartFunc as queryParams } from "./queryParams/EntryFile.js";
import { StartFunc as responseHandler } from "./responseHandler/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    optionsJson.onClickRow = onClickRow;
    optionsJson.queryParams = queryParams;
    optionsJson.responseHandler = responseHandler;
    let jVarLocalVoucherRef = getUrlQueryParams({ inGetKey: "RefDC" });
    console.log("jVarLocalVoucherRef:",jVarLocalVoucherRef);
    
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    optionsJson.url = `/Custom/Cleaning/Factory/V1/Outward/ToBranch/QrCode/${jVarLocalVoucherRef}/${jVarLocalBranchName}`;
    $table.bootstrapTable(optionsJson);
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };