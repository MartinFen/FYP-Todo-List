import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import  "rxjs/Rx";

@Injectable()
export class TodoService {
    http:any;
    apiKey: String;
    TodosUrl: String;
    //constructor containing params that will be used by http requests to allow access the the mLab database
    constructor(http:Http){
        this.http = http;
        this.apiKey = 'VsOmLzX82en7icOW1YvhJ3be96QHLd14';
        this.TodosUrl = 'https://api.mlab.com/api/1/databases/mytododb/collections/Todos';
    }
    //method used for retriving todo list documents from the database
    //the data from the database is returned in json format
    //the method uses a get request
    getTodos(){
        return this.http.get(this.TodosUrl+'?apiKey='+this.apiKey)
        .map(res => res.json());
    }
    //method used for adding an individual todo document to the database
    //the values passed through are parsed into json and sent in a http request to the datatbase
    //the method uses a post request
    addTodo(todo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.TodosUrl + '?apiKey=' + this.apiKey,
            JSON.stringify(todo), { headers: headers })
            .map(res => res.json());
    }
    //method is used to send the updated data from a selected todo document to the database
    //the document id is passed in the http request header so the database knows which document to update
    //the method uses a put request
    updateTodo(todo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.TodosUrl+"/"+todo._id.$oid+'?apiKey='+this.apiKey,
            JSON.stringify(todo), { headers: headers })
            .map(res => res.json());
    }
    //method is used to delete a selected todo by passing in the todo documents id and sending that id to the database
    //the method uses a delete request
    deleteTodo(todoId){
        return this.http.delete(this.TodosUrl+"/"+todoId+'?apiKey='+this.apiKey).map(res => res.json());
    }
}