//import de modulos

import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAuteticacao} from "./Funcionarios/SistemaAuteticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 123456789);
const gerente = new Gerente("Ricardo",5000,987654321);

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123")

const diretorestaLogado = SistemaAuteticacao.login(diretor,"123456");
const gerenteestaLogado = SistemaAuteticacao.login(gerente,"123");

const cliente = new Cliente("Lais", 123456789, "456");

const clienteLogado = SistemaAuteticacao.login(cliente, "456");

console.log(diretorestaLogado, gerenteestaLogado);


console.log(clienteLogado);
