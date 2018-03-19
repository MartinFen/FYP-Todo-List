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
    //this function retrives the todo documents from the db when the app starts
    ngOnInit(){
        this.todoService.getTodos().subscribe(todos => {
            this.todos = todos;
        });
    }
    //each time the todos page is loaded the documents from the database are retrieved
    ionViewWillEnter(){
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