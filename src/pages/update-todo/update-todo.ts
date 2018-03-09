import { TodoService } from './../../app/services/todo.service';

import { TodosPage } from './../todos/todos';
import { TodoDetailsPage } from './../todo-details/todo-details';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'update-todo',
    templateUrl: 'update-todo.html'
})
export class UpdateTodoPage {

    public todo: any;
    public priority: String;
    public description: String;
    public result: String;
 
    constructor(public navCtrl: NavController, public params: NavParams, private todoService:TodoService) {
            this.todo = params.get('todo');
            //console.log("debuging here");
    }

    //this function is called when the user clicks the add button in the add page
    onSubmit() {
        var todo = {
            priority: this.priority,
            description: this.description
        }

        this.todoService.updateTodo(todo).subscribe(data => {
            this.result = data;
        });

        this.navCtrl.push(TodosPage);
    }
}
