import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellowBright("Digite o link para gerar o QR Code"),
    },
    {
        name: "type",
        description: chalk.yellowBright("Escolha entre o 1-Normal ou 2-Terminal"),
        pattern:/^[1-2]+$/,
        message: chalk.redBright.italic("Escolha apenas entre 1 e 2"),
        require: true,
    },
];

export default promptQRCode;
