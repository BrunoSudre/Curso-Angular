import Carro from "./Carro";
import Moto from "./Moto";
import Concessionaria from "./Concessionaria";

let carro = new Carro("Argo", 4);
let moto = new Moto("CBR-1000R");
let concessionaria = new Concessionaria('', []);
carro.acelerar()
carro.acelerar()

moto.acelerar()
moto.acelerar()

console.log(carro);
console.log(moto);

console.log(concessionaria.getHorariosFuncionamento());
