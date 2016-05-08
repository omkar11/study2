import {Component} from 'angular2/core';
import {BootFlatDatePicker} from './bootflat-datepicker';
import {SchedularService} from './schedular.service';
import {Daytimes} from "./daytimes"
import {HTTPGetPost} from "../GETPOST/httpgetpost.component";
import {HTTPGetPostService} from "../GETPOST/httpgetpost.service";
import {ScheduleData} from "../GETPOST/scheduledata";
import {BookAppointment} from "./bookappointment.component";



@Component({
    selector: 'app',
    template: `


    	<table>
    	<tr>
    	<td>
    	<div class="row">
		<div class="col-md-12">
			<bootflat-date-picker [options]="myDatePickerOptions" (dateChanged)="onDateChanged($event)" [selDate]="selectedDate"></bootflat-date-picker>
		</div>
		</div>
		</td>
		
		
		
                
				
		<td>
		<ul> 
			<li *ngFor="#scheduleData of availableTimeSlots" (click)="onSelect(scheduleData)" 	
				[class.is-awesome] = "selectedSchedule=== scheduleData"
			    > Choose Time: {{scheduleData}}
			</li>
		</ul>
		</td>
		
		<td>
		        
		        <!--This is how you pass the parameter from parent component to child Component -->
				<book-appointment *ngIf="selectedTimeSlot !==null"[model] = "parentModel"></book-appointment>
					
        </td>
		</tr>
		</table>
    `,
	directives: [BootFlatDatePicker, BookAppointment],
	styleUrls: ['src/css/contact-list.css'],
	providers: [SchedularService, HTTPGetPostService],
})

export class Schedular {



	public dayschedulearray: Daytimes [];

	constructor (private _schedularService: SchedularService, private _httpService: HTTPGetPostService){

	}

    public selectedTimeSlot =null;
    public parentModel;

	onSelect(scheduleData){
		console.log(scheduleData);
        this.selectedTimeSlot = scheduleData;

        this.parentModel = { date: this.newSelectedDate, time: scheduleData }
        console.log(this.parentModel);
	}


	// Date Picker //
    private myDatePickerOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '134px',
        width: '300px',

        background: "blue",
        showTextBox: false,
    };

    public isDateSelected=null;
    selectedDate: string = '';
    private newSelectedDate = null;
    public schedulearray : ScheduleData[];
    private availableTimeSlots= [];




    onDateChanged(event) {
        console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        this.newSelectedDate = event.formatted;
        this.isDateSelected= true;

        this._schedularService.getDaySchedule().then((daytime: Daytimes[]) => this.dayschedulearray = daytime);


        console.log(this.newSelectedDate);


        this._httpService.getUserData(this.newSelectedDate)
            .subscribe(
                // Add response with curly braces to have return response ready immediately
                data => {this.schedulearray = data.Sheet1;
                        this.updateFlagsBasedonJson(this.schedulearray);
                        },
                error => alert(error),
                () => console.log("Finished")
            );

    }




    // This function retrieves the available time slot array
    updateFlagsBasedonJson(timearray){
        // Change here if you need to add other time slots
        var predeterminedTimeSlots = [800,900,1000,1100,1200,1300,1400,1500,1600];
        console.log('Array received from server is: '+ JSON.stringify(timearray));

        if(timearray != "" ){
            var bookedTimeSlots = []; //= [1300,1400,1500,1600];
            var bookedTimeArrayIndex = 0;
                   for(var i=0;i<timearray.length;i++){
                var obj = timearray[i];

                if(predeterminedTimeSlots.indexOf(obj["time"]) > -1)
                {
                    bookedTimeSlots[bookedTimeArrayIndex] = obj["time"];
                    bookedTimeArrayIndex = bookedTimeArrayIndex+1;
                }
            }
           //Filter out the booked time slots from pre-configured time slots
            this.availableTimeSlots = predeterminedTimeSlots.filter(function(i) {return bookedTimeSlots.indexOf(i) < 0;})
        }
        else
        {
            this.availableTimeSlots = predeterminedTimeSlots;
        }
        console.log("Available time slot array is: "+ this.availableTimeSlots);

    }
}