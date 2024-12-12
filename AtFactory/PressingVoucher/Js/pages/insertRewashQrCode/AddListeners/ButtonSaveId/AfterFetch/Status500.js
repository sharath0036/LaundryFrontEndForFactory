let StartFunc = async (inFromFetch) => {
    let jVarLocalFetchData = await inFromFetch.json();

    Swal.fire({
        title: "Check",
        text: `${jVarLocalFetchData.KReason}`,
        icon: "error"
    })

};

export { StartFunc };