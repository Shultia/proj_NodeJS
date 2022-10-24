import fs from 'fs';
import chalk from 'chalk';


function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.blue(erro.code, 'nao ha arquivo no diretorio'));
}

//async //await

async function PegaArquivo(caminhoDoArquivo){
   try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo,encoding)
        console.log(chalk.blue(texto))
   } catch(erro) {
        trataErro(erro)
   }
    
}


//Promises com then

// function PegaArquivo(caminhoDoArquivo){
//    
//     .then((Text) =>console.log(chalk.green(Text)))
//     .catch((erro) => trataErro(erro))
// }


PegaArquivo("./Arquivos/Text.md")

