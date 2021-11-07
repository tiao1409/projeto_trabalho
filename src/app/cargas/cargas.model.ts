import { Motorista } from "../motoristas/motoristas.model";
import { Frota } from "../frotas/frotas.model"


export interface Carga {
    id: number;
    nf: string;
    estado: string;
    municipio: string;
    frete: string;
    tipo: string;
    peso: string;
    motoristas: Motorista[];
    frotas: Frota[];
}
