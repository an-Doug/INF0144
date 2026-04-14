import type { Paciente } from "../entity/paciente.entity.ts";

export interface PacienteGateway {
    save(paciente: Paciente): Promise<void>;
    list(): Promise<Paciente[]>;
}