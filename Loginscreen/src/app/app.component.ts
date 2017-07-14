import { Component, ViewEncapsulation,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
    /*tiles = [{ text: 'image here', cols: 1, rows:1 },
             { text: 'forms here', cols: 2, rows:1},
            ];
    tiles = [
        {  cols: 1, rows: 1, color: 'lightblue' },
        { text: 'Forms here', cols: 1, rows: 1, color: 'lightgreen' },

    ];*/
    
}
