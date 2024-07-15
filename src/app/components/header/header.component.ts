import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JwtUtilService } from 'src/app/service/jwt.util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges  {
  title = 'jwt-angular';
  roleName: string = '';

  isLoggedIn: boolean = false;
  isLoggedOut: boolean = false;
  constructor(private jwtService: JwtUtilService) {
    const token = localStorage.getItem('jwt');
    this.roleName = jwtService.getRoleFromToken(localStorage.getItem('jwt'));
    if (token) {
      const isTokenExpired = jwtService.isTokenExpired(token);
      this.isLoggedIn = isTokenExpired ? false : true;
      this.isLoggedOut = isTokenExpired ? true : false;
    } else {
      this.isLoggedOut = true;
      this.isLoggedIn= false;
    }
  }
  ngOnInit(): void {
   
  }
  ngOnChanges(changes: SimpleChanges): void {
     
  }
}
