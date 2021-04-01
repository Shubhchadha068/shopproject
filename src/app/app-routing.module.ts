import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApbrushComponent } from './apbrush/apbrush.component';
import { ApwallkretexComponent } from './apwallkretex/apwallkretex.component';
import { ApwallpaintComponent } from './apwallpaint/apwallpaint.component';
import { ApwallputtyComponent } from './apwallputty/apwallputty.component';
import { DoorpaintComponent } from './doorpaint/doorpaint.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuardService } from './guard/role-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SmartcareComponent } from './smartcare/smartcare.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'products',
    component:ProductsComponent,
    // canActivate:[AuthGuard]
  },
{
  path:'gallery',
  component:GalleryComponent
},
  {
    path:'apbrush',
    component:ApbrushComponent
  },
  {
    path:'wallpaint',
    component:ApwallpaintComponent
  },{
    path:"wallputty",
    component:ApwallputtyComponent
  },
  {
    path:"createx",
    component:ApwallkretexComponent
  },{
    path:"doorPaint",
    component:DoorpaintComponent
  },{
    path:"smartcare",
    component:SmartcareComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[RoleGuardService]
  },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
