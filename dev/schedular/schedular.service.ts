import {Injectable} from "angular2/core";
import {Daytimes} from "./daytimes"
import {DAYSCHEDULE} from "./mock-schedule"


@Injectable()
export class SchedularService{
	
	// https://docs.google.com/spreadsheets/d/1MuVFBugwi8iFyNTE0owsUgeNA9V3FkEAEkQqHzBFbo8/gviz/tq?tqx=out:json&tq=Select*
	getDaySchedule(){
	return Promise.resolve(DAYSCHEDULE);
	}

	insertDaySchedule(times: Daytimes){
		Promise.resolve(DAYSCHEDULE).then((time : Daytimes[] ) => time.push(times));
	}

}