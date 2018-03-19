import { TodosPage } from './../todos/todos';
import { TodoService } from './../../app/services/todo.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'add-Todo',
    templateUrl: 'add.html'
})
export class AddPage {
    public title: String;
    public priority: String;
    public description: String;
    public result: String;

    constructor(public navCtrl: NavController, private todoService: TodoService) {
    }

    //this function is called when the user clicks the add button in the add page
    onSubmit(){
        var todo = {
            title: this.title,
            priority: this.priority,
            description: this.description
        }
        this.todoService.addTodo(todo).subscribe(data => {
            this.result = data;
            
        });
        this.navCtrl.push(TodosPage);
    }
}
