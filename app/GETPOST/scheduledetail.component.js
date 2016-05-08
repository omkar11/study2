System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ScheduleDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ScheduleDetail = (function () {
                function ScheduleDetail() {
                    this.scheduledDate = {};
                }
                ScheduleDetail = __decorate([
                    core_1.Component({
                        selector: 'schedule-detail',
                        template: "\t\n\t            <div>\n                Available Time Slot: {{scheduledDate}}  <br>\n\n\t\t\t\t</div>\n\t",
                        inputs: ["scheduledDate"],
                        styles: ["\n\t\tlabel{\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 140px;\n\t\t}\n\t\tinput{\n\t\t\twidth: 250px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ScheduleDetail);
                return ScheduleDetail;
            }());
            exports_1("ScheduleDetail", ScheduleDetail);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdFVFBPU1Qvc2NoZWR1bGVkZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQUFBO29CQUVXLGtCQUFhLEdBQUcsRUFBRSxDQUFDO2dCQUU5QixDQUFDO2dCQTVCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSw2R0FLWjt3QkFDRSxNQUFNLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBRXpCLE1BQU0sRUFBRSxDQUFDLG9IQVFYLENBQUM7cUJBSUYsQ0FBQzs7a0NBQUE7Z0JBTUYscUJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELDJDQUlDLENBQUEiLCJmaWxlIjoiR0VUUE9TVC9zY2hlZHVsZWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NoZWR1bGUtZGV0YWlsJyxcbiAgICB0ZW1wbGF0ZTogYFx0XG5cdCAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgQXZhaWxhYmxlIFRpbWUgU2xvdDoge3tzY2hlZHVsZWREYXRlfX0gIDxicj5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0YCxcbiAgICBpbnB1dHM6IFtcInNjaGVkdWxlZERhdGVcIl0sXG5cbiAgICBzdHlsZXM6IFtgXG5cdFx0bGFiZWx7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR3aWR0aDogMTQwcHg7XG5cdFx0fVxuXHRcdGlucHV0e1xuXHRcdFx0d2lkdGg6IDI1MHB4O1xuXHRcdH1cblx0YF1cblxuXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBTY2hlZHVsZURldGFpbHtcblxuICAgIHB1YmxpYyBzY2hlZHVsZWREYXRlID0ge307XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
