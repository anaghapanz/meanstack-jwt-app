import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RegistrationService } from "../services/registration.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  Data = {};
  constructor(
    private node: RegistrationService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  login(form: NgForm) {
    this.node.vali(form.value).subscribe(
      res => {
        localStorage.setItem("token", res);
        this.router.navigate(["/home"]);
      },
      err => console.log(err)
    );
  }
}
