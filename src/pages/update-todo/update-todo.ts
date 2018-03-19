import { StatusBar } from '@ionic-native/status-bar';
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
    
    public result: String;
 
    constructor(public navCtrl: NavController, public params: NavParams, private todoService:TodoService) {
            this.todo = params.get('todo');
    }

    onSubmit() {
        //console.log("debuging starts");
        this.todoService.updateTodo(this.todo).subscribe(data => {
            this.result = data;
            
        });
        this.navCtrl.push(TodosPage);
        //console.log("debuging ends");
        
    }
}
