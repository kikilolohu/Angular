import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
    loginFailed: boolean;
    loginErrorMessage: string;
    MainScreen: number;
    constructor(private router: Router) { }       //Router instantiation


    ngOnInit(): void {
        this.loginFailed = false;
        this.MainScreen = 0;
    }    

    LoginAttempt = function () {
        if (this.MainScreen == 0)
            this.LoginError();
        else if (this.MainScreen == 1)
            this.router.navigate(['/man-vision']);
        else
            this.router.navigate(['/emp-vision']);
    }
    LoginError = function () {
        this.loginFailed = true;
        this.loginErrorMessage = "Invalid username/password";
    }   
    managerlogin = function () {
        this.MainScreen = 1;
        this.loginFailed = false;
    }
    employeelogin = function () {
        this.MainScreen = 2;
        this.loginFailed = false;
    }

}