
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { TodoService } from '../../app/services/todo.service';
import { TodoDetailsPage } from '../todo-details/todo-details';
import { AddPage } from './../add-Todo/add';

@Component({
    selector: 'todos',
    templateUrl: 'todos.html'
})
export class TodosPage {
    todos:any;

    constructor(public navCtrl: NavController, private todoService: TodoService, private viewCtrl: ViewController) {
    }
    //this function retrives the todo documents from the db when the app starts
    ngOnInit(){
        this.todoService.getTodos().subscribe(todos => {
            this.todos = todos;
        });
    }
    //each time the todos page is about to be loaded this function will run it gets the documents from the database are retrieved
    ionViewWillEnter(){
        this.todoService.getTodos().subscribe(todos => {
            this.todos = todos;
        });
        //this.viewCtrl.showBackButton(false);//anytime the view is entered the user cannot use the back button
    }

    //this function is used to control navigation to the details page of the selected todo and pass the data to that page
    todoSelected(event, todo){
        this.navCtrl.push(TodoDetailsPage, {
            todo : todo
        });  
    }
    //when called the add page will be loaded
    addTodo(){
        this.navCtrl.push(AddPage);  
    }

}