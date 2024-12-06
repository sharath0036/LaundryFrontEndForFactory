const StartFunc = () => {
    let jvarLocalFactoryName = localStorage.getItem("FactoryName");
    jFLocalToInputFactoryName(jvarLocalFactoryName);
    jFLocalToInputDate()
};

let jFLocalToInputFactoryName = (inValue) => {
    let jVarLocalHtmlId = 'FactoryName';
    let jVarLocalFactoryName = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalFactoryName === null === false) {
        jVarLocalFactoryName.value = inValue;
    };
};

let jFLocalToInputDate = () => {
    // const today = new Date();
    // const formattedDate = today.toISOString().split('T')[0];
    // let jVarLocalHtmlId = 'Date';
    // let jVarLocalDate = document.getElementById(jVarLocalHtmlId);

    // if (jVarLocalDate === null === false) {
    //     jVarLocalDate.value = formattedDate;
    // };
    
    var today = new Date(); 
    today.setDate(today.getDate());
    var dd = String(today.getDate()).padStart(2, '0'); 
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear(); 
    var nextWeek=yyyy + '-' + mm + '-' + dd; 
    var dateInput=document.getElementById("Date");
    dateInput.value=nextWeek;
    dateInput.setAttribute("min",nextWeek);
};
export { StartFunc }