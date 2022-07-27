import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // public Editor = ClassicEditor;
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'Bold Button',
        desc: 'You can convert your text to bold',
        active: true,
      },
      {
        sno: 2,
        title: 'Italic button',
        desc: 'You can convert your text to italic',
        active: true,
      },
      {
        sno: 3,
        title: 'Add image',
        desc: 'You can also add image in it',
        active: true,
      },
    ];
  }
  chilispicy() {
    Boolean: true;
  }
  ngOnInit(): void {}
  url = './assets/company-img.jpg';
onSelectFile(){
  
}
}
