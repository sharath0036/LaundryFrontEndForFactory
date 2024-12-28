import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let inDataToInsert = {}
    inDataToInsert.references = {};
    // inDataToInsert.references.FilterObject = {};
    // inDataToInsert.references.FilterObject.VoucherRef = jFLocalFromDomInputVoucherRefId();
    // inDataToInsert.references.FilterObject.QrCodeId = jFLocalFromDomInputPkId();

    inDataToInsert.InSertObject = {};
    inDataToInsert.InSertObject.QrCodeId = jFLocalFromDomInputPkId();
    inDataToInsert.InSertObject.ItemName = jFLocalFromDomInputProductNameId();
    inDataToInsert.InSertObject.Rate = jFLocalFromDomInputSalePriceId();
    inDataToInsert.InSertObject.FactorySelected = jFLocalFromDomInputFactorySelectedId();
    inDataToInsert.InSertObject.VoucherRef = jFLocalFromDomInputVoucherRefId();
    inDataToInsert.InSertObject.BranchName = jFLocalFromDomInputBranchNameId();
    inDataToInsert.InSertObject.VoucherNumber = getUrlQueryParams({ inGetKey: "VoucherRef" });
    inDataToInsert.InSertObject.DCFactory = jFLocalFromDomDCFactoryTextId();
    inDataToInsert.InSertObject.DCDate = jFLocalFromDomDateTextId();
    inDataToInsert.InSertObject.DCDescription = jFLocalFromDomDescriptionTextId();
    inDataToInsert.InSertObject.OrderNumber = jFLocalFromDomOrderNumberId();
    inDataToInsert.InSertObject.OrderDate = jFLocalFromDomOrderDateId();
    inDataToInsert.InSertObject.DeliveryDate = jFLocalFromDomDeliveryDateId();
    inDataToInsert.InSertObject.Description = jFLocalDescription();
    inDataToInsert.InSertObject.FactoryName = localStorage.getItem("FactoryName");

    KeysJson.body = JSON.stringify(inDataToInsert.InSertObject);
    return KeysJson;
};

let jFLocalFromDomInputPkId = () => {
    let jVarLocalHtmlInputPkId = 'InputPkId';
    let jVarHtmlInputPkId = document.getElementById(jVarLocalHtmlInputPkId);
    let jVarHtmlInputPkIdValue = jVarHtmlInputPkId.value.trim();
    return jVarHtmlInputPkIdValue;
};

let jFLocalFromDomInputProductNameId = () => {
    let jVarLocalHtmlInputProductNameId = 'InputProductNameId';
    let jVarHtmlInputProductNameId = document.getElementById(jVarLocalHtmlInputProductNameId);
    let jVarHtmlInputProductNameIdValue = jVarHtmlInputProductNameId.value.trim();
    return jVarHtmlInputProductNameIdValue;
};

let jFLocalFromDomInputSalePriceId = () => {
    let jVarLocalHtmlInputSalePriceId = 'InputSalePriceId';
    let jVarHtmlInputSalePriceId = document.getElementById(jVarLocalHtmlInputSalePriceId);
    let jVarHtmlInputSalePriceIdValue = jVarHtmlInputSalePriceId.value.trim();
    return jVarHtmlInputSalePriceIdValue;
};

let jFLocalFromDomInputVoucherRefId = () => {
    let jVarLocalHtmlInputVoucherRefId = 'VoucherNumberDCDetailsTextId';
    let jVarHtmlInputVoucherRefId = document.getElementById(jVarLocalHtmlInputVoucherRefId);
    let jVarHtmlInputVoucherRefIdValue = parseInt(jVarHtmlInputVoucherRefId.innerHTML.trim());
    return jVarHtmlInputVoucherRefIdValue;
};

let jFLocalFromDomInputBranchNameId = () => {
    let jVarLocalHtmlInputBranchNameId = 'DCBranchNameId';
    let jVarHtmlInputBranchNameId = document.getElementById(jVarLocalHtmlInputBranchNameId);
    let jVarHtmlInputBranchNameIdValue = jVarHtmlInputBranchNameId.innerHTML;
    return jVarHtmlInputBranchNameIdValue;
};


let jFLocalFromDomInputFactorySelectedId = () => {
    let jVarLocalHtmlInputFactorySelectedId = 'InputFactorySelectedId';
    let jVarHtmlInputFactorySelectedId = document.getElementById(jVarLocalHtmlInputFactorySelectedId);
    let jVarHtmlInputFactorySelectedIdValue = jVarHtmlInputFactorySelectedId.value.trim();
    return jVarHtmlInputFactorySelectedIdValue;
};

let jFLocalFromDomDCFactoryTextId = () => {
    let jVarLocalHtmlDCFactoryTextId = 'DCFactoryTextId';
    let jVarHtmlDCFactoryTextId = document.getElementById(jVarLocalHtmlDCFactoryTextId);
    let jVarHtmlDCFactoryTextIdValue = jVarHtmlDCFactoryTextId.value.trim();
    return jVarHtmlDCFactoryTextIdValue;
};

let jFLocalFromDomDescriptionTextId = () => {
    let jVarLocalHtmlDescriptionTextId = 'DescriptionTextId';
    let jVarHtmlDescriptionTextId = document.getElementById(jVarLocalHtmlDescriptionTextId);
    let jVarHtmlDescriptionTextIdValue = jVarHtmlDescriptionTextId.value.trim();
    return jVarHtmlDescriptionTextIdValue;
};

let jFLocalFromDomDateTextId = () => {
    let jVarLocalHtmlDateTextId = 'DateTextId';
    let jVarHtmlDateTextId = document.getElementById(jVarLocalHtmlDateTextId);
    let jVarHtmlDateTextIdValue = jVarHtmlDateTextId.value.trim();
    return jVarHtmlDateTextIdValue;
};

let jFLocalFromDomOrderNumberId = () => {
    let jVarLocalHtmlOrderNumberId = 'OrderNumberId';
    let jVarHtmlOrderNumberId = document.getElementById(jVarLocalHtmlOrderNumberId);
    let jVarHtmlOrderNumberIdValue = jVarHtmlOrderNumberId.value.trim();
    return jVarHtmlOrderNumberIdValue;
};

let jFLocalFromDomOrderDateId = () => {
    let jVarLocalHtmlOrderDateId = 'OrderDateId';
    let jVarHtmlOrderDateId = document.getElementById(jVarLocalHtmlOrderDateId);
    let jVarHtmlOrderDateIdValue = jVarHtmlOrderDateId.value.trim();
    return jVarHtmlOrderDateIdValue;
};

let jFLocalFromDomDeliveryDateId = () => {
    let jVarLocalHtmlDeliveryDateId = 'DeliveryDateId';
    let jVarHtmlDeliveryDateId = document.getElementById(jVarLocalHtmlDeliveryDateId);
    let jVarHtmlDeliveryDateIdValue = jVarHtmlDeliveryDateId.value.trim();
    return jVarHtmlDeliveryDateIdValue;
};
let jFLocalDescription = () => {
    let jVarLocalDescription = 'Description'
    let jVarLocalHtmlId = document.getElementById(jVarLocalDescription);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc }