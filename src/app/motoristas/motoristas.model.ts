
export interface Motorista {
    id: number;
    nome: string;
    nacionalidade: string;
    cidade: string;
    cpf: number;
    genero: Genero;
}

export enum Genero{
    FEMININO = 'FEMININO',
    MASCULINO = 'MASCULINO'
}