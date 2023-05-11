import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;

  constructor(private authService: AuthService,private router: Router){}

  ngOnInit(): void {
  }

  onSingUp(): void{
    const newuser = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(newuser).subscribe(
      data =>{
        alert("Usuario creado correctamente");
        this.router.navigate(['home']);
      }, err =>{
        alert("falló");
        this.router.navigate(['home']);
      }
    )
  }


}
