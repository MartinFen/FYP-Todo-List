import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
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
    //constuctor which has a refetence to the todo object that that has the values of the selected to set to it from the todo document selected in the Todos page
    constructor(public navCtrl: NavController, public params:NavParams, private todoService:TodoService) {
        this.todo = params.get('todo');
    }
    //this function is called when the user clicks delete on the details page
    //the selected todo id is passed into the deleteTodo() function which is used to send a delete request to the database
    //the pages on the stack are then popped off it and the view is changed back to the Todos page
    deleteTodo(todoId){
        this.todoService.deleteTodo(todoId).subscribe(data => { 
            this.result = data;
            this.navCtrl.popTo(TodosPage);
        });
    }
    //this function is called when the user clicks update on the details page
    //the selected todo values are passed to the Update todo page
    //the update page is pushed onto the nav stack ontop of the previous views
    updateTodo(event,todo) {
        this.navCtrl.push(UpdateTodoPage, {
            todo: this.todo
        });
    }
    
}
