import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoService } from '../../app/services/todo.service';
import { TodoDetailsPage } from '../todo-details/todo-details';

@Component({
    selector: 'todos',
    templateUrl: 'todos.html'
})
export class TodosPage {
    todos:any;

    constructor(public navCtrl: NavController, private todoService:TodoService) {

    }
    //this function stores the retrived objects and stores them in the todos property
    ngOnInit(){
        this.todoService.getTodos().subscribe(todos => {
            this.todos = todos;
        });
    }
    todoSelected(event, workout){
        this.navCtrl.push(TodoDetailsPage, {
            todo : todo
        });  
    }

}