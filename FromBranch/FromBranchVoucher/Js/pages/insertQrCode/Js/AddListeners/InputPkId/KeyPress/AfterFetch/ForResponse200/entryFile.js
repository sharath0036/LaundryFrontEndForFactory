import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom/entryFile.js";

let StartFunc = async ({ inFetchResonse }) => {
    let localData = await inFetchResonse.json();
    StartFuncShowOnDom({ inFromFetch: localData });


};


export { StartFunc };