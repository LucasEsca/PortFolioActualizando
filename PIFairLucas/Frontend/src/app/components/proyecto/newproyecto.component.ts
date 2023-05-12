import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent {

  nombreP : string = '';
  descripcionP : string = '';
  img : string = '';

  constructor(private sProyecto: ProyectoService, private router: Router, private activatedRouter: ActivatedRoute, public imageService : ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyecto(this.nombreP, this.descripcionP, this.img);
    this.sProyecto.save(proy).subscribe(
      data => {
        alert("Proyecto añadida");
        this.router.navigate(['home']);
      }, err => {
        alert("Falló");
        this.router.navigate(['home']);
      }
    )
  }
  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }
}
