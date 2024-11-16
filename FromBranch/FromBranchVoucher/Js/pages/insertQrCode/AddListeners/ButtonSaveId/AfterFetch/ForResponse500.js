let StartFunc = async ({ inFetchResonse }) => {
    Swal.fire({
        icon: "error", 
        title: "Server Error (500)",
        text: "An unexpected server error occurred. Please try again later.",
        footer: "If the issue persists, contact support.", 
    });
    
}
export { StartFunc };