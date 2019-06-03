import Carro from './Carro';
export default class Pessoa {
    public nome: string;
    public carroPreferido: string;
    public carro: Carro;
    
    constructor(nome: string, carroPreferido: string, carro: Carro) 
    {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
        this.carro = carro;
    }

    public dizerNome(): string
    {
        return this.nome;
    }

    public dizerCarroPreferido(): String
    {
        return this.carroPreferido;
    }

    public dizerCarroQueTem(): Carro
    {
        return this.carro;
    }

    public comprarCarro(carro: Carro): void
    {
        this.carro = carro;
    }
}
