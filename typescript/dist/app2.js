"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carroA = new Carro_1.default("Argo", 4);
var carroB = new Carro_1.default("Hb20", 4);
var carroC = new Carro_1.default("Veloster", 3);
var listaCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Avenida Paulista', listaCarros);
carroA.acelerar();
carroB.acelerar();
carroA.acelerar();
carroC.acelerar();
carroC.acelerar();
carroC.acelerar();
carroC.acelerar();
carroC.acelerar();
var cliente = new Pessoa_1.default("Bruno", "Argo", new Carro_1.default("Ferrari", 2));
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
