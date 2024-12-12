let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

function jVarLocalFormatterFunc(value, row, index) {
    //    console.log("row",row);

    return [
        `<a class="like btn" href="./Bill.html?BranchName=${row.BranchName}&FactoryName=${row.FactoryName}&RefDC=${row.RefDC}" title="Show">`,
        `<i class="bi bi-printer-fill"></i>`,
        '</a>',

    ].join('')

};
export { StartFunc };