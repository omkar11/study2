System.register(['angular2/core', "./httpgetpost.service"], function(exports_1, context_1) {
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
    var HTTPGetPost;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpgetpost_service_1_1) {
                httpgetpost_service_1 = httpgetpost_service_1_1;
            }],
        execute: function() {
            HTTPGetPost = (function () {
                function HTTPGetPost(_httpService) {
                    this._httpService = _httpService;
                }
                HTTPGetPost.prototype.onTestGet = function () {
                    var _this = this;
                    this._httpService.getUserData()
                        .subscribe(function (data) { return _this.schedulearray = data.response; }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HTTPGetPost.prototype.onTestPost = function () {
                    var _this = this;
                    this._httpService.postJSON()
                        .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HTTPGetPost = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "<h3> Hello to GET POST Example</h3>\n                <button (click)=\"onTestGet()\">Test User Data</button>\n                <li *ngFor=\"#ScheduleData of schedulearray\">{{ScheduleData.Full_Name}}</li>\n                \n                <button (click)=\"onTestPost()\"> Test POST Request</button>\n                <p>Output: {{postData}}</p>\n              \n                ",
                        providers: [httpgetpost_service_1.HTTPGetPostService]
                    }), 
                    __metadata('design:paramtypes', [httpgetpost_service_1.HTTPGetPostService])
                ], HTTPGetPost);
                return HTTPGetPost;
            }());
            exports_1("HTTPGetPost", HTTPGetPost);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdFVFBPU1QvaHR0cGdldHBvc3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBT0kscUJBQW9CLFlBQWdDO29CQUFoQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7Z0JBRXBELENBQUM7Z0JBR0QsK0JBQVMsR0FBVDtvQkFBQSxpQkFVQztvQkFQRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTt5QkFDMUIsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFsQyxDQUFrQyxFQUMxQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBWixDQUFZLEVBQ3JCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUVWLENBQUM7Z0JBR0QsZ0NBQVUsR0FBVjtvQkFBQSxpQkFPQztvQkFORyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTt5QkFDdkIsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFwQyxDQUFvQyxFQUM1QyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBWixDQUFZLEVBQ3JCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNWLENBQUM7Z0JBN0NMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSw0WEFPRzt3QkFDYixTQUFTLEVBQUMsQ0FBQyx3Q0FBa0IsQ0FBQztxQkFDakMsQ0FBQzs7K0JBQUE7Z0JBb0NGLGtCQUFDO1lBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtZQWxDRCxxQ0FrQ0MsQ0FBQSIsImZpbGUiOiJHRVRQT1NUL2h0dHBnZXRwb3N0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIVFRQR2V0UG9zdFNlcnZpY2V9IGZyb20gXCIuL2h0dHBnZXRwb3N0LnNlcnZpY2VcIjtcbmltcG9ydCB7U2NoZWR1bGVEYXRhfSBmcm9tIFwiLi9zY2hlZHVsZWRhdGFcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdodHRwLXRlc3QnLFxuICAgIHRlbXBsYXRlOiBgPGgzPiBIZWxsbyB0byBHRVQgUE9TVCBFeGFtcGxlPC9oMz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblRlc3RHZXQoKVwiPlRlc3QgVXNlciBEYXRhPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNTY2hlZHVsZURhdGEgb2Ygc2NoZWR1bGVhcnJheVwiPnt7U2NoZWR1bGVEYXRhLkZ1bGxfTmFtZX19PC9saT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblRlc3RQb3N0KClcIj4gVGVzdCBQT1NUIFJlcXVlc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD5PdXRwdXQ6IHt7cG9zdERhdGF9fTwvcD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYCxcbiAgICBwcm92aWRlcnM6W0hUVFBHZXRQb3N0U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIVFRQR2V0UG9zdCB7XG5cbiAgICBwb3N0RGF0YTogc3RyaW5nO1xuICAgIHB1YmxpYyBzY2hlZHVsZWFycmF5IDogU2NoZWR1bGVEYXRhW107XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEhUVFBHZXRQb3N0U2VydmljZSl7XG5cbiAgICB9XG5cblxuICAgIG9uVGVzdEdldCgpe1xuXG5cbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0VXNlckRhdGEoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMuc2NoZWR1bGVhcnJheSA9IGRhdGEucmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxuICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiRmluaXNoZWRcIilcbiAgICAgICAgICAgICk7XG5cbiAgICB9XG5cblxuICAgIG9uVGVzdFBvc3QoKXtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdEpTT04oKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMucG9zdERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJGaW5pc2hlZFwiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
