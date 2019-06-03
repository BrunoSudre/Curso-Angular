import Carro from './Carro';
import IConcessionaria from './IConcessionaria';
export default class Concessionaria implements IConcessionaria {
    public endereco: string;
    public listaDeCarros: Carro[];

    constructor(endereco: string, listaDeCarros: Carro[]){
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros;
    }

    public getHorariosFuncionamento(): string {
        return 'Seg à Sex. (08:00 às 18:00)';
    }
}