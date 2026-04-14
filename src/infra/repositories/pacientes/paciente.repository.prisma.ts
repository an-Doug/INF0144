import { PrismaClient } from "../../../generated/prisma/client.ts";
import { Paciente } from "../../../domain/pacientes/entity/paciente.entity.ts";
import type { PacienteGateway } from "../../../domain/pacientes/gateway/paciente.gateway.ts";

export class PacienteRepositoryPrisma
    implements PacienteGateway {

    private constructor(private readonly prismaClient: PrismaClient) {

    }

    public static create(prismaClient: PrismaClient) {
        return new PacienteRepositoryPrisma(prismaClient);
    }

    public async save(paciente: Paciente): Promise<void> {
        const data = {
            id: paciente.id,
            nome: paciente.nome,
            nomeSocial: paciente.nomeSocial,
            cpf: paciente.cpf,
            dataNascimento: paciente.dataNascimento,
            sexo: paciente.sexo
        };

        await this.prismaClient.paciente.create({ data })
    }

    public async list(): Promise<Paciente[]> {
        const pacientes = await this.prismaClient.paciente.findMany();

        const pacienteList = pacientes.map((p) => {
            const paciente = Paciente.with({
                id: p.id,
                nome: p.nome,
                nomeSocial: p.nomeSocial,
                dataNascimento: p.dataNascimento,
                cpf: p.cpf,
                sexo: p.sexo
            });

            return paciente;
        })

        return pacienteList;
    }

}