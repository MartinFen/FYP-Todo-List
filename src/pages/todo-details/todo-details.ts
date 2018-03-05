import { TodoService } from './../../app/services/todo.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'todo-details',
    templateUrl: 'todo-details.html'
})
export class TodoDetailsPage {
    public todo:any;
    public result:any;
    constructor(public navCtrl: NavController, public params:NavParams, TodoService:TodoService) {
        this.todo = params.get('todo');//changed the get from todos to todo and it fixed the issue for data being displayed
        console.log("debuging here");
    }

}
