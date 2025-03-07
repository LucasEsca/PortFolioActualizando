import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  isLogged= false;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  login(){
    this.router.navigate(['/login'])
  }
  registro(){
    this.router.navigate(['/registro'])
  }
  home(){
    this.router.navigate(['/home'])
  }
}
