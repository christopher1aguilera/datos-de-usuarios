//funcion IIFE
const llamandopersonas = (() => {
    async function init(){
        const { results: users } = await getUsers()
        console.log(users)
        render(users)
    }
    async function getUsers(){
        try{
            const response = await fetch("https://randomuser.me/api/?results=20")
            const resp = await response.json()
            return resp
        }
        catch(error){
            console.error(error)
            return error
        }
}
function render(users){
    const user_data = document.querySelector("#user-data")
    const html = users.map(user => `<li>
    <p><strong>Nombre:</strong> ${user.name.first} ${user.name.last}<p>
    <p><strong>Nombre:</strong> ${user.phonet}<p>
    <p><strong>Nombre:</strong> ${user.email}<p>
    <img src="${user.picture.large}">
    </li>`)

const user_data_ul = document.createElement("ul")
user_data_ul.innerHTML = html.join(" ")
user_data.appendChild(user_data_ul)
}
return { init }
})()
llamandopersonas.init()