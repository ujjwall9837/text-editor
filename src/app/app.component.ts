import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list';
  makePDF() {
    let pdf = new jsPDF();
    pdf.text("Your text is saved" , 10 , 10);
    
    pdf.save();
  }
}
