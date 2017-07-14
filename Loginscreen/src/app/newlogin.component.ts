import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'newlogin',
    templateUrl: 'newlogin.component.html',
})


export class NewLoginComponent implements OnInit {
    loginFailed: boolean;
    loginErrorMessage: string;
    MainScreen: number;
    ngOnInit(): void {
        this.loginFailed = false;
        this.MainScreen = 0;
    }
    LoginAttempt = function () {
        this.MainScreen = 1;
        this.router.navigate('/emp.vision');
    }
    LoginError = function () {
        this.loginFailed = true;
        this.Mainscreen = 2;
        this.loginErrorMessage = "Invalid username/password";
    }   
}