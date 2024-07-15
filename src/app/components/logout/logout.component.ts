import { Component } from '@angular/core';
import { JwtUtilService } from 'src/app/service/jwt.util.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private jwtService:JwtUtilService){

   localStorage.removeItem('jwt');
 ;
  }

}
