import permittedCharacters from "./utlis/permitted-characters.js";


async function handler() {
    let characters = [];
    let password = "";

    const passwordLenght = process.env.PASSWORD_LENGHT;
    characters = await permittedCharacters();

    for(let i = 0; i < passwordLenght; i++){
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index];
    }

    return password;
}

export default handler;