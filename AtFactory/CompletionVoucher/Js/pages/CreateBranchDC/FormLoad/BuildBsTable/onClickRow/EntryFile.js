import { StartFunc as DCGenerate } from "./DCGenerate/EntryFile.js";

const StartFunc = (row, $element, field) => {
    if (field === 'operate') {
        DCGenerate({inrowData:row});
    }
};

export { StartFunc };