import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let inDataToInsert = {}
    inDataToInsert.QrCodeId = jFLocalFromDomInputPkId();
    inDataToInsert.ItemName = jFLocalFromDomInputProductNameId();
    inDataToInsert.FactorySelected = jFLocalFromDomInputFactorySelectedId();
    inDataToInsert.VoucherRef = jFLocalFromDomInputVoucherRefId();
    inDataToInsert.BranchName = jFLocalFromDomInputBranchNameId();
    inDataToInsert.VoucherNumber = jFLocalFromDomVoucherNumberTextId();
    inDataToInsert.DCDate = jFLocalFromDomDateTextId();
    inDataToInsert.DCDescription = jFLocalFromDomDescriptionTextId();
    inDataToInsert.OrderNumber = jFLocalFromDomOrderNumberId();
    inDataToInsert.OrderDate = jFLocalFromDomOrderDateId();
    inDataToInsert.DeliveryDate = jFLocalFromDomDeliveryDateId();
    inDataToInsert.FactoryName = localStorage.getItem("FactoryName");
    inDataToInsert.Description = jFLocalDescription();
    inDataToInsert.Return = jFLocalserviceType();

    KeysJson.body = JSON.stringify(inDataToInsert);
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

let jFLocalFromDomInputVoucherRefId = () => {
    let jVarLocalHtmlInputVoucherRefId = 'InputVoucherRefId';
    let jVarHtmlInputVoucherRefId = document.getElementById(jVarLocalHtmlInputVoucherRefId);
    let jVarHtmlInputVoucherRefIdValue = jVarHtmlInputVoucherRefId.value.trim();
    return jVarHtmlInputVoucherRefIdValue;
};

let jFLocalFromDomInputBranchNameId = () => {
    let jVarLocalHtmlInputBranchNameId = 'BranchNameTextDCDetailsId';
    let jVarHtmlInputBranchNameId = document.getElementById(jVarLocalHtmlInputBranchNameId);
    let jVarHtmlInputBranchNameIdValue = jVarHtmlInputBranchNameId.innerHTML;
    return jVarHtmlInputBranchNameIdValue;
};

let jFLocalFromDomVoucherNumberTextId = () => {
    let jVarLocalHtmlVoucherNumberTextId = 'VoucherNumberTextId';
    let jVarHtmlVoucherNumberTextId = document.getElementById(jVarLocalHtmlVoucherNumberTextId);
    let jVarHtmlVoucherNumberTextIdValue = jVarHtmlVoucherNumberTextId.value.trim();
    return jVarHtmlVoucherNumberTextIdValue;
};

let jFLocalFromDomInputFactorySelectedId = () => {
    let jVarLocalHtmlInputFactorySelectedId = 'InputFactorySelectedId';
    let jVarHtmlInputFactorySelectedId = document.getElementById(jVarLocalHtmlInputFactorySelectedId);
    let jVarHtmlInputFactorySelectedIdValue = jVarHtmlInputFactorySelectedId.value.trim();
    return jVarHtmlInputFactorySelectedIdValue;
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


let jFLocalserviceType = () => {
    let jVarLocalserviceType = 'serviceType'
    let jVarLocalHtmlId = document.getElementsByName(jVarLocalserviceType);
    let selectedValue = null;
    for (const radio of jVarLocalHtmlId) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    return selectedValue;
};

// Display the selected value
export { StartFunc }