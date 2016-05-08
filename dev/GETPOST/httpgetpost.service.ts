import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class HTTPGetPostService {

    constructor(private _http: Http){

    }

    /*
     return this._http.get("https://script.google.com/macros/s/AKfycbzFucS-ofVyvJI8RamqIfS1YW8WvNfDVZjb_3HwdttDpmQPcfaX/exec?id=1MuVFBugwi8iFyNTE0owsUgeNA9V3FkEAEkQqHzBFbo8&sheet=response")
    * This method retrieves the data from Google Spredsheet*/
    getUserData(date){
return this._http.get("https://script.google.com/macros/s/AKfycbyfBnFvqpjRav282f7HBOd8OLVTsVqD7_wwQQUuWJhU5J31MLrH/exec?sheet=Sheet1&date="+date)
        // return this._http.get("https://script.google.com/macros/s/AKfycbyfBnFvqpjRav282f7HBOd8OLVTsVqD7_wwQQUuWJhU5J31MLrH/exec?id=1aaHVsv7wg1J8Sn6OCLVbezMVn81BctsxEHBhLNrC7G8&sheet=response&date="+date)
            .map(res=>res.json());
    };

    /*This method updates the data in Google Spreadsheet*/
    postJSON(params){

       // var params = "fullName=Omkar&service=Hello+Madhura&emailId=om@gmail.com&date=05052016&time=1000am";
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post("https://script.google.com/macros/s/AKfycbxdfh7B7E_rB208dYFm7JgZ_BiHuPrb2NYfn7d5NJW2o-cAcFUp/exec",params,
            {
                headers: headers
            })
            .map(res=>res.json());
    };
}