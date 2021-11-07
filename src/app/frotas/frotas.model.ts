import { Motorista } from "../motoristas/motoristas.model";

export interface Frota {
    id: number;
    modelo: string;
    estado: string;
    municipio: string;
    placa: string;
    tipo: string;
    motoristas: Motorista[];
}
