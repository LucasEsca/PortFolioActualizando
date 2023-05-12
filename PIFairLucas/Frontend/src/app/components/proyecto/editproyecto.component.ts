import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent {
  proyect: Proyecto = null;

  constructor(private sProyecto: ProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router, public imageService : ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data =>{
        this.proyect = data;
      },err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      });
}

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proyect).subscribe(
        data => {
          this.router.navigate(['home']);
    }, err =>{
      alert("Error al modificar proyecto");
      this.router.navigate(['home']);
   });
   this.proyect.img = this.imageService.url
   this.sProyecto.update(id, this.proyect).subscribe(
     data => {
       this.router.navigate(['home']);
     }, err => {
       alert("Error al modificar");
       this.router.navigate(['home']);
     })
}
uploadImage($event: any) {
  const id = this.activatedRouter.snapshot.params['id'];
  const name = "perfil_" + id;
  this.imageService.uploadImage($event, name)
}
}
