const StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = symbolFormatPrice;
    inFindColumn.footerFormatter  = totalFormatter;
};

function totalFormatter(data) {
    var field = this.field;
    let LocalTotal = data.map(function (row) {
        if (row[field] === undefined) {
            return 0;
        };
        return +row[field];
    }).reduce(function (sum, i) {
        return sum + i
    }, 0);

    return LocalTotal.toFixed(2);
};
function symbolFormatPrice(data) {
        var field = this.field
        return '₹ '+data;

     }



export { StartFunc };
