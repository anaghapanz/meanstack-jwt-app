import { AuthguardService } from "./services/authguard.service";
import { PopregisterComponent } from "./popregister/popregister.component";
import { PoploginComponent } from "./poplogin/poplogin.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "home", canActivate: [AuthguardService], component: HomeComponent },
  { path: "poplogin", component: PoploginComponent },
  { path: "popregister", component: PopregisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
