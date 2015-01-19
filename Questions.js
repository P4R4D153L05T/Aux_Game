//var Q1= Questions_DB.document.getElementsByTagName('td').innerHTML;//grab info from Questions_DB
var count=0;
var correct_answers=0;
var Answer_arr = ['C','B','C','C','B','C','A','A','B','A','C','B','A','C','C','B','A','A','C'];

function begin_Quiz(){
	correct_answers=0;
	count=0;
	next_Ques();
}

function next_Ques(){
				var scope=count;
				document.getElementById('Question').innerHTML = (scope+1) + ' ' + build_Questions(scope);
				document.getElementById('Answer_A').innerHTML = build_Answers(scope,0);
				document.getElementById('Answer_B').innerHTML = build_Answers(scope,1);
				document.getElementById('Answer_C').innerHTML = build_Answers(scope,2);
				if(count == Answer_arr.length){
					document.getElementById('Question').innerHTML = "Exam Complete";
					document.getElementById('Answer_A').innerHTML = "";
					var score = Math.round(((correct_answers/Answer_arr.length)*100));
					document.getElementById('Answer_B').innerHTML = "Your Score was: " + score + "%";
					document.getElementById('Answer_C').innerHTML = "";
				}/**/
				return count++;
			}

function build_Questions(Question_Number){

	var Qs = [
			"Need to go get a drink",
			"Tickets are done and you are all caught up",
			"You are trying to figure out how to solve the issue from the call you just got off of",
			"Need to use the restroom after taking a call",
			"You are awaiting calls",
			"New Release Training",
			"A colleague has received a call for you and you are currently free to take it",
			"Time to go home for the day",
			'Have to write an answer to a client in a ticket in "needs reply"',
			"One on One with your Supervisor/Manager",
			"You are having trouble with an issue in a ticket and you need to find someone to assist you",
			"Need to call a client about a ticket you are working on",
			"Your scheduled time to eat",
			"Weekly Team Meeting",
			"A colleague has a question and needs some help on a ticket",
			"A CRD has a client on the phone they would like to send over to you",
			"Need to submit an IT ticket about computer issues",
			"Need to catch up with the tickets you accumulated throughout the day",
			"You are attending a SME Summit",
			"Need to write a knowledge base article"
	];

	return Qs[Question_Number];
}

function build_Answers(Question_number,Answer_Option){

	var Answers = [
		["Tickets or Projects","Offline Work","Break"],
		["After Call Work","Ready","Lunch"],
		["Tickets or Projects","Offline Work","After Call Work"],
		["Tickets or Projects","After Call Work","Break"],
		["Lunch","Ready","Offline Work"],
		["Meeting","Training","Lunch"],
		["Inbound or Transferred","Offline Work","After Call Work"],
		["Logoff","Offline Work","Ready"],
		["Offline Work","Tickets or Projects","After Call Work"],
		["Meeting","Training","Tickets or Projects"],
		["Offline Work","After Call Work","Tickets or Projects"],
		["Offline Work","Outbound","After Call Work"],
		["Lunch","Break","Tickets or Projects"],
		["Tickets or Projects","Training","Meeting"],
		["Tickets or Projects","Training","Offline Work"],
		["Offline Work","Inbound or Transferred","Tickets or Projects"],
		["Offline Work","Tickets or Projects","After Call Work"],
		["Tickets or Projects","Offline Work","After Call Work"],
		["Tickets or Projects","Offline Work","Training"],
		["Offline Work","After Call Work","Tickets or Projects"]
	];

	return Answers[Question_number][Answer_Option];
}

function save_Answer(){
	if (document.getElementById('Answer_A').style.backgroundColor == "red" && Answer_arr[count] == 'A') {
		correct_answers++;
	}
	if(	document.getElementById('Answer_B').style.backgroundColor == "red" && Answer_arr[count]=='B'){
		correct_answers++;
	}
	if(	document.getElementById('Answer_C').style.backgroundColor == "red" && Answer_arr[count]=='C'){
		correct_answers++;
	}
}

/*var x= "xyz";

var count = 1;
document.getElementById('button').onclick = function() {
   alert("button was clicked " + (count++) + " times");
};*/

/*
use input_file.html 
route output to Questions.js
Modify Questions_DB/Answers_DB.
On Click to start Quiz, pull from DB's and Build Quiz.
*/