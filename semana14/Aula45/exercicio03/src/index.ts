//a.
import * as fs from 'fs';

/**
 const data: string = 'Arquivo tarefas.txt';
 const fileName: string = 'tarefas.txt';
 
 try {
     fs.writeFileSync(fileName, data);
     console.log("arquivo criado com sucesso!");
 } catch (e) {
     console.error(e);
 }
 * 
 */
/**
 const fileName: string = "tarefas.txt";
 try {
     const data: Buffer = fs.readFileSync(fileName);
     const treatedData: string = data.toString();
     console.log(treatedData);
 } catch (e) {
     console.error(e);
 }
 * 
 */
const newData: string = process.argv[2];
const data: string =("\n" + newData);
const fileName: string = 'tarefas.txt';
    
try {
    fs.appendFileSync(fileName, data, 'utf-8');
} catch (e) {
    console.error(e);
};