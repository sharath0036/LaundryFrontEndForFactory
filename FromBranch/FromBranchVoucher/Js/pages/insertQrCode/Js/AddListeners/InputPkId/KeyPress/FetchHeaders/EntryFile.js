import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let inDataToInsert = {};

    inDataToInsert.QrCodeId = jFLocalFromDomInputPkId();
    inDataToInsert.VoucherRef = getUrlQueryParams({ inGetKey: "VoucherRef" });
    inDataToInsert.BranchName = jFLocalFromDomInputBranchNameId();
    inDataToInsert.VoucherNumber = jFLocalFromDomVoucherNumberTextId();
    inDataToInsert.DCDate = jFLocalFromDomDateTextId();
    inDataToInsert.DCDescription = jFLocalFromDomDescriptionTextId();
    inDataToInsert.FactoryName = localStorage.getItem("FactoryName");

    KeysJson.body = JSON.stringify(inDataToInsert);

    return KeysJson;
};

let jFLocalFromDomInputPkId = () => {
    let jVarLocalHtmlInputPkId = 'InputPkId';
    let jVarHtmlInputPkId = document.getElementById(jVarLocalHtmlInputPkId);
    let jVarHtmlInputPkIdValue = jVarHtmlInputPkId.value.trim();
    return parseInt(jVarHtmlInputPkIdValue);
};
let jFLocalFromDomInputBranchNameId = () => {
    let jVarLocalHtmlInputBranchNameId = 'DCBranchNameId';
    let jVarHtmlInputBranchNameId = document.getElementById(jVarLocalHtmlInputBranchNameId);
    let jVarHtmlInputBranchNameIdValue = jVarHtmlInputBranchNameId.innerHTML.trim();
    return jVarHtmlInputBranchNameIdValue;
};

let jFLocalFromDomVoucherNumberTextId = () => {
    let jVarLocalHtmlVoucherNumberTextId = 'VoucherNumberDCDetailsTextId';
    let jVarHtmlVoucherNumberTextId = document.getElementById(jVarLocalHtmlVoucherNumberTextId);
    let jVarHtmlVoucherNumberTextIdValue = jVarHtmlVoucherNumberTextId.innerHTML.trim();
    return parseInt(jVarHtmlVoucherNumberTextIdValue);
};

let jFLocalFromDomDateTextId = () => {
    let jVarLocalHtmlDateTextId = 'DateTextDCDetailsId';
    let jVarHtmlDateTextId = document.getElementById(jVarLocalHtmlDateTextId);
    let jVarHtmlDateTextIdValue = jVarHtmlDateTextId.innerHTML.trim();
    return jVarHtmlDateTextIdValue;
};

let jFLocalFromDomDescriptionTextId = () => {
    let jVarLocalHtmlDescriptionTextId = 'DescriptionTextDCDetailsId';
    let jVarHtmlDescriptionTextId = document.getElementById(jVarLocalHtmlDescriptionTextId);
    let jVarHtmlDescriptionTextIdValue = jVarHtmlDescriptionTextId.innerHTML.trim();
    return jVarHtmlDescriptionTextIdValue;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return parseInt(value);
};
export { StartFunc }