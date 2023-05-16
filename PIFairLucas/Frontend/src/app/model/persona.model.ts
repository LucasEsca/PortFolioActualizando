export class persona{
id: number;
nombre: string;
apellido: string;
especialidad: string;
descripcion: string;
img: string;

constructor (nombre: string, apellido: string, especialidad: string, descripcion: string, img: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.especialidad = especialidad;
    this.descripcion = descripcion;
    this.img = img;
}
}