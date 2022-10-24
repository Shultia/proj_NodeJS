import fs from 'fs';
import chalk from 'chalk';


function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.blue(erro.code, 'nao ha arquivo no diretorio'));
}

function PegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo,encoding)
    .then((Text) =>console.log(chalk.green(Text)))
    .catch((erro) => trataErro(erro))
}

// function PegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//     fs.readFile(caminhoDoArquivo,encoding,(_,texto)=> {
//         console.log(chalk.red(texto))
//     })
// }

PegaArquivo("./Arquivos/text.md")
