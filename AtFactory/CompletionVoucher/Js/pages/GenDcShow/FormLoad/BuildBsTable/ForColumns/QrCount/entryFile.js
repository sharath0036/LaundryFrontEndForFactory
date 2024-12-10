let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
    inFindColumn.footerFormatter = priceFormatter;

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

function priceFormatter(data) {
    var field = this.field
    return '' + data.map(function (row) {
        return +row.QrCount
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
}

export { StartFunc };