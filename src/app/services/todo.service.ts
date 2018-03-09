import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import  "rxjs/Rx";

@Injectable()
export class TodoService{
    http:any;
    apiKey: String;
    TodosUrl: String;
    //constructor with values that will be used by http requests to the DB
    constructor(http:Http){
        this.http = http;
        this.apiKey = 'VsOmLzX82en7icOW1YvhJ3be96QHLd14';
        this.TodosUrl = 'https://api.mlab.com/api/1/databases/mytododb/collections/Todos';
    }
    //method used for reading todo items from the DB
    //the data from the db is returned in json format
    getTodos(){
        return this.http.get(this.TodosUrl+'?apiKey='+this.apiKey)
        .map(res => res.json());
    }
    //method used for adding individual todo items to the DB
    //the values passed through in the arg are parsed into json and sent in a http request to the db
    addTodo(todo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.TodosUrl + '?apiKey=' + this.apiKey,
            JSON.stringify(todo), { headers: headers })
            .map(res => res.json());
    }
    
    updateTodo(todo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.TodosUrl+"/"+todo._id.$oid+'?apiKey='+this.apiKey,
            JSON.stringify(todo), { headers: headers })
            .map(res => res.json());
    }

    deleteTodo(todoId){
        return this.http.delete(this.TodosUrl + "/?" + todoId+'?apiKey='+this.apiKey).map(res => res.json());
    }
}