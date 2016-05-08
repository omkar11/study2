import {Component} from 'angular2/core';
import {HTTPGetPostService} from "./httpgetpost.service";
import {ScheduleData} from "./scheduledata";
import {ScheduleDetail} from "./scheduledetail.component";

@Component({
    selector: 'http-test',
    template: `<h3> Hello to GET POST Example</h3>
                <button (click)="onTestGet('2016-05-07')">Test User Data</button>
   
                
                <ul> 
					<li *ngFor="#scheduleData of schedulearray" (click)="onSelect(scheduleData)" 	
					[class.is-awesome] = "selectedSchedule=== scheduleData"
				    > Date: {{scheduleData.DATE}}, Time:  {{scheduleData.TIME}}
					</li>
				</ul>
				
				
                    <!--This is how you pass the parameter from parent component to child Component -->
					<schedule-detail *ngIf="selectedSchedule !==null"[scheduledDate] = "selectedSchedule.TIME"></schedule-detail>
					
					
                <button (click)="onTestPost()"> Test POST Request</button>
                <p>Output: {{postData}}</p>
              
                `,
    directives: [ScheduleDetail],
    providers:[HTTPGetPostService],
    styleUrls: ['src/css/contact-list.css']
})

export class HTTPGetPost {

    date: string;
    postData: string;
    public schedulearray : ScheduleData[];
    public selectedSchedule = null;
    public params ="fullName=Omkar&service=Hello+Madhura&emailId=om@gmail.com&date=05052016&time=1000am";

    constructor(private _httpService: HTTPGetPostService){
    }

    onSelect(scheduleData){


        this.selectedSchedule = scheduleData;
    }

    onTestGet(date){
        this.date = date;

        console.log("Date is :"+ date);
        // Passing date to GET request to retrieve timeslots for this date
        this._httpService.getUserData(this.date)
            .subscribe(
                data => {this.schedulearray = data.Sheet1;

                    console.log("Returned array: "+ this.schedulearray) },
                error => alert(error),
                () => console.log("Finished")
            );
       

    }


    onTestPost(){
        this._httpService.postJSON(this.params)
            .subscribe(
                data => this.postData = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished")
            );
    }

}