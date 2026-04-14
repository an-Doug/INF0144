export type PacienteProps = {
    id: string;
    nome: string;
    nomeSocial: string;
    cpf: string;
    dataNascimento: Date;
    sexo: string;

}

export class Paciente {
    private constructor(private props: PacienteProps) { }

    public static create(
        nome: string,
        nomeSocial: string,
        cpf: string,
        dataNascimento: Date,
        sexo: string
    ) {
        return new Paciente({
            id: crypto.randomUUID().toString(),
            nome,
            nomeSocial,
            cpf,
            dataNascimento,
            sexo,
        });
    }

    public static with(props: PacienteProps) {
        return new Paciente(props);
    }

    public get id() {
        return this.props.id;
    }

    public get nome() {
        return this.props.nome;
    }

    public get nomeSocial() {
        return this.props.nomeSocial;
    }

    public get cpf() {
        return this.props.cpf;
    }

    public get dataNascimento() {
        return this.props.dataNascimento;
    }

    public get sexo() {
        return this.props.sexo;
    }

    public alterarSexo(sexo: string) {
        let listaSexo: string[] = ['F', 'M', 'Outro'];

        if (!listaSexo.includes(sexo)) { throw new Error('The genre is not available in the list.') }
        this.props.sexo = sexo;
    }

    
}