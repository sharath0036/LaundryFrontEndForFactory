// import { StartFunc as StartFuncButtonSaveId } from "./ButtonSaveId/1-ClickAssign.js";
import { StartFunc as StartFuncButtonSaveId } from "../../../ButtonSaveId/1-ClickAssign.js";

let StartFunc = async ({ inFetchResonse }) => {
    let jVarLocalResponseData = await inFetchResonse.json();


    if (Object.values(jVarLocalResponseData).length > 0) {
        let jVarLocalFetchData = jVarLocalResponseData;
        jVarGlobalPresentViewData2 = jVarLocalFetchData;

        jFLocalToInputInputPkId({ inInputPkId: jVarLocalFetchData.pk });
        jFLocalToInputInputProductNameId({ inInputProductNameId: jVarLocalFetchData.ItemName });
        jFLocalToInputInputSalePriceId({ inInputSalePriceId: jVarLocalFetchData.Rate });
        jFLocalToInputFactorySelectedId({ inInputFactorySelectedId: jVarLocalFetchData.location })
        jFLocalToInputBranchNameId({ inInputValue: jVarLocalFetchData.BookingData.OrderData.BranchName });
        jFLocalToInputOrderNumberId({ inInputValue: jVarLocalFetchData.GenerateReference.ReferncePk });
        jFLocalToInputOrderDateId({ inInputValue: jVarLocalFetchData.BookingData.OrderData.Currentdateandtime });
        jFLocalToInputDeliveryDateId({ inInputValue: jVarLocalFetchData.DeliveryDateTime });
        jFLocalRunSaveClick();
    };
};
let jFLocalRunSaveClick = () => {
    // Validate specific fields before triggering the Save button
    if (jFValidateSpecificInputs()) {
        StartFuncButtonSaveId()
    }
    else{
        alert("enter the qr code");
    }
};

let jFValidateSpecificInputs = () => {
    
    let requiredFields = [
        'InputProductNameId',  // Product Name
        'InputSalePriceId',    // Sale Price
        'InputBranchNameId',   // Branch Name
        'OrderDateId'          // Order Date
    ];

    // Iterate through the required fields and check if any is empty
    for (let fieldId of requiredFields) {
        let fieldElement = document.getElementById(fieldId);
        if (fieldElement === null || fieldElement.value.trim() === "") {
           
            return false; 
        }
    }

    return true; 
};

let jFLocalToInputInputProductNameId = ({ inInputProductNameId }) => {
    let jVarLocalHtmlId = 'InputProductNameId';
    let jVarLocalInputProductNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalInputProductNameId === null === false) {
        jVarLocalInputProductNameId.value = inInputProductNameId;
    };
};

let jFLocalToInputInputSalePriceId = ({ inInputSalePriceId }) => {
    let jVarLocalHtmlId = 'InputSalePriceId';
    let jVarLocalInputSalePriceId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputSalePriceId.value = inInputSalePriceId;
};

let jFLocalToInputFactorySelectedId = ({ inInputFactorySelectedId }) => {
    let jVarLocalHtmlId = 'InputFactorySelectedId';
    let jVarLocalInputFactorySelectedId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputFactorySelectedId.value = inInputFactorySelectedId;
};

let jFLocalToInputInputPkId = ({ inInputPkId }) => {
    let jVarLocalHtmlId = 'InputPkId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputPkId;
};

let jFLocalToInputBranchNameId = ({ inInputValue }) => {
    let jVarLocalHtmlId = 'InputBranchNameId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputValue;
};

let jFLocalToInputOrderNumberId = ({ inInputValue }) => {
    let jVarLocalHtmlId = 'OrderNumberId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputValue;
};

let jFLocalToInputOrderDateId = ({ inInputValue }) => {
    let jVarLocalHtmlId = 'OrderDateId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputValue;
};

let jFLocalToInputDeliveryDateId = ({ inInputValue }) => {
    let jVarLocalHtmlId = 'DeliveryDateId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputValue;
};

export { StartFunc };