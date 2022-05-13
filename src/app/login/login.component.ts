import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../http-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup;

  constructor(private fb:FormBuilder, 
               private authService: AuthService, 
               private router: Router) {

      this.form = this.fb.group({
          email: ['',Validators.required],
          password: ['',Validators.required]
      });
  }

  login() {
      const val = this.form.value;
    console.log(val);
      if (val.email && val.password) {
          this.authService.login(val.email, val.password)
              .subscribe(
                  data => {
                    alert(JSON.stringify(data));
                      console.log("User is logged in");
                      this.router.navigateByUrl('/');
                  }
              );
      }
  }
}
