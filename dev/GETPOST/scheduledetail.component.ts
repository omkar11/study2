import {Component} from 'angular2/core';

@Component({
    selector: 'schedule-detail',
    template: `	
	            <div>
                Available Time Slot: {{scheduledDate}}  <br>

				</div>
	`,
    inputs: ["scheduledDate"],

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

export class ScheduleDetail{

    public scheduledDate = {};

}