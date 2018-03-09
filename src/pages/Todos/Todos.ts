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
    //this function stores the todo items retrived by the service from the db in property called todos
    ngOnInit(){
        this.todoService.getTodos().subscribe(todos => {
            this.todos = todos;
        });
    }
    //this function is used to control navigation to the details page of the selected todo and pass the data to that page
    todoSelected(event, todo){
        this.navCtrl.push(TodoDetailsPage, {
            todo : todo
        });  
    }

}