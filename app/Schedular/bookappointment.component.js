System.register(['angular2/core', "../GETPOST/httpgetpost.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, httpgetpost_service_1;
    var BookAppointment;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpgetpost_service_1_1) {
                httpgetpost_service_1 = httpgetpost_service_1_1;
            }],
        execute: function() {
            BookAppointment = (function () {
                function BookAppointment(_httpService) {
                    this._httpService = _httpService;
                    this.model = {};
                    this.newSelectedDate = {};
                    this.contact = {};
                    this.isSuccess = false;
                }
                // "fullName=Omkar&service=Hello+Madhura&emailId=om@gmail.com&date=05052016&time=1000am";
                BookAppointment.prototype.onBookAppointment = function (firstName, lastName, phone, email, date, time) {
                    var _this = this;
                    var postData = 'fullName=' + firstName + "" + lastName + "&service=HairCutting&emailId=" + email + "&date=" + date + "&time=" + time;
                    console.log('postData :' + postData);
                    this._httpService.postJSON(postData)
                        .subscribe(function (data) { return postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () {
                        _this.isSuccess = true;
                        console.log("Finished- POST Data");
                    });
                };
                BookAppointment = __decorate([
                    core_1.Component({
                        selector: 'book-appointment',
                        template: "\n\t<div *ngIf=\"isSuccess === false\">\n\t    <div>\n\t        <h2> Booking Form: </h2>\n\t        Booking Time: {{model.time}}\n\t        Booking Date: {{model.date}}\n\t        \n\t       <div>\n\t\t\t<label for=\"first-name\"> First Name: </label>\n\t\t\t<input type= \"text\" id=\"first-name\" #firstName>\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"last-name\"> Last Name: </label>\n\t\t\t<input type= \"text\" id=\"last-name\" #lastName>\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"phone\"> Phone Number: </label>\n\t\t\t<input type= \"text\" id=\"phone\" #phone>\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"email\"> E-Mail: </label>\n\t\t\t<input type= \"text\" id=\"email\" #email>\n\t\t</div>\n\t\t<button (click)=\"onBookAppointment(firstName.value, lastName.value, phone.value, email.value, model.date,model.time)\" > Book Appointment</button>\n\t\t\n\t    </div>\n\t</div>\n\t\n\t\n\t<div *ngIf=\"isSuccess === true\">\n\t        <h2> Thanks for booking!</h2>    \n    </div>\n\t",
                        inputs: ["model"],
                        styles: ["\n\t\tlabel{\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 140px;\n\t\t}\n\t\tinput{\n\t\t\twidth: 250px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [httpgetpost_service_1.HTTPGetPostService])
                ], BookAppointment);
                return BookAppointment;
            }());
            exports_1("BookAppointment", BookAppointment);
        }
    }
});
//# sourceMappingURL=bookappointment.component.js.map