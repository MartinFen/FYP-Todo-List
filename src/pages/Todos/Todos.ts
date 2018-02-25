import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoService } from '../../app/services/todo.service';

@Component({
    selector: 'Todos',
    templateUrl: 'Todos.html'
})
export class TodosPage {
    todos:any;

    constructor(public navCtrl: NavController, private todoService:TodoService) {

    }

    ngOnInit(){
        this.todoService.getTodos().subscribe(todos => {console.log(todos)});
    }

}