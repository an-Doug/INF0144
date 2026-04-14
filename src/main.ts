import 'dotenv/config'

import { ApiExpress } from "./infra/api/express/api.express.ts";
import { CreatePacienteRoute } from "./infra/api/express/routes/paciente/create-paciente.express.route.ts";
import { ListPacienteRoute } from "./infra/api/express/routes/paciente/list-paciente.express.route.ts";
import { PacienteRepositoryPrisma } from "./infra/repositories/pacientes/paciente.repository.prisma.ts";
import { prisma } from "./package/prisma/prisma.ts";
import { CreatePacienteUsecase } from "./usecases/paciente/create-paciente/create-paciente.usecase.ts";
import { ListPacienteUsecase } from "./usecases/paciente/list-paciente/list-paciente.usecase.ts";

function main() {
    const aRepository = PacienteRepositoryPrisma.create(prisma);

    const createPacienteUsecase = CreatePacienteUsecase.create(aRepository);
    const listPacienteUsecase = ListPacienteUsecase.create(aRepository);

    const createRoute = CreatePacienteRoute.create(createPacienteUsecase);
    const listRoute = ListPacienteRoute.create(listPacienteUsecase);


    const api = ApiExpress.create([createRoute, listRoute]);
    const port = 8000;
    api.start(port);
}

main();