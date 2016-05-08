System.register(["angular2/core", "./mock-schedule"], function(exports_1, context_1) {
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
    var core_1, mock_schedule_1;
    var SchedularService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_schedule_1_1) {
                mock_schedule_1 = mock_schedule_1_1;
            }],
        execute: function() {
            SchedularService = (function () {
                function SchedularService() {
                }
                // https://docs.google.com/spreadsheets/d/1MuVFBugwi8iFyNTE0owsUgeNA9V3FkEAEkQqHzBFbo8/gviz/tq?tqx=out:json&tq=Select*
                SchedularService.prototype.getDaySchedule = function () {
                    return Promise.resolve(mock_schedule_1.DAYSCHEDULE);
                };
                SchedularService.prototype.insertDaySchedule = function (times) {
                    Promise.resolve(mock_schedule_1.DAYSCHEDULE).then(function (time) { return time.push(times); });
                };
                SchedularService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SchedularService);
                return SchedularService;
            }());
            exports_1("SchedularService", SchedularService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxhci9zY2hlZHVsYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO2dCQVdBLENBQUM7Z0JBVEEsc0hBQXNIO2dCQUN0SCx5Q0FBYyxHQUFkO29CQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLDJCQUFXLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCw0Q0FBaUIsR0FBakIsVUFBa0IsS0FBZTtvQkFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQywyQkFBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBaUIsSUFBTSxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztnQkFDN0UsQ0FBQztnQkFWRjtvQkFBQyxpQkFBVSxFQUFFOztvQ0FBQTtnQkFZYix1QkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsK0NBV0MsQ0FBQSIsImZpbGUiOiJzY2hlZHVsYXIvc2NoZWR1bGFyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0RheXRpbWVzfSBmcm9tIFwiLi9kYXl0aW1lc1wiXG5pbXBvcnQge0RBWVNDSEVEVUxFfSBmcm9tIFwiLi9tb2NrLXNjaGVkdWxlXCJcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZWR1bGFyU2VydmljZXtcblx0XG5cdC8vIGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzFNdVZGQnVnd2k4aUZ5TlRFMG93c1VnZU5BOVYzRmtFQUVrUXFIekJGYm84L2d2aXovdHE/dHF4PW91dDpqc29uJnRxPVNlbGVjdCpcblx0Z2V0RGF5U2NoZWR1bGUoKXtcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShEQVlTQ0hFRFVMRSk7XG5cdH1cblxuXHRpbnNlcnREYXlTY2hlZHVsZSh0aW1lczogRGF5dGltZXMpe1xuXHRcdFByb21pc2UucmVzb2x2ZShEQVlTQ0hFRFVMRSkudGhlbigodGltZSA6IERheXRpbWVzW10gKSA9PiB0aW1lLnB1c2godGltZXMpKTtcblx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
