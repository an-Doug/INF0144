import express, { type Express } from 'express';
import type { Api } from "../api.ts";
import type { Route } from './routes/route.ts';

export class ApiExpress implements Api {

    private app: Express;
    private routes: { method: string, path: string }[] = []; // ← rastreia as rotas

    private constructor(routes: Route[]) {
        this.app = express();
        this.app.use(express.json());
        this.addRoutes(routes);
    }

    public static create(routes: Route[]) {
        return new ApiExpress(routes);
    }

    private addRoutes(routes: Route[]) {
        routes.forEach((route) => {
            const path = route.getPath();
            const method = route.getMethod();
            const handler = route.getHandler();

            this.routes.push({ method: method.toUpperCase(), path }); // ← salva a rota
            this.app[method](path, handler);
        })
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
            this.listRoutes();
        });
    }

    private listRoutes() {
        console.log("Rotas registradas:");
        this.routes.forEach(route => {
            console.log(`${route.method} ${route.path}`);
        });
    }
}