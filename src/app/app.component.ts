import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   a = './../assets/a.jpg';
   b = './../assets/b.jpg';
  
  items = [
    { title: this.a },
    { title: this.b },
    { title: this.a },
  ]

  addSlide() {
    this.items.push({
      title: this.b
    });
  }
}
