import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TodoService } from './../../app/services/todo.service';
import { TodosPage } from '../todos/todos';
import { UpdateTodoPage } from './../update-todo/update-todo';

@Component({
    selector: 'todo-details',
    templateUrl: 'todo-details.html'
})
export class TodoDetailsPage {
    public todo:any;
    public result:any;
    
    constructor(public navCtrl: NavController, public params:NavParams, private todoService:TodoService) {
        this.todo = params.get('todo');
        //console.log("debuging here");
    }

    deleteTodo(todoId){
        //console.log(todoId);
        this.todoService.deleteTodo(todoId).subscribe(data => { 
            this.result = data;
        });
        this.navCtrl.push(TodosPage);
    }

    updateTodo(event,todo) {
        this.navCtrl.push(UpdateTodoPage, {
            todo: this.todo
        });
    }
    
}
