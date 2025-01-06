import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as AddListeners } from "./AddListeners/StartFunc.js";


const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {

        StartFuncFormLoad();
        AddListeners();
        // jFLocalLeftSide();

    };
};

// const jFLocalLeftSide = () => {
//     document.querySelector(".revenue-card").querySelector("h6").innerHTML = "16";
// };

StartFunc();