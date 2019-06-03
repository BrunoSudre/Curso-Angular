import Carro from './Carro';
import Moto from './Moto';
import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria';

let carroA = new Carro("Argo", 4);
let carroB = new Carro("Hb20", 4);
let carroC = new Carro("Veloster", 3);

let listaCarros: Array<Carro> = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('Avenida Paulista', listaCarros);
carroA.acelerar();
carroB.acelerar();
carroA.acelerar();
carroC.acelerar();
carroC.acelerar();
carroC.acelerar();
carroC.acelerar();
carroC.acelerar();

let cliente = new Pessoa ("Bruno", "Argo", new Carro("Ferrari", 2));
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});

console.log(cliente.dizerCarroQueTem());