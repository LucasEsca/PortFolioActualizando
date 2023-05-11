export class NuevoUsuario {
    nombre: string;
    nombreUsuario: string;
    email: string;
    password: string;
    authorities: string[];

    constructor(nombreUsuario: string, password: string, nombre: string, email: string){
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
    }
}

