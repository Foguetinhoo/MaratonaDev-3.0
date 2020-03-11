export async function setDonors(form){
    const response = await fetch('http://localhost:4200/v1/api/donors/create', {
        method:"POST",
        body:JSON.stringify(form),
        headers: {
            "Content-Type": "application/json"
        },
        cache:"no-cache"
    })
    return response;
}
export  async function getDonors(){
    const response = await fetch('http://localhost:4200/v1/api/donors/all', {
        method:"GET",
        headers: {
            "Content-Type": "application/json"
        },
        cache:"no-cache"
    })
    return response;
}