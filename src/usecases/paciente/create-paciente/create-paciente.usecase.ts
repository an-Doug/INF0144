import { Paciente } from "../../../domain/pacientes/entity/paciente.entity.ts";


import type { PacienteGateway } from "../../../domain/pacientes/gateway/paciente.gateway.ts";
import type { Usecase } from "../../usecases.ts";

export type CreatePacienteInputDto = {
    nome: string;
    cpf: string;
    nomeSocial: string;
    dataNascimento: Date;
    sexo: string;
};

export type CreatePacienteOutputDto = {
    id: string;
};


export class CreatePacienteUsecase
    implements Usecase<CreatePacienteInputDto, CreatePacienteOutputDto> {

    private constructor(private readonly pacienteGateway: PacienteGateway) {

    }

    public static create(pacienteGateway: PacienteGateway) {
        return new CreatePacienteUsecase(pacienteGateway);
    }

    public async execute({
        nome,
        cpf,
        nomeSocial,
        dataNascimento,
        sexo
    }: CreatePacienteInputDto): Promise<CreatePacienteOutputDto> {
        const aPaciente = Paciente.create(nome, cpf, nomeSocial, dataNascimento, sexo)
        await this.pacienteGateway.save(aPaciente);

        const output: CreatePacienteOutputDto = {
            id: aPaciente.id
        }

        return output;
    }
}