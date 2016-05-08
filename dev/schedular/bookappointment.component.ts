import {Component} from 'angular2/core';
import {HTTPGetPostService} from "../GETPOST/httpgetpost.service";

@Component({
    selector: 'book-appointment',
    template: `
	<div *ngIf="isSuccess === false">
	    <div>
	        <h2> Booking Form: </h2>
	        Booking Time: {{model.time}}
	        Booking Date: {{model.date}}
	        
	       <div>
			<label for="first-name"> First Name: </label>
			<input type= "text" id="first-name" #firstName>
		</div>
		<div>
			<label for="last-name"> Last Name: </label>
			<input type= "text" id="last-name" #lastName>
		</div>
		<div>
			<label for="phone"> Phone Number: </label>
			<input type= "text" id="phone" #phone>
		</div>
		<div>
			<label for="email"> E-Mail: </label>
			<input type= "text" id="email" #email>
		</div>
		<button (click)="onBookAppointment(firstName.value, lastName.value, phone.value, email.value, model.date,model.time)" > Book Appointment</button>
		
	    </div>
	</div>
	
	
	<div *ngIf="isSuccess === true">
	        <h2> Thanks for booking!</h2>    
    </div>
	`,
    inputs: ["model"],

    styles: [`
		label{
			display: inline-block;
			width: 140px;
		}
		input{
			width: 250px;
		}
	`]



})

export class BookAppointment{

    public model = {};
    public newSelectedDate ={};
    public contact = {};
    public isSuccess= false;

    constructor(private _httpService: HTTPGetPostService){
    }

        // "fullName=Omkar&service=Hello+Madhura&emailId=om@gmail.com&date=05052016&time=1000am";
    onBookAppointment(firstName, lastName, phone, email, date, time){

        var postData = 'fullName='+firstName+""+lastName+"&service=HairCutting&emailId="+email+"&date="+date+"&time="+time;
        console.log('postData :' + postData);


        this._httpService.postJSON(postData)
            .subscribe(
                data => postData = JSON.stringify(data),
                error => alert(error),
                () => {
                        this.isSuccess = true;
                        console.log("Finished- POST Data")}
            );
    }
}