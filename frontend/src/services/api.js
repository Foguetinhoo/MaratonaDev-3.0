export default async function enviaDados(){
    const response = await fetch('https://api.github.com/users/Foguetinho')
console.log(response)
    return response;
}