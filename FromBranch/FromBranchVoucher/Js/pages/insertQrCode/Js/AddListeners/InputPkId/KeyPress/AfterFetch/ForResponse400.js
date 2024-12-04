let StartFunc = async ({ inFetchResonse }) => {
    let localData = await inFetchResonse.json();

    Swal.fire({
        icon: 'error',
        title: `${localData.KReason}`,
        confirmButtonText: "ok",
    }).then((result) => {

        if (result.isConfirmed || result.isDismissed) {
            InputPkId();
        };
    });
};
const InputPkId = () => {
    let jVarLocalHtmlId = 'InputPkId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalLength = jVarLocalInputPkId.value.trim().length;
    jVarLocalInputPkId.setSelectionRange(0, jVarLocalLength);

};

export { StartFunc };