import type { Request, Response } from "express";
import { HttpMethod } from "../route.ts";
import type { Route } from "../route.ts";
import type { CreatePacienteInputDto, CreatePacienteUsecase } from "src/usecases/paciente/create-paciente/create-paciente.usecase.ts";

export type CreatePacienteResponseDto = {
    id: string;
}

export class CreatePacienteRoute
    implements Route {

    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly createPacienteService: CreatePacienteUsecase,
    ) { }

    public static create(createPacienteService: CreatePacienteUsecase) {
        return new CreatePacienteRoute(
            '/pacientes',
            HttpMethod.POST,
            createPacienteService
        )
    }

    public getHandler() {
        return async (request: Request, response: Response) => {
            const { nome, cpf, nomeSocial, dataNascimento, sexo } = request.body;

            const input: CreatePacienteInputDto = {
                nome,
                nomeSocial,
                cpf,
                dataNascimento,
                sexo
            };

            const output: CreatePacienteResponseDto = await this.createPacienteService.execute(input);

            const responseBody = this.present(output);
            response.status(201).json(responseBody).send();
        };
    }

    public getPath(): string {
        return this.path;
    }

    public getMethod(): HttpMethod {
        return this.method;
    }

    private present(input: CreatePacienteResponseDto): CreatePacienteResponseDto {
        const response = { id: input.id };

        return response;
    }
}