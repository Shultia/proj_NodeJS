import fs from 'fs';
import chalk from 'chalk';



function  extraiLinks(texto){
     const regex =  /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
     const capturas = [...texto.matchAll(regex)];
     const resultados = capturas.map(captura => ({[captura[1]]: captura
     [2]}))
     return resultados;
}

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.blue(erro.code, 'nao ha arquivo no diretorio'));
}



//async //await

async function PegaArquivo(caminhoDoArquivo){
   try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo,encoding)
       console.log(extraiLinks(texto))
   } catch(erro) {
        trataErro(erro)
   }
    
}


PegaArquivo("./Arquivos/text.md")

