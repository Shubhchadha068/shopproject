import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
  import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {


  constructor(private authservice: AuthService,private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      const user =this.authservice.getUser();
      if(this.authservice.getUser()==='admin'){
        return true;
      }
      this.router.navigate(['/404/']);
      return false;

    }
  }

