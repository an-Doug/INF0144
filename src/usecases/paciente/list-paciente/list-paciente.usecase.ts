import type { Paciente } from "../../../domain/pacientes/entity/paciente.entity.ts";
import type { PacienteGateway } from "../../../domain/pacientes/gateway/paciente.gateway.ts";
import type { Usecase } from "../../usecases.ts";

export type ListPacienteInputDto = void;

export type ListPacienteOutputDto = {
    pacientes: {
        id: string;
        nome: string;
        nomeSocial: string;
        cpf: string;
        dataNascimento: Date;
        sexo: string;
    }[];
}

export class ListPacienteUsecase
    implements Usecase<ListPacienteInputDto, ListPacienteOutputDto> {
    private constructor(private readonly pacienteGateway: PacienteGateway) { }

    public static create(pacienteGateway: PacienteGateway) {
        return new ListPacienteUsecase(pacienteGateway);
    }

    public async execute(): Promise<ListPacienteOutputDto> {
        const aPacientes = await this.pacienteGateway.list();

        const output = this.presentOutput(aPacientes);

        return output;
    }

    private presentOutput(pacientes: Paciente[]): ListPacienteOutputDto {
        return {
            pacientes: pacientes.map((p) => {
                return {
                    id: p.id,
                    nome: p.nome,
                    cpf: p.cpf,
                    nomeSocial: p.nomeSocial,
                    dataNascimento: p.dataNascimento,
                    sexo: p.sexo
                }
            })
        }
    }
}