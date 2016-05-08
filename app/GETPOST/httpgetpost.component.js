System.register(['angular2/core', "./httpgetpost.service", "./scheduledetail.component"], function(exports_1, context_1) {
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
    var core_1, httpgetpost_service_1, scheduledetail_component_1;
    var HTTPGetPost;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpgetpost_service_1_1) {
                httpgetpost_service_1 = httpgetpost_service_1_1;
            },
            function (scheduledetail_component_1_1) {
                scheduledetail_component_1 = scheduledetail_component_1_1;
            }],
        execute: function() {
            HTTPGetPost = (function () {
                function HTTPGetPost(_httpService) {
                    this._httpService = _httpService;
                    this.selectedSchedule = null;
                    this.params = "fullName=Omkar&service=Hello+Madhura&emailId=om@gmail.com&date=05052016&time=1000am";
                }
                HTTPGetPost.prototype.onSelect = function (scheduleData) {
                    this.selectedSchedule = scheduleData;
                };
                HTTPGetPost.prototype.onTestGet = function (date) {
                    var _this = this;
                    this.date = date;
                    console.log("Date is :" + date);
                    // Passing date to GET request to retrieve timeslots for this date
                    this._httpService.getUserData(this.date)
                        .subscribe(function (data) {
                        _this.schedulearray = data.Sheet1;
                        console.log("Returned array: " + _this.schedulearray);
                    }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HTTPGetPost.prototype.onTestPost = function () {
                    var _this = this;
                    this._httpService.postJSON(this.params)
                        .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HTTPGetPost = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "<h3> Hello to GET POST Example</h3>\n                <button (click)=\"onTestGet('2016-05-07')\">Test User Data</button>\n   \n                \n                <ul> \n\t\t\t\t\t<li *ngFor=\"#scheduleData of schedulearray\" (click)=\"onSelect(scheduleData)\" \t\n\t\t\t\t\t[class.is-awesome] = \"selectedSchedule=== scheduleData\"\n\t\t\t\t    > Date: {{scheduleData.DATE}}, Time:  {{scheduleData.TIME}}\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t\n                    <!--This is how you pass the parameter from parent component to child Component -->\n\t\t\t\t\t<schedule-detail *ngIf=\"selectedSchedule !==null\"[scheduledDate] = \"selectedSchedule.TIME\"></schedule-detail>\n\t\t\t\t\t\n\t\t\t\t\t\n                <button (click)=\"onTestPost()\"> Test POST Request</button>\n                <p>Output: {{postData}}</p>\n              \n                ",
                        directives: [scheduledetail_component_1.ScheduleDetail],
                        providers: [httpgetpost_service_1.HTTPGetPostService],
                        styleUrls: ['src/css/contact-list.css']
                    }), 
                    __metadata('design:paramtypes', [httpgetpost_service_1.HTTPGetPostService])
                ], HTTPGetPost);
                return HTTPGetPost;
            }());
            exports_1("HTTPGetPost", HTTPGetPost);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdFVFBPU1QvaHR0cGdldHBvc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NBO2dCQVFJLHFCQUFvQixZQUFnQztvQkFBaEMsaUJBQVksR0FBWixZQUFZLENBQW9CO29CQUg3QyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLFdBQU0sR0FBRSxxRkFBcUYsQ0FBQztnQkFHckcsQ0FBQztnQkFFRCw4QkFBUSxHQUFSLFVBQVMsWUFBWTtvQkFHakIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFlBQVksQ0FBQztnQkFDekMsQ0FBQztnQkFFRCwrQkFBUyxHQUFULFVBQVUsSUFBSTtvQkFBZCxpQkFlQztvQkFkRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLENBQUM7b0JBQy9CLGtFQUFrRTtvQkFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt5QkFDbkMsU0FBUyxDQUNOLFVBQUEsSUFBSTt3QkFBSyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO29CQUFDLENBQUMsRUFDekQsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxFQUNyQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFHVixDQUFDO2dCQUdELGdDQUFVLEdBQVY7b0JBQUEsaUJBT0M7b0JBTkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt5QkFDbEMsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFwQyxDQUFvQyxFQUM1QyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBWixDQUFZLEVBQ3JCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNWLENBQUM7Z0JBckVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSxvMkJBbUJHO3dCQUNiLFVBQVUsRUFBRSxDQUFDLHlDQUFjLENBQUM7d0JBQzVCLFNBQVMsRUFBQyxDQUFDLHdDQUFrQixDQUFDO3dCQUM5QixTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztxQkFDMUMsQ0FBQzs7K0JBQUE7Z0JBOENGLGtCQUFDO1lBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtZQTVDRCxxQ0E0Q0MsQ0FBQSIsImZpbGUiOiJHRVRQT1NUL2h0dHBnZXRwb3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SFRUUEdldFBvc3RTZXJ2aWNlfSBmcm9tIFwiLi9odHRwZ2V0cG9zdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1NjaGVkdWxlRGF0YX0gZnJvbSBcIi4vc2NoZWR1bGVkYXRhXCI7XG5pbXBvcnQge1NjaGVkdWxlRGV0YWlsfSBmcm9tIFwiLi9zY2hlZHVsZWRldGFpbC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdodHRwLXRlc3QnLFxuICAgIHRlbXBsYXRlOiBgPGgzPiBIZWxsbyB0byBHRVQgUE9TVCBFeGFtcGxlPC9oMz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblRlc3RHZXQoJzIwMTYtMDUtMDcnKVwiPlRlc3QgVXNlciBEYXRhPC9idXR0b24+XG4gICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8dWw+IFxuXHRcdFx0XHRcdDxsaSAqbmdGb3I9XCIjc2NoZWR1bGVEYXRhIG9mIHNjaGVkdWxlYXJyYXlcIiAoY2xpY2spPVwib25TZWxlY3Qoc2NoZWR1bGVEYXRhKVwiIFx0XG5cdFx0XHRcdFx0W2NsYXNzLmlzLWF3ZXNvbWVdID0gXCJzZWxlY3RlZFNjaGVkdWxlPT09IHNjaGVkdWxlRGF0YVwiXG5cdFx0XHRcdCAgICA+IERhdGU6IHt7c2NoZWR1bGVEYXRhLkRBVEV9fSwgVGltZTogIHt7c2NoZWR1bGVEYXRhLlRJTUV9fVxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFxuXHRcdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgPCEtLVRoaXMgaXMgaG93IHlvdSBwYXNzIHRoZSBwYXJhbWV0ZXIgZnJvbSBwYXJlbnQgY29tcG9uZW50IHRvIGNoaWxkIENvbXBvbmVudCAtLT5cblx0XHRcdFx0XHQ8c2NoZWR1bGUtZGV0YWlsICpuZ0lmPVwic2VsZWN0ZWRTY2hlZHVsZSAhPT1udWxsXCJbc2NoZWR1bGVkRGF0ZV0gPSBcInNlbGVjdGVkU2NoZWR1bGUuVElNRVwiPjwvc2NoZWR1bGUtZGV0YWlsPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uVGVzdFBvc3QoKVwiPiBUZXN0IFBPU1QgUmVxdWVzdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwPk91dHB1dDoge3twb3N0RGF0YX19PC9wPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtTY2hlZHVsZURldGFpbF0sXG4gICAgcHJvdmlkZXJzOltIVFRQR2V0UG9zdFNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL2NvbnRhY3QtbGlzdC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEhUVFBHZXRQb3N0IHtcblxuICAgIGRhdGU6IHN0cmluZztcbiAgICBwb3N0RGF0YTogc3RyaW5nO1xuICAgIHB1YmxpYyBzY2hlZHVsZWFycmF5IDogU2NoZWR1bGVEYXRhW107XG4gICAgcHVibGljIHNlbGVjdGVkU2NoZWR1bGUgPSBudWxsO1xuICAgIHB1YmxpYyBwYXJhbXMgPVwiZnVsbE5hbWU9T21rYXImc2VydmljZT1IZWxsbytNYWRodXJhJmVtYWlsSWQ9b21AZ21haWwuY29tJmRhdGU9MDUwNTIwMTYmdGltZT0xMDAwYW1cIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIVFRQR2V0UG9zdFNlcnZpY2Upe1xuICAgIH1cblxuICAgIG9uU2VsZWN0KHNjaGVkdWxlRGF0YSl7XG5cblxuICAgICAgICB0aGlzLnNlbGVjdGVkU2NoZWR1bGUgPSBzY2hlZHVsZURhdGE7XG4gICAgfVxuXG4gICAgb25UZXN0R2V0KGRhdGUpe1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0ZSBpcyA6XCIrIGRhdGUpO1xuICAgICAgICAvLyBQYXNzaW5nIGRhdGUgdG8gR0VUIHJlcXVlc3QgdG8gcmV0cmlldmUgdGltZXNsb3RzIGZvciB0aGlzIGRhdGVcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0VXNlckRhdGEodGhpcy5kYXRlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHt0aGlzLnNjaGVkdWxlYXJyYXkgPSBkYXRhLlNoZWV0MTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJldHVybmVkIGFycmF5OiBcIisgdGhpcy5zY2hlZHVsZWFycmF5KSB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkZpbmlzaGVkXCIpXG4gICAgICAgICAgICApO1xuICAgICAgIFxuXG4gICAgfVxuXG5cbiAgICBvblRlc3RQb3N0KCl7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3RKU09OKHRoaXMucGFyYW1zKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMucG9zdERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJGaW5pc2hlZFwiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
