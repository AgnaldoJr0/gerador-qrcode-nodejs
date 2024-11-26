import dotenv from "dotenv";
dotenv.config();


import prompt from "prompt";

import mainPromt from "./prompts/prompt-main.js"

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(mainPromt, async (err, choose) => {
        if (err) console.log(err);

        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await createPassword();
    });

    prompt.start();
}


main();