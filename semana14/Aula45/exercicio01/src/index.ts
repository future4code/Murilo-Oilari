//a.
/**
 const nome: string = process.argv[2];
 
 console.log("nome: ", nome);
 * 
 */

//b.
/**
 const seuNome: string = process.argv[2];
 const suaIdade: number = Number(process.argv[3]);
 
 console.log("Olá, ", seuNome, "! você tem ", suaIdade, " anos.");
 * 
 */

//c.
const seuNome: string = process.argv[2];
const suaIdade: number = Number(process.argv[3]);
const idadeMaisSete: number = Number(suaIdade + 7);

console.log("Olá, ", seuNome, "! você tem ", suaIdade, " anos. Em sete anos você terá ", idadeMaisSete);
