let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

function jVarLocalFormatterFunc(value, row, index) {
//    console.log("row",row);
   
    return [
        `<a class="like btn btn-success" href="./GenerateAllShowAll.html?BranchName=${row.BranchName}&RefDC=${row.RefDC}" title="Show">`,
        ' ',
        row.QrCount,
        '</a>',

    ].join('')

};

export { StartFunc };