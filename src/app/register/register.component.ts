import { Router } from "@angular/router";
import { RegistrationService } from "./../services/registration.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private node: RegistrationService, private router: Router) {}

  Data = {};

  ngOnInit() {}

  register(form: NgForm) {
    this.node.register(form.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res);
        this.router.navigate(["/home"]);
      },
      err => console.log(err)
    );
  }
}
