import { StartFunc as Status200 } from "./Status200.js";
import { StartFunc as Status500 } from "./Status500.js";

let StartFunc = async ({ inFromFetch }) => {

    if (inFromFetch.status === 200) {
        Status200(inFromFetch)
    };

    if (inFromFetch.status === 400) {
        Status500(inFromFetch)
    };
};

export { StartFunc };