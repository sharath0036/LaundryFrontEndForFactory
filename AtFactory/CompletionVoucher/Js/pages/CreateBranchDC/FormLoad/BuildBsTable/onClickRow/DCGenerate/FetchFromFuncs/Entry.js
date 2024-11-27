import { StartFunc as StartFuncFetchFuncs } from "./GetFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({ inrowData }) => {

    let jVarLocalDataNeeded = await StartFuncFetchFuncs({ inrowData });

    if (jVarLocalDataNeeded.status === 200) {
        StartFuncAfterFetch({ inrowData });
    };
};

export { StartFunc };