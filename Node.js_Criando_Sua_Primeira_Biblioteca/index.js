import fs from 'fs';
import chalk from 'chalk';

function PegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo,encoding,(_,texto)=> {
        console.log(chalk.red(texto))
    })
}

PegaArquivo("./Arquivos/text.md")