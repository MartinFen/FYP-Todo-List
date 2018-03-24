# Final Year Project - CRUD Todo List
###### Martin Fennell, G00291266
## Introduction
This repo is for my project for the 3rd year module Professional Practice in IT or otherwise commonly known as the final year project, which I have been using the Ionic framework[Ionic]() to design a Todo list that uses MLab to store the data to show my understanding of how data is passed around on the internet. The project will show my learning outcome and include technologies such as [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP), [Client/Server](https://en.wikipedia.org/wiki/Client%E2%80%93server_model) and [AJAX](https://developer.mozilla.org/en-US/docs/AJAX). The project requirements can be found [here](https://data-representation.github.io/problems/project.html).
#### Aims
The aims of the project are for me to learn and show my understanding of how to write and adhere to the standards and protocols of a  by using different data models and architectures used in modern web applications.
#### What is a chatbot
A [chatbot](https://en.wikipedia.org/wiki/Chatbot) is usualy a computer program which converses with a user either via audio or text. They are often designed to convincingly simulate how a human behaves in a conversation. Chatbots are typically used in dialog systems for various practical purposes including customer service or information acquisition. Some chatbots use sophisticated natural language processing systems, but many simpler systems scan for keywords within the input, then pull a reply with the most matching keywords, or the most similar wording pattern, from a database.
#### How to use the application
- Download Go from [here](https://golang.org/) and follow install instructions.
- Download a zip of repo or use `git clone`.
- Open `terminal`/`powershell` and `cd` to directory where the repo is downloaded.
- Type `go run main.go` in the command line.
- Open a web browser such as `chrome` and type `localhost:8080` in URL bar and enter.
- In the text box located at the footer type in a statement such as `hello`.
- To continue dialouge with eliza use some of the examples provided in the table beneath these instructions.
- When you want to stop the program from running type `bye` to stop the program.
- To start a new dialogue refresh the page.

| User Input Examples | Responses Examples |
| :------ | :------ |
| Hello | Hi, could I start by getting your name? |
| My name is Martin | It's nice to meet you martin. How can I help? |
| I am not feeling myself | Did you come to me because you are not feeling yourself? |
| I'm sick | Why do you think you're sick? |
| Why can't I get better | Why don't you tell me the reason why can't you get better? |
| Because I'm not able to get better | Why do you think you're not able to get better? |
| Can you help | Why do you ask if I can help? |
| I would feel like I'm better but then I panic | Why do you think you're better but then you panic? |
| I feel like i can't be happy | How do you know you can't be happy? |
| I need something to help me through the day | Are you sure you need something to help you through the day? |
| My father was crule to me as a child | How do you feel about your father? |
| My mother has always favoured my other siblings | Tell me more about your mother. |
| I was bullied as a child | How do you think your childhood experiences relate to your feelings today? |
| Sorry for being an emotional wreck | There are many times when no apology is needed. |
|  | Am I getting the silent treatment? |
| Bye | Thank you, that will be $300. Have a good day! |

For further knowledge of the regex usecd in the project please see [patterns file](https://github.com/MartinFen/Data-Rep-and-Querying-Project-ChatBot/blob/master/data/patterns.dat)

#### To view more info using curl (optional)
- Download and install `curl` from [here](https://curl.haxx.se/) and follow instruction on how to use it [here](https://curl.haxx.se/docs/manpage.html)
- Open `terminal` and `cd` to repo then type `curl -v localhost:8080`
- Use other curl commands to investigate more.

## Technologies
Below are a list of technologies that I have used for this project.
#### Go
Go is an open source programming language developed by in 2009 by Robert Griesemer, Rob Pike, Ken Thompson and many contributors from the open source community. It is a statically typed language and very similar to C except it has garbage collection and concurrent programming features added among other features. Below is an example of Golang code used in this project.
```Golang
func getRandomAnswer(answers []string) string {
	rand.Seed(time.Now().UnixNano())
	index := rand.Intn(len(answers))
	return answers[index]
}
```
#### SPA
A single-page application ([SPA](https://en.wikipedia.org/wiki/Single-page_application)) is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This approach avoids interruption of the user experience between successive pages, making the application behave more like a desktop application. In a SPA, either all necessary code such as HTML, JavaScript, and CSS is retrieved with a single page load or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. This means that the page doesnt have to be reloaded as the user interacts with it. Below is an example of how the SPA is served using Go and how the HTML page is dynamicly updated. 
```Golang
func main() {
	fs := http.FileServer(http.Dir("web"))
	http.Handle("/", fs)
	http.HandleFunc("/user-input", userinputhandler)
	http.ListenAndServe(":8080", nil)
}
```
The HTML unorderlist is empty at application start and has items added to is as the user converses with eliza.
```html
<ul class="list-group bg-light" id="output-area"></ul>
```
The List above this line is updated by The Jquery used below.
```javascript
$('#output-area').append('<li class="list-group-item">' + 'User: ' + $('#user-input').val() + '</li>');

$.get('/user-input', {value:$('#user-input').val()}).done(function(data) { 
    setTimeout(function(){
        $('#output-area').append('<li class="list-group-item">'+ 'Eliza: ' + data + '</li>');
    }, 500);
})
```
#### Client / Server
The client–server model is a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients. Often clients and servers communicate over a computer network on separate hardware, A server host runs one or more server programs which share their resources with clients. A client does not share any of its resources, but requests a server's content or service function. Clients therefore initiate communication sessions with servers which await incoming requests.

![client/server](https://upload.wikimedia.org/wikipedia/commons/c/c9/Client-server-model.svg)
#### AJAX
AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the DOM to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX’s most appealing characteristic is its `asynchronous` nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page. The two major features of AJAX allow you to do the following:
- Make requests to the server without reloading the page
- Receive and work with data from the server

Below is an example of how I used jQuery to use AJAX in the project for the conversation with the eliza clone,
```javascript
$("#user-input-form").submit(
    function(event) {
    event.preventDefault();
    if (document.forms[0].elements['user-input'].value=='') {
        $('#output-area').append('<li class="list-group-item">'+'User: '+$('#user-input').val()+'</li>');
        setTimeout(function(){
            $('#output-area').append('<li class="list-group-item">'+'Eliza: Am I getting the silent treatment?'+'</li>');
        }, 500);
    } else {
        $('#output-area').append('<li class="list-group-item">' +'User: '+$('#user-input').val() + '</li>');
            
        $.get('/user-input', {value:$('#user-input').val()}).done(function(data){
            setTimeout(function(){
                $('#output-area').append('<li class="list-group-item">'+'Eliza: '+data+ '</li>');
            }, 500);
        })
    }
    });
```
## Not implimented in project
1. The reason the below code isn't left in the program is because it was pointed out to me that the application should be running all the time.
```golang
func userinputhandler(w http.ResponseWriter, r *http.Request) {
	userInput := strings.ToLower(r.URL.Query().Get("value"))
	if strings.Contains(strings.ToLower(userInput), "bye") {
		fmt.Fprintf(w, "%s", Ask(userInput))
		timer := time.NewTimer(time.Second * 2)
		<-timer.C
		os.Exit(3)
	} else {
		fmt.Fprintf(w, "%s", Ask(userInput)) //Carry out the conversation with eliza
	}
}
```
## References
Below are a list of references which I used to learn and adapt for my assignment work.
##### Chatbot
- [Understanding what a chatbot is](https://en.wikipedia.org/wiki/ELIZA).
- [Further reading](https://dialogflow.com/docs/getting-started/basics)
- [Further reading](https://www.marutitech.com/complete-guide-chatbots/)

##### Regex
- [Module notes for regex](https://data-representation.github.io/notes/regexp-go.html)
- [Site where the regex used in this project has been adapted from](https://www.smallsurething.com/implementing-the-famous-eliza-chatbot-in-python/)
- [The site I used to help understand the expressions I used](https://regexr.com/)

##### Golang
- [Official Docs](https://golang.org/doc/)
- [Module notes](https://data-representation.github.io/#module-specific)
- [Problem sheet that I completed where I adapted some of the code to this project](https://github.com/MartinFen/Go-Problem-Sheet-2-Answers)
- [More docs on examples of how to use the language](https://gobyexample.com/)
- [Example of eliza that helped me undersand how it could be done in Go](https://github.com/data-representation/eliza)

##### Web page
- [I started to build my front end my using the bootstrap starter snipit](https://v4-alpha.getbootstrap.com/getting-started/introduction/)
- [I further adapted my UI by reading the bootstrap docs](https://v4-alpha.getbootstrap.com/components/navbar/)
- [I used stack overflow to further adapt and my UI. more references can bee found in the main.go file](https://stackoverflow.com/questions/30556285/html-css-how-to-get-fixed-margin-between-body-and-footer--)
- [I was able to get a good understanding of Jquery from the offical docs](http://api.jquery.com/)

##### AJAX
- [AJAX lecture information that I found usefull](https://ianmcloughlin.github.io/2017/10/31/ajax.html)
- [More info on AJAX on MDN](https://developer.mozilla.org/en-US/docs/AJAX)
- [Some of the AJAX I used was from here which is further referenced in my code](https://stackoverflow.com/)
- [I adapted some of the AJAX provided in the course module page](https://github.com/data-representation/go-ajax)

##### Documentation
- I used a webapp called [dillenger.io](https://dillinger.io/) to created this documentation.

