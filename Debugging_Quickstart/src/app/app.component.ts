import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Debugging Quickstart';
    a = 4;
    b = 6;
    c: number;
    public text = "My text";
    addArguments = function () {
        return this.a + this.b;
    }

    setCValue = function (inone,intwo) {
        this.c = this.a + this.b ;
        return inone + intwo;
       // return this.c;
    }
    decrementC = function () {
        this.setCValue();
        this.c -= 10;
        return this.c;
    }
    changeText = function () {
        this.text = "New text";
        return this.text;
    }

}
