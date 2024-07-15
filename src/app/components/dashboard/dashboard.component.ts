import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  message: string;

  constructor(
    private service: JwtService,
    private router:Router
  ) { 
    //router.navigate(['/dashboard']);
   // window.location.reload();
  }

  ngOnInit() {
    this.hello();
  //  if (!sessionStorage.getItem( 'pageLoaded')) {

     // sessionStorage.setItem( 'pageLoaded','true');

      this.router.navigateByUrl(this.router.url, { skipLocationChange: true });
      this.router.navigateByUrl(this.router.url, { skipLocationChange: true }).then(() => {
        this.router.navigate([this.router.url]);
    });
   // }
  }

  hello() {
    this.service.hello().subscribe(
      (response) => {
        console.log(response);
        this.message = response.message;
      }
    )
  }
}
