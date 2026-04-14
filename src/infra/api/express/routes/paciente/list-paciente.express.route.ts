import type { ListPacienteInputDto, ListPacienteOutputDto, ListPacienteUsecase } from "src/usecases/paciente/list-paciente/list-paciente.usecase.ts";
import { HttpMethod, type Route } from "../route.ts";
import type { Request, Response } from "express";


export type ListPacienteResponseDto = {
    pacientes: {
        id: string,
        nome: string,
        nomeSocial: string,
        dataNascimento: Date,
        sexo: string
    }[];
};

export class ListPacienteRoute implements Route {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly listPacienteService: ListPacienteUsecase,
    ) { }

    public static create(listPacienteService: ListPacienteUsecase) {
        return new ListPacienteRoute(
            '/pacientes',
            HttpMethod.GET,
            listPacienteService
        )
    }

    public getHandler() {
        return async (request: Request, response: Response) => {
            const output = await this.listPacienteService.execute();

            const responseBody = this.present(output);

            response.status(200).json(responseBody).send();
        }
    }

    public getPath(): string {
        return this.path;
    }

    public getMethod(): HttpMethod {
        return this.method;
    }

    private present(input: ListPacienteOutputDto): ListPacienteResponseDto {
        const response: ListPacienteResponseDto = {
            pacientes: input.pacientes.map((paciente) => ({
                id: paciente.id,
                nome: paciente.nome,
                nomeSocial: paciente.nomeSocial,
                dataNascimento: paciente.dataNascimento,
                sexo: paciente.sexo,
            })),
        };

        return response;
    }
}