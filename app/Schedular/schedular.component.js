System.register(['angular2/core', './bootflat-datepicker', './schedular.service', "../GETPOST/httpgetpost.service", "./bookappointment.component"], function(exports_1, context_1) {
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
    var core_1, bootflat_datepicker_1, schedular_service_1, httpgetpost_service_1, bookappointment_component_1;
    var Schedular;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bootflat_datepicker_1_1) {
                bootflat_datepicker_1 = bootflat_datepicker_1_1;
            },
            function (schedular_service_1_1) {
                schedular_service_1 = schedular_service_1_1;
            },
            function (httpgetpost_service_1_1) {
                httpgetpost_service_1 = httpgetpost_service_1_1;
            },
            function (bookappointment_component_1_1) {
                bookappointment_component_1 = bookappointment_component_1_1;
            }],
        execute: function() {
            Schedular = (function () {
                function Schedular(_schedularService, _httpService) {
                    this._schedularService = _schedularService;
                    this._httpService = _httpService;
                    this.selectedTimeSlot = null;
                    // Date Picker //
                    this.myDatePickerOptions = {
                        todayBtnTxt: 'Today',
                        dateFormat: 'yyyy-mm-dd',
                        firstDayOfWeek: 'mo',
                        sunHighlight: true,
                        height: '134px',
                        width: '300px',
                        background: "blue",
                        showTextBox: false,
                    };
                    this.isDateSelected = null;
                    this.selectedDate = '';
                    this.newSelectedDate = null;
                    this.availableTimeSlots = [];
                }
                Schedular.prototype.onSelect = function (scheduleData) {
                    console.log(scheduleData);
                    this.selectedTimeSlot = scheduleData;
                    this.parentModel = { date: this.newSelectedDate, time: scheduleData };
                    console.log(this.parentModel);
                };
                Schedular.prototype.onDateChanged = function (event) {
                    var _this = this;
                    console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
                    this.newSelectedDate = event.formatted;
                    this.isDateSelected = true;
                    this._schedularService.getDaySchedule().then(function (daytime) { return _this.dayschedulearray = daytime; });
                    console.log(this.newSelectedDate);
                    this._httpService.getUserData(this.newSelectedDate)
                        .subscribe(
                    // Add response with curly braces to have return response ready immediately
                    function (data) {
                        _this.schedulearray = data.Sheet1;
                        _this.updateFlagsBasedonJson(_this.schedulearray);
                    }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                // This function retrieves the available time slot array
                Schedular.prototype.updateFlagsBasedonJson = function (timearray) {
                    // Change here if you need to add other time slots
                    var predeterminedTimeSlots = [800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600];
                    console.log('Array received from server is: ' + JSON.stringify(timearray));
                    if (timearray != "") {
                        var bookedTimeSlots = []; //= [1300,1400,1500,1600];
                        var bookedTimeArrayIndex = 0;
                        for (var i = 0; i < timearray.length; i++) {
                            var obj = timearray[i];
                            if (predeterminedTimeSlots.indexOf(obj["time"]) > -1) {
                                bookedTimeSlots[bookedTimeArrayIndex] = obj["time"];
                                bookedTimeArrayIndex = bookedTimeArrayIndex + 1;
                            }
                        }
                        //Filter out the booked time slots from pre-configured time slots
                        this.availableTimeSlots = predeterminedTimeSlots.filter(function (i) { return bookedTimeSlots.indexOf(i) < 0; });
                    }
                    else {
                        this.availableTimeSlots = predeterminedTimeSlots;
                    }
                    console.log("Available time slot array is: " + this.availableTimeSlots);
                };
                Schedular = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n\n\n    \t<table>\n    \t<tr>\n    \t<td>\n    \t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<bootflat-date-picker [options]=\"myDatePickerOptions\" (dateChanged)=\"onDateChanged($event)\" [selDate]=\"selectedDate\"></bootflat-date-picker>\n\t\t</div>\n\t\t</div>\n\t\t</td>\n\t\t\n\t\t\n\t\t\n                \n\t\t\t\t\n\t\t<td>\n\t\t<ul> \n\t\t\t<li *ngFor=\"#scheduleData of availableTimeSlots\" (click)=\"onSelect(scheduleData)\" \t\n\t\t\t\t[class.is-awesome] = \"selectedSchedule=== scheduleData\"\n\t\t\t    > Choose Time: {{scheduleData}}\n\t\t\t</li>\n\t\t</ul>\n\t\t</td>\n\t\t\n\t\t<td>\n\t\t        \n\t\t        <!--This is how you pass the parameter from parent component to child Component -->\n\t\t\t\t<book-appointment *ngIf=\"selectedTimeSlot !==null\"[model] = \"parentModel\"></book-appointment>\n\t\t\t\t\t\n        </td>\n\t\t</tr>\n\t\t</table>\n    ",
                        directives: [bootflat_datepicker_1.BootFlatDatePicker, bookappointment_component_1.BookAppointment],
                        styleUrls: ['src/css/contact-list.css'],
                        providers: [schedular_service_1.SchedularService, httpgetpost_service_1.HTTPGetPostService],
                    }), 
                    __metadata('design:paramtypes', [schedular_service_1.SchedularService, httpgetpost_service_1.HTTPGetPostService])
                ], Schedular);
                return Schedular;
            }());
            exports_1("Schedular", Schedular);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxhci9zY2hlZHVsYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcURBO2dCQU1DLG1CQUFxQixpQkFBbUMsRUFBVSxZQUFnQztvQkFBN0Usc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7b0JBSXhGLHFCQUFnQixHQUFFLElBQUksQ0FBQztvQkFZakMsaUJBQWlCO29CQUNOLHdCQUFtQixHQUFHO3dCQUMxQixXQUFXLEVBQUUsT0FBTzt3QkFDcEIsVUFBVSxFQUFFLFlBQVk7d0JBQ3hCLGNBQWMsRUFBRSxJQUFJO3dCQUNwQixZQUFZLEVBQUUsSUFBSTt3QkFDbEIsTUFBTSxFQUFFLE9BQU87d0JBQ2YsS0FBSyxFQUFFLE9BQU87d0JBRWQsVUFBVSxFQUFFLE1BQU07d0JBQ2xCLFdBQVcsRUFBRSxLQUFLO3FCQUNyQixDQUFDO29CQUVLLG1CQUFjLEdBQUMsSUFBSSxDQUFDO29CQUMzQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztvQkFDbEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7b0JBRXZCLHVCQUFrQixHQUFFLEVBQUUsQ0FBQztnQkEvQmxDLENBQUM7Z0JBS0QsNEJBQVEsR0FBUixVQUFTLFlBQVk7b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7b0JBRXJDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUE7b0JBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQXlCRSxpQ0FBYSxHQUFiLFVBQWMsS0FBSztvQkFBbkIsaUJBcUJDO29CQXBCRyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25ILElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRSxJQUFJLENBQUM7b0JBRTFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFtQixJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO29CQUd2RyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFHbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQzt5QkFDOUMsU0FBUztvQkFDTiwyRUFBMkU7b0JBQzNFLFVBQUEsSUFBSTt3QkFBSyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBQ2xDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2hELENBQUMsRUFDVCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBWixDQUFZLEVBQ3JCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUVWLENBQUM7Z0JBS0Qsd0RBQXdEO2dCQUN4RCwwQ0FBc0IsR0FBdEIsVUFBdUIsU0FBUztvQkFDNUIsa0RBQWtEO29CQUNsRCxJQUFJLHNCQUFzQixHQUFHLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBRTFFLEVBQUUsQ0FBQSxDQUFDLFNBQVMsSUFBSSxFQUFHLENBQUMsQ0FBQSxDQUFDO3dCQUNqQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsQ0FBQywwQkFBMEI7d0JBQ3BELElBQUksb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO3dCQUN0QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQzs0QkFDdkMsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUV2QixFQUFFLENBQUEsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDcEQsQ0FBQztnQ0FDRyxlQUFlLENBQUMsb0JBQW9CLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQ3BELG9CQUFvQixHQUFHLG9CQUFvQixHQUFDLENBQUMsQ0FBQzs0QkFDbEQsQ0FBQzt3QkFDTCxDQUFDO3dCQUNGLGlFQUFpRTt3QkFDaEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxVQUFTLENBQUMsSUFBRyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQTtvQkFDakgsQ0FBQztvQkFDRCxJQUFJLENBQ0osQ0FBQzt3QkFDRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsc0JBQXNCLENBQUM7b0JBQ3JELENBQUM7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFFM0UsQ0FBQztnQkEzSUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsS0FBSzt3QkFDZixRQUFRLEVBQUUsNDNCQWtDVDt3QkFDSixVQUFVLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSwyQ0FBZSxDQUFDO3dCQUNqRCxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzt3QkFDdkMsU0FBUyxFQUFFLENBQUMsb0NBQWdCLEVBQUUsd0NBQWtCLENBQUM7cUJBQ2pELENBQUM7OzZCQUFBO2dCQW9HRixnQkFBQztZQUFELENBbEdBLEFBa0dDLElBQUE7WUFsR0QsaUNBa0dDLENBQUEiLCJmaWxlIjoic2NoZWR1bGFyL3NjaGVkdWxhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Jvb3RGbGF0RGF0ZVBpY2tlcn0gZnJvbSAnLi9ib290ZmxhdC1kYXRlcGlja2VyJztcbmltcG9ydCB7U2NoZWR1bGFyU2VydmljZX0gZnJvbSAnLi9zY2hlZHVsYXIuc2VydmljZSc7XG5pbXBvcnQge0RheXRpbWVzfSBmcm9tIFwiLi9kYXl0aW1lc1wiXG5pbXBvcnQge0hUVFBHZXRQb3N0fSBmcm9tIFwiLi4vR0VUUE9TVC9odHRwZ2V0cG9zdC5jb21wb25lbnRcIjtcbmltcG9ydCB7SFRUUEdldFBvc3RTZXJ2aWNlfSBmcm9tIFwiLi4vR0VUUE9TVC9odHRwZ2V0cG9zdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1NjaGVkdWxlRGF0YX0gZnJvbSBcIi4uL0dFVFBPU1Qvc2NoZWR1bGVkYXRhXCI7XG5pbXBvcnQge0Jvb2tBcHBvaW50bWVudH0gZnJvbSBcIi4vYm9va2FwcG9pbnRtZW50LmNvbXBvbmVudFwiO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cblxuICAgIFx0PHRhYmxlPlxuICAgIFx0PHRyPlxuICAgIFx0PHRkPlxuICAgIFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cblx0XHRcdDxib290ZmxhdC1kYXRlLXBpY2tlciBbb3B0aW9uc109XCJteURhdGVQaWNrZXJPcHRpb25zXCIgKGRhdGVDaGFuZ2VkKT1cIm9uRGF0ZUNoYW5nZWQoJGV2ZW50KVwiIFtzZWxEYXRlXT1cInNlbGVjdGVkRGF0ZVwiPjwvYm9vdGZsYXQtZGF0ZS1waWNrZXI+XG5cdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PC90ZD5cblx0XHRcblx0XHRcblx0XHRcbiAgICAgICAgICAgICAgICBcblx0XHRcdFx0XG5cdFx0PHRkPlxuXHRcdDx1bD4gXG5cdFx0XHQ8bGkgKm5nRm9yPVwiI3NjaGVkdWxlRGF0YSBvZiBhdmFpbGFibGVUaW1lU2xvdHNcIiAoY2xpY2spPVwib25TZWxlY3Qoc2NoZWR1bGVEYXRhKVwiIFx0XG5cdFx0XHRcdFtjbGFzcy5pcy1hd2Vzb21lXSA9IFwic2VsZWN0ZWRTY2hlZHVsZT09PSBzY2hlZHVsZURhdGFcIlxuXHRcdFx0ICAgID4gQ2hvb3NlIFRpbWU6IHt7c2NoZWR1bGVEYXRhfX1cblx0XHRcdDwvbGk+XG5cdFx0PC91bD5cblx0XHQ8L3RkPlxuXHRcdFxuXHRcdDx0ZD5cblx0XHQgICAgICAgIFxuXHRcdCAgICAgICAgPCEtLVRoaXMgaXMgaG93IHlvdSBwYXNzIHRoZSBwYXJhbWV0ZXIgZnJvbSBwYXJlbnQgY29tcG9uZW50IHRvIGNoaWxkIENvbXBvbmVudCAtLT5cblx0XHRcdFx0PGJvb2stYXBwb2ludG1lbnQgKm5nSWY9XCJzZWxlY3RlZFRpbWVTbG90ICE9PW51bGxcIlttb2RlbF0gPSBcInBhcmVudE1vZGVsXCI+PC9ib29rLWFwcG9pbnRtZW50PlxuXHRcdFx0XHRcdFxuICAgICAgICA8L3RkPlxuXHRcdDwvdHI+XG5cdFx0PC90YWJsZT5cbiAgICBgLFxuXHRkaXJlY3RpdmVzOiBbQm9vdEZsYXREYXRlUGlja2VyLCBCb29rQXBwb2ludG1lbnRdLFxuXHRzdHlsZVVybHM6IFsnc3JjL2Nzcy9jb250YWN0LWxpc3QuY3NzJ10sXG5cdHByb3ZpZGVyczogW1NjaGVkdWxhclNlcnZpY2UsIEhUVFBHZXRQb3N0U2VydmljZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgU2NoZWR1bGFyIHtcblxuXG5cblx0cHVibGljIGRheXNjaGVkdWxlYXJyYXk6IERheXRpbWVzIFtdO1xuXG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIF9zY2hlZHVsYXJTZXJ2aWNlOiBTY2hlZHVsYXJTZXJ2aWNlLCBwcml2YXRlIF9odHRwU2VydmljZTogSFRUUEdldFBvc3RTZXJ2aWNlKXtcblxuXHR9XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRUaW1lU2xvdCA9bnVsbDtcbiAgICBwdWJsaWMgcGFyZW50TW9kZWw7XG5cblx0b25TZWxlY3Qoc2NoZWR1bGVEYXRhKXtcblx0XHRjb25zb2xlLmxvZyhzY2hlZHVsZURhdGEpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGltZVNsb3QgPSBzY2hlZHVsZURhdGE7XG5cbiAgICAgICAgdGhpcy5wYXJlbnRNb2RlbCA9IHsgZGF0ZTogdGhpcy5uZXdTZWxlY3RlZERhdGUsIHRpbWU6IHNjaGVkdWxlRGF0YSB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFyZW50TW9kZWwpO1xuXHR9XG5cblxuXHQvLyBEYXRlIFBpY2tlciAvL1xuICAgIHByaXZhdGUgbXlEYXRlUGlja2VyT3B0aW9ucyA9IHtcbiAgICAgICAgdG9kYXlCdG5UeHQ6ICdUb2RheScsXG4gICAgICAgIGRhdGVGb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgZmlyc3REYXlPZldlZWs6ICdtbycsXG4gICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcbiAgICAgICAgaGVpZ2h0OiAnMTM0cHgnLFxuICAgICAgICB3aWR0aDogJzMwMHB4JyxcblxuICAgICAgICBiYWNrZ3JvdW5kOiBcImJsdWVcIixcbiAgICAgICAgc2hvd1RleHRCb3g6IGZhbHNlLFxuICAgIH07XG5cbiAgICBwdWJsaWMgaXNEYXRlU2VsZWN0ZWQ9bnVsbDtcbiAgICBzZWxlY3RlZERhdGU6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgbmV3U2VsZWN0ZWREYXRlID0gbnVsbDtcbiAgICBwdWJsaWMgc2NoZWR1bGVhcnJheSA6IFNjaGVkdWxlRGF0YVtdO1xuICAgIHByaXZhdGUgYXZhaWxhYmxlVGltZVNsb3RzPSBbXTtcblxuXG5cblxuICAgIG9uRGF0ZUNoYW5nZWQoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uRGF0ZUNoYW5nZWQoKTogJywgZXZlbnQuZGF0ZSwgJyAtIGZvcm1hdHRlZDogJywgZXZlbnQuZm9ybWF0dGVkLCAnIC0gZXBvYyB0aW1lc3RhbXA6ICcsIGV2ZW50LmVwb2MpO1xuICAgICAgICB0aGlzLm5ld1NlbGVjdGVkRGF0ZSA9IGV2ZW50LmZvcm1hdHRlZDtcbiAgICAgICAgdGhpcy5pc0RhdGVTZWxlY3RlZD0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9zY2hlZHVsYXJTZXJ2aWNlLmdldERheVNjaGVkdWxlKCkudGhlbigoZGF5dGltZTogRGF5dGltZXNbXSkgPT4gdGhpcy5kYXlzY2hlZHVsZWFycmF5ID0gZGF5dGltZSk7XG5cblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld1NlbGVjdGVkRGF0ZSk7XG5cblxuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRVc2VyRGF0YSh0aGlzLm5ld1NlbGVjdGVkRGF0ZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgLy8gQWRkIHJlc3BvbnNlIHdpdGggY3VybHkgYnJhY2VzIHRvIGhhdmUgcmV0dXJuIHJlc3BvbnNlIHJlYWR5IGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7dGhpcy5zY2hlZHVsZWFycmF5ID0gZGF0YS5TaGVldDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZsYWdzQmFzZWRvbkpzb24odGhpcy5zY2hlZHVsZWFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxuICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiRmluaXNoZWRcIilcbiAgICAgICAgICAgICk7XG5cbiAgICB9XG5cblxuXG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHJldHJpZXZlcyB0aGUgYXZhaWxhYmxlIHRpbWUgc2xvdCBhcnJheVxuICAgIHVwZGF0ZUZsYWdzQmFzZWRvbkpzb24odGltZWFycmF5KXtcbiAgICAgICAgLy8gQ2hhbmdlIGhlcmUgaWYgeW91IG5lZWQgdG8gYWRkIG90aGVyIHRpbWUgc2xvdHNcbiAgICAgICAgdmFyIHByZWRldGVybWluZWRUaW1lU2xvdHMgPSBbODAwLDkwMCwxMDAwLDExMDAsMTIwMCwxMzAwLDE0MDAsMTUwMCwxNjAwXTtcbiAgICAgICAgY29uc29sZS5sb2coJ0FycmF5IHJlY2VpdmVkIGZyb20gc2VydmVyIGlzOiAnKyBKU09OLnN0cmluZ2lmeSh0aW1lYXJyYXkpKTtcblxuICAgICAgICBpZih0aW1lYXJyYXkgIT0gXCJcIiApe1xuICAgICAgICAgICAgdmFyIGJvb2tlZFRpbWVTbG90cyA9IFtdOyAvLz0gWzEzMDAsMTQwMCwxNTAwLDE2MDBdO1xuICAgICAgICAgICAgdmFyIGJvb2tlZFRpbWVBcnJheUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPHRpbWVhcnJheS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gdGltZWFycmF5W2ldO1xuXG4gICAgICAgICAgICAgICAgaWYocHJlZGV0ZXJtaW5lZFRpbWVTbG90cy5pbmRleE9mKG9ialtcInRpbWVcIl0pID4gLTEpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBib29rZWRUaW1lU2xvdHNbYm9va2VkVGltZUFycmF5SW5kZXhdID0gb2JqW1widGltZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgYm9va2VkVGltZUFycmF5SW5kZXggPSBib29rZWRUaW1lQXJyYXlJbmRleCsxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgLy9GaWx0ZXIgb3V0IHRoZSBib29rZWQgdGltZSBzbG90cyBmcm9tIHByZS1jb25maWd1cmVkIHRpbWUgc2xvdHNcbiAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlVGltZVNsb3RzID0gcHJlZGV0ZXJtaW5lZFRpbWVTbG90cy5maWx0ZXIoZnVuY3Rpb24oaSkge3JldHVybiBib29rZWRUaW1lU2xvdHMuaW5kZXhPZihpKSA8IDA7fSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlVGltZVNsb3RzID0gcHJlZGV0ZXJtaW5lZFRpbWVTbG90cztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIkF2YWlsYWJsZSB0aW1lIHNsb3QgYXJyYXkgaXM6IFwiKyB0aGlzLmF2YWlsYWJsZVRpbWVTbG90cyk7XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
