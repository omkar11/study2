System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var BootFlatDatePicker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            BootFlatDatePicker = (function () {
                function BootFlatDatePicker(elem) {
                    this.elem = elem;
                    this.dateChanged = new core_1.EventEmitter();
                    this.showTextBox = true;
                    this.showSelector = false;
                    this.visibleMonth = { monthTxt: '', monthNbr: 0, year: 0 };
                    this.selectedDate = { year: 0, month: 0, day: 0 };
                    this.weekDays = [];
                    this.dates = [];
                    this.selectionDayTxt = '';
                    this.dayIdx = 0;
                    this.today = null;
                    this.PREV_MONTH = 1;
                    this.CURR_MONTH = 2;
                    this.NEXT_MONTH = 3;
                    // Default options
                    this.dayLabels = { su: 'Sun', mo: 'Mon', tu: 'Tue', we: 'Wed', th: 'Thu', fr: 'Fri', sa: 'Sat' };
                    this.monthLabels = { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' };
                    this.dateFormat = 'yyyy-mm-dd';
                    this.todayBtnTxt = 'Today';
                    this.firstDayOfWeek = 'mo';
                    this.sunHighlight = true;
                    this.height = '34px';
                    this.width = '100%';
                    this.background = "red";
                    this.today = new Date();
                }
                BootFlatDatePicker.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dayLabels = this.options.dayLabels !== undefined ? this.options.dayLabels : this.dayLabels;
                    this.monthLabels = this.options.monthLabels !== undefined ? this.options.monthLabels : this.monthLabels;
                    this.dateFormat = this.options.dateFormat !== undefined ? this.options.dateFormat : this.dateFormat;
                    this.todayBtnTxt = this.options.todayBtnTxt !== undefined ? this.options.todayBtnTxt : this.todayBtnTxt;
                    this.firstDayOfWeek = this.options.firstDayOfWeek !== undefined ? this.options.firstDayOfWeek : this.firstDayOfWeek;
                    this.sunHighlight = this.options.sunHighlight !== undefined ? this.options.sunHighlight : this.sunHighlight;
                    this.height = this.options.height !== undefined ? this.options.height : this.height;
                    this.width = this.options.width !== undefined ? this.options.width : this.width;
                    // Custom Editing Pardeep
                    this.background = this.options.background !== undefined ? this.options.background : this.background;
                    this.showTextBox = this.options.showTextBox !== undefined ? this.options.showTextBox : this.showTextBox;
                    if (this.showTextBox == false) {
                        this.openBtnClicked();
                        this.border = 'none';
                        var doc = document.getElementsByTagName('html')[0];
                        doc.addEventListener('click', function (event) {
                            if (_this.showSelector && event.target && _this.elem.nativeElement !== event.target && !_this.elem.nativeElement.contains(event.target)) {
                                _this.showSelector = true;
                            }
                        }, true);
                    }
                    else if (this.showTextBox == true) {
                        var doc = document.getElementsByTagName('html')[0];
                        doc.addEventListener('click', function (event) {
                            if (_this.showSelector && event.target && _this.elem.nativeElement !== event.target && !_this.elem.nativeElement.contains(event.target)) {
                                _this.showSelector = false;
                            }
                        }, false);
                    }
                    // Custom Editing Pardeep
                    var days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
                    this.dayIdx = days.indexOf(this.firstDayOfWeek);
                    if (this.dayIdx !== -1) {
                        var idx = this.dayIdx;
                        for (var i = 0; i < days.length; i++) {
                            this.weekDays.push(this.dayLabels[days[idx]]);
                            idx = days[idx] === 'sa' ? 0 : idx + 1;
                        }
                    }
                };
                BootFlatDatePicker.prototype.ngOnChanges = function (changes) {
                    this.selectionDayTxt = changes['selDate'].currentValue;
                    if (this.selectionDayTxt !== '') {
                        var fmt = this.options.dateFormat !== undefined ? this.options.dateFormat : this.dateFormat;
                        var dpos = fmt.indexOf('dd');
                        var mpos = fmt.indexOf('mm');
                        var ypos = fmt.indexOf('yyyy');
                        this.selectedDate = { day: parseInt(this.selectionDayTxt.substring(dpos, dpos + 2)),
                            month: parseInt(this.selectionDayTxt.substring(mpos, mpos + 2)),
                            year: parseInt(this.selectionDayTxt.substring(ypos, ypos + 4)) };
                    }
                };
                BootFlatDatePicker.prototype.removeBtnClicked = function () {
                    this.selectionDayTxt = '';
                    this.selectedDate = { year: 0, month: 0, day: 0 };
                    this.dateChanged.emit({ date: {}, formatted: this.selectionDayTxt, epoc: 0 });
                };
                BootFlatDatePicker.prototype.openBtnClicked = function () {
                    this.showSelector = !this.showSelector;
                    if (this.showSelector) {
                        var y = 0, m = 0;
                        if (this.selectedDate.year === 0 && this.selectedDate.month === 0 && this.selectedDate.day === 0) {
                            y = this.today.getFullYear();
                            m = this.today.getMonth() + 1;
                        }
                        else {
                            y = this.selectedDate.year;
                            m = this.selectedDate.month;
                        }
                        // Set current month
                        this.visibleMonth = { monthTxt: this.monthLabels[m], monthNbr: m, year: y };
                        // Create current month
                        this.createMonth(m, y);
                    }
                };
                BootFlatDatePicker.prototype.prevMonth = function () {
                    var m = this.visibleMonth.monthNbr;
                    var y = this.visibleMonth.year;
                    if (m === 1) {
                        m = 12;
                        y--;
                    }
                    else {
                        m--;
                    }
                    this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
                    this.createMonth(m, y);
                };
                BootFlatDatePicker.prototype.nextMonth = function () {
                    var m = this.visibleMonth.monthNbr;
                    var y = this.visibleMonth.year;
                    if (m === 12) {
                        m = 1;
                        y++;
                    }
                    else {
                        m++;
                    }
                    this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
                    this.createMonth(m, y);
                };
                BootFlatDatePicker.prototype.prevYear = function () {
                    this.visibleMonth.year--;
                    this.createMonth(this.visibleMonth.monthNbr, this.visibleMonth.year);
                };
                BootFlatDatePicker.prototype.nextYear = function () {
                    this.visibleMonth.year++;
                    this.createMonth(this.visibleMonth.monthNbr, this.visibleMonth.year);
                };
                BootFlatDatePicker.prototype.todayClicked = function () {
                    // Today selected
                    this.selectDate({ day: this.today.getDate(), month: this.today.getMonth() + 1, year: this.today.getFullYear() });
                };
                BootFlatDatePicker.prototype.cellClicked = function (cell) {
                    // Cell clicked in the selector
                    if (cell.cmo === this.PREV_MONTH) {
                        // Previous month of day
                        this.prevMonth();
                    }
                    else if (cell.cmo === this.CURR_MONTH) {
                        // Current month of day
                        this.selectDate(cell);
                    }
                    else if (cell.cmo === this.NEXT_MONTH) {
                        // Next month of day
                        this.nextMonth();
                    }
                };
                BootFlatDatePicker.prototype.selectDate = function (date) {
                    this.selectedDate = { day: date.day, month: date.month, year: date.year };
                    this.selectionDayTxt = this.formatDate(date);
                    // Custom Editing Pardeep
                    if (this.showTextBox == false) {
                        this.showSelector = true;
                    }
                    else if (this.showTextBox == true) {
                        this.showSelector = false;
                    }
                    // Custom Editing Pardeep
                    var epoc = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime() / 1000.0;
                    this.dateChanged.emit({ date: this.selectedDate, formatted: this.selectionDayTxt, epoc: epoc });
                };
                BootFlatDatePicker.prototype.preZero = function (val) {
                    // Prepend zero if smaller than 10
                    return val < '10' ? '0' + val : val;
                };
                BootFlatDatePicker.prototype.formatDate = function (val) {
                    return this.dateFormat.replace('yyyy', val.year)
                        .replace('mm', this.preZero(val.month))
                        .replace('dd', this.preZero(val.day));
                };
                BootFlatDatePicker.prototype.monthText = function (m) {
                    // Returns mont as a text
                    return this.monthLabels[m];
                };
                BootFlatDatePicker.prototype.monthStartIdx = function (y, m) {
                    // Month start index
                    var d = new Date();
                    d.setDate(1);
                    d.setMonth(m - 1);
                    d.setFullYear(y);
                    var idx = d.getDay() + this.sundayIdx();
                    return idx >= 7 ? idx - 7 : idx;
                };
                BootFlatDatePicker.prototype.daysInMonth = function (m, y) {
                    // Return number of days of current month
                    return new Date(y, m, 0).getDate();
                };
                BootFlatDatePicker.prototype.daysInPrevMonth = function (m, y) {
                    // Return number of days of the previous month
                    if (m === 1) {
                        m = 12;
                        y--;
                    }
                    else {
                        m--;
                    }
                    return this.daysInMonth(m, y);
                };
                BootFlatDatePicker.prototype.isCurrDay = function (d, m, y, cmo) {
                    // Check is a given date the current date
                    return d === this.today.getDate() && m === this.today.getMonth() + 1 && y === this.today.getFullYear() && cmo === 2;
                };
                BootFlatDatePicker.prototype.sundayIdx = function () {
                    // Index of Sunday day
                    return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
                };
                BootFlatDatePicker.prototype.createMonth = function (m, y) {
                    this.dates.length = 0;
                    var monthStart = this.monthStartIdx(y, m);
                    var dInThisM = this.daysInMonth(m, y);
                    var dInPrevM = this.daysInPrevMonth(m, y);
                    var sunIdx = this.sundayIdx();
                    var dayNbr = 1;
                    var cmo = this.PREV_MONTH;
                    for (var i = 1; i < 7; i++) {
                        var week = [];
                        if (i === 1) {
                            // First week
                            var pm = dInPrevM - monthStart + 1;
                            // Previous month
                            for (var j = pm; j <= dInPrevM; j++) {
                                week.push({ day: j, month: m, year: y, cmo: cmo, currDay: this.isCurrDay(j, m, y, cmo), sun: week.length === sunIdx });
                            }
                            cmo = this.CURR_MONTH;
                            // Current month
                            var daysLeft = 7 - week.length;
                            for (var j = 0; j < daysLeft; j++) {
                                week.push({ day: dayNbr, month: m, year: y, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo), sun: week.length === sunIdx });
                                dayNbr++;
                            }
                        }
                        else {
                            // Rest of the weeks
                            for (var j = 1; j < 8; j++) {
                                if (dayNbr > dInThisM) {
                                    // Next month
                                    dayNbr = 1;
                                    cmo = this.NEXT_MONTH;
                                }
                                week.push({ day: dayNbr, month: m, year: y, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo), sun: week.length === sunIdx });
                                dayNbr++;
                            }
                        }
                        this.dates.push(week);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BootFlatDatePicker.prototype, "options", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], BootFlatDatePicker.prototype, "selDate", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], BootFlatDatePicker.prototype, "dateChanged", void 0);
                BootFlatDatePicker = __decorate([
                    core_1.Component({
                        selector: 'bootflat-date-picker',
                        templateUrl: './dev/schedular/bootflat-datepicker.html',
                        styleUrls: ['./dev/schedular/bootflat-datepicker.css'],
                        directives: [common_1.NgIf, common_1.NgFor, common_1.NgClass, common_1.NgStyle]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], BootFlatDatePicker);
                return BootFlatDatePicker;
            }());
            exports_1("BootFlatDatePicker", BootFlatDatePicker);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxhci9ib290ZmxhdC1kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBK0JJLDRCQUFtQixJQUFnQjtvQkFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtvQkE1QnpCLGdCQUFXLEdBQXdCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUVoRSxnQkFBVyxHQUFXLElBQUksQ0FBQztvQkFDM0IsaUJBQVksR0FBVyxLQUFLLENBQUM7b0JBQzdCLGlCQUFZLEdBQVcsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDO29CQUM1RCxpQkFBWSxHQUFVLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDbEQsYUFBUSxHQUFpQixFQUFFLENBQUM7b0JBQzVCLFVBQUssR0FBaUIsRUFBRSxDQUFDO29CQUN6QixvQkFBZSxHQUFVLEVBQUUsQ0FBQztvQkFDNUIsV0FBTSxHQUFVLENBQUMsQ0FBQztvQkFDbEIsVUFBSyxHQUFRLElBQUksQ0FBQztvQkFFbEIsZUFBVSxHQUFVLENBQUMsQ0FBQztvQkFDdEIsZUFBVSxHQUFVLENBQUMsQ0FBQztvQkFDdEIsZUFBVSxHQUFVLENBQUMsQ0FBQztvQkFFdEIsa0JBQWtCO29CQUNsQixjQUFTLEdBQUcsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFDLENBQUM7b0JBQzFGLGdCQUFXLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxF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OzttRUFBQTtnQkFDUjtvQkFBQyxhQUFNLEVBQUU7O3VFQUFBO2dCQVZiO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsV0FBVyxFQUFFLDBDQUEwQzt3QkFDdkQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7d0JBQ3RELFVBQVUsRUFBRSxDQUFDLGFBQUksRUFBRSxjQUFLLEVBQUUsZ0JBQU8sRUFBRSxnQkFBTyxDQUFDO3FCQUM5QyxDQUFDOztzQ0FBQTtnQkFrU0YseUJBQUM7WUFBRCxDQWhTQSxBQWdTQyxJQUFBO1lBaFNELG1EQWdTQyxDQUFBIiwiZmlsZSI6InNjaGVkdWxhci9ib290ZmxhdC1kYXRlcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSwgRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nSWYsIE5nRm9yLCBOZ0NsYXNzLCBOZ1N0eWxlLCBOZ01vZGVsfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtNeURhdGUsIE15TW9udGh9IGZyb20gJy4vYm9vdGZsYXQtZGF0ZXBpY2tlci1pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Jvb3RmbGF0LWRhdGUtcGlja2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGV2L3NjaGVkdWxhci9ib290ZmxhdC1kYXRlcGlja2VyLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Rldi9zY2hlZHVsYXIvYm9vdGZsYXQtZGF0ZXBpY2tlci5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbTmdJZiwgTmdGb3IsIE5nQ2xhc3MsIE5nU3R5bGVdXG59KVxuXG5leHBvcnQgY2xhc3MgQm9vdEZsYXREYXRlUGlja2VyIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIG9wdGlvbnM6YW55O1xuICAgIEBJbnB1dCgpIHNlbERhdGU6c3RyaW5nO1xuICAgIEBPdXRwdXQoKSBkYXRlQ2hhbmdlZDpFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBzaG93VGV4dEJveDogYm9vbGVhbj0gdHJ1ZTtcbiAgICBzaG93U2VsZWN0b3I6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHZpc2libGVNb250aDpNeU1vbnRoID0ge21vbnRoVHh0OiAnJywgbW9udGhOYnI6IDAsIHllYXI6IDB9O1xuICAgIHNlbGVjdGVkRGF0ZTpNeURhdGUgPSB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH07XG4gICAgd2Vla0RheXM6QXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGRhdGVzOkFycmF5PE9iamVjdD4gPSBbXTtcbiAgICBzZWxlY3Rpb25EYXlUeHQ6c3RyaW5nID0gJyc7XG4gICAgZGF5SWR4Om51bWJlciA9IDA7XG4gICAgdG9kYXk6RGF0ZSA9IG51bGw7XG5cbiAgICBQUkVWX01PTlRIOm51bWJlciA9IDE7XG4gICAgQ1VSUl9NT05USDpudW1iZXIgPSAyO1xuICAgIE5FWFRfTU9OVEg6bnVtYmVyID0gMztcblxuICAgIC8vIERlZmF1bHQgb3B0aW9uc1xuICAgIGRheUxhYmVscyA9IHtzdTogJ1N1bicsIG1vOiAnTW9uJywgdHU6ICdUdWUnLCB3ZTogJ1dlZCcsIHRoOiAnVGh1JywgZnI6ICdGcmknLCBzYTogJ1NhdCd9O1xuICAgIG1vbnRoTGFiZWxzID0geyAxOiAnSmFuJywgMjogJ0ZlYicsIDM6ICdNYXInLCA0OiAnQXByJywgNTogJ01heScsIDY6ICdKdW4nLCA3OiAnSnVsJywgODogJ0F1ZycsIDk6ICdTZXAnLCAxMDogJ09jdCcsIDExOiAnTm92JywgMTI6ICdEZWMnIH07XG4gICAgZGF0ZUZvcm1hdDpzdHJpbmcgPSAneXl5eS1tbS1kZCdcbiAgICB0b2RheUJ0blR4dDpzdHJpbmcgPSAnVG9kYXknO1xuICAgIGZpcnN0RGF5T2ZXZWVrOnN0cmluZyA9ICdtbyc7XG4gICAgc3VuSGlnaGxpZ2h0OmJvb2xlYW4gPSB0cnVlO1xuICAgIGhlaWdodDpzdHJpbmcgPSAnMzRweCc7XG4gICAgd2lkdGg6c3RyaW5nID0gJzEwMCUnO1xuICAgIGJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgIGJvcmRlcjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMudG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmRheUxhYmVscyA9IHRoaXMub3B0aW9ucy5kYXlMYWJlbHMgIT09IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5kYXlMYWJlbHMgOiB0aGlzLmRheUxhYmVscztcbiAgICAgICAgdGhpcy5tb250aExhYmVscyA9IHRoaXMub3B0aW9ucy5tb250aExhYmVscyAhPT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLm1vbnRoTGFiZWxzIDogdGhpcy5tb250aExhYmVscztcbiAgICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gdGhpcy5vcHRpb25zLmRhdGVGb3JtYXQgIT09IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5kYXRlRm9ybWF0IDogdGhpcy5kYXRlRm9ybWF0O1xuICAgICAgICB0aGlzLnRvZGF5QnRuVHh0ID0gdGhpcy5vcHRpb25zLnRvZGF5QnRuVHh0ICE9PSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMudG9kYXlCdG5UeHQgOiB0aGlzLnRvZGF5QnRuVHh0O1xuICAgICAgICB0aGlzLmZpcnN0RGF5T2ZXZWVrID0gdGhpcy5vcHRpb25zLmZpcnN0RGF5T2ZXZWVrICE9PSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMuZmlyc3REYXlPZldlZWsgOiB0aGlzLmZpcnN0RGF5T2ZXZWVrO1xuICAgICAgICB0aGlzLnN1bkhpZ2hsaWdodCA9IHRoaXMub3B0aW9ucy5zdW5IaWdobGlnaHQgIT09IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5zdW5IaWdobGlnaHQgOiB0aGlzLnN1bkhpZ2hsaWdodDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm9wdGlvbnMuaGVpZ2h0ICE9PSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMuaGVpZ2h0IDogdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm9wdGlvbnMud2lkdGggIT09IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy53aWR0aCA6IHRoaXMud2lkdGg7XG4gICAgICAgIFxuICAgICAgICAvLyBDdXN0b20gRWRpdGluZyBQYXJkZWVwXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kICE9PSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCA6IHRoaXMuYmFja2dyb3VuZDtcbiAgICAgICAgdGhpcy5zaG93VGV4dEJveCA9IHRoaXMub3B0aW9ucy5zaG93VGV4dEJveCAhPT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLnNob3dUZXh0Qm94IDogdGhpcy5zaG93VGV4dEJveDtcbiAgICAgICAgaWYodGhpcy5zaG93VGV4dEJveD09IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMub3BlbkJ0bkNsaWNrZWQoKTtcbiAgICAgICAgICAgIHRoaXMuYm9yZGVyPSAnbm9uZSc7XG4gICAgICAgICAgICBsZXQgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXTtcbiAgICAgICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dTZWxlY3RvciAmJiBldmVudC50YXJnZXQgJiYgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJiAhdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWxlY3RvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdHJ1ZSk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuc2hvd1RleHRCb3g9PSB0cnVlKXtcbiAgICAgICAgICAgIGxldCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xuICAgICAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yICYmIGV2ZW50LnRhcmdldCAmJiB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmICF0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIEN1c3RvbSBFZGl0aW5nIFBhcmRlZXBcbiAgICAgICAgXG4gICAgICAgIGxldCBkYXlzID0gWydzdScsICdtbycsICd0dScsICd3ZScsICd0aCcsICdmcicsICdzYSddO1xuICAgICAgICB0aGlzLmRheUlkeCA9IGRheXMuaW5kZXhPZih0aGlzLmZpcnN0RGF5T2ZXZWVrKTtcbiAgICAgICAgaWYgKHRoaXMuZGF5SWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgbGV0IGlkeCA9IHRoaXMuZGF5SWR4O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrRGF5cy5wdXNoKHRoaXMuZGF5TGFiZWxzW2RheXNbaWR4XV0pO1xuICAgICAgICAgICAgICAgIGlkeCA9IGRheXNbaWR4XSA9PT0gJ3NhJyA/IDAgOiBpZHggKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1twcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkRheVR4dCA9IGNoYW5nZXNbJ3NlbERhdGUnXS5jdXJyZW50VmFsdWU7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0aW9uRGF5VHh0ICE9PSAnJykge1xuICAgICAgICAgICAgbGV0IGZtdCA9IHRoaXMub3B0aW9ucy5kYXRlRm9ybWF0ICE9PSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMuZGF0ZUZvcm1hdCA6IHRoaXMuZGF0ZUZvcm1hdDtcbiAgICAgICAgICAgIGxldCBkcG9zID0gZm10LmluZGV4T2YoJ2RkJyk7XG4gICAgICAgICAgICBsZXQgbXBvcyA9IGZtdC5pbmRleE9mKCdtbScpO1xuICAgICAgICAgICAgbGV0IHlwb3MgPSBmbXQuaW5kZXhPZigneXl5eScpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB7ZGF5OiBwYXJzZUludCh0aGlzLnNlbGVjdGlvbkRheVR4dC5zdWJzdHJpbmcoZHBvcywgZHBvcyArIDIpKSxcbiAgICAgICAgICAgICAgICBtb250aDogcGFyc2VJbnQodGhpcy5zZWxlY3Rpb25EYXlUeHQuc3Vic3RyaW5nKG1wb3MsIG1wb3MgKyAyKSksXG4gICAgICAgICAgICAgICAgeWVhcjogcGFyc2VJbnQodGhpcy5zZWxlY3Rpb25EYXlUeHQuc3Vic3RyaW5nKHlwb3MsIHlwb3MgKyA0KSl9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQnRuQ2xpY2tlZCgpOnZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkRheVR4dCA9ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfTtcbiAgICAgICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHtkYXRlOiB7fSwgZm9ybWF0dGVkOiB0aGlzLnNlbGVjdGlvbkRheVR4dCwgZXBvYzogMH0pO1xuICAgIH1cblxuICAgIG9wZW5CdG5DbGlja2VkKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gIXRoaXMuc2hvd1NlbGVjdG9yO1xuICAgICAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGxldCB5ID0gMCwgbSA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGUueWVhciA9PT0gMCAmJiB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aCA9PT0gMCAmJiB0aGlzLnNlbGVjdGVkRGF0ZS5kYXkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB5ID0gdGhpcy50b2RheS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIG0gPSB0aGlzLnRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeSA9IHRoaXMuc2VsZWN0ZWREYXRlLnllYXI7XG4gICAgICAgICAgICAgICAgbSA9IHRoaXMuc2VsZWN0ZWREYXRlLm1vbnRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2V0IGN1cnJlbnQgbW9udGhcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm1vbnRoTGFiZWxzW21dLCBtb250aE5icjogbSwgeWVhcjogeX07XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBjdXJyZW50IG1vbnRoXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vbnRoKG0sIHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldk1vbnRoKCk6dm9pZCB7XG4gICAgICAgIGxldCBtID0gdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnI7XG4gICAgICAgIGxldCB5ID0gdGhpcy52aXNpYmxlTW9udGgueWVhcjtcbiAgICAgICAgaWYgKG0gPT09IDEpIHtcbiAgICAgICAgICAgIG0gPSAxMjtcbiAgICAgICAgICAgIHktLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG0tLTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5tb250aFRleHQobSksIG1vbnRoTmJyOiBtLCB5ZWFyOiB5fTtcbiAgICAgICAgdGhpcy5jcmVhdGVNb250aChtLCB5KTtcbiAgICB9XG5cbiAgICBuZXh0TW9udGgoKTp2b2lkIHtcbiAgICAgICAgbGV0IG0gPSB0aGlzLnZpc2libGVNb250aC5tb250aE5icjtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnZpc2libGVNb250aC55ZWFyO1xuICAgICAgICBpZiAobSA9PT0gMTIpIHtcbiAgICAgICAgICAgIG0gPSAxO1xuICAgICAgICAgICAgeSsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbSsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm1vbnRoVGV4dChtKSwgbW9udGhOYnI6IG0sIHllYXI6IHl9O1xuICAgICAgICB0aGlzLmNyZWF0ZU1vbnRoKG0sIHkpO1xuICAgIH1cblxuICAgIHByZXZZZWFyKCk6dm9pZCB7XG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoLnllYXItLTtcbiAgICAgICAgdGhpcy5jcmVhdGVNb250aCh0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhcik7XG4gICAgfVxuXG4gICAgbmV4dFllYXIoKTp2b2lkIHtcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGgueWVhcisrO1xuICAgICAgICB0aGlzLmNyZWF0ZU1vbnRoKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyKTtcbiAgICB9XG5cbiAgICB0b2RheUNsaWNrZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gVG9kYXkgc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKHtkYXk6IHRoaXMudG9kYXkuZ2V0RGF0ZSgpLCBtb250aDogdGhpcy50b2RheS5nZXRNb250aCgpICsgMSwgeWVhcjogdGhpcy50b2RheS5nZXRGdWxsWWVhcigpfSk7XG4gICAgfVxuXG4gICAgY2VsbENsaWNrZWQoY2VsbDphbnkpOnZvaWQge1xuICAgICAgICAvLyBDZWxsIGNsaWNrZWQgaW4gdGhlIHNlbGVjdG9yXG4gICAgICAgIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5QUkVWX01PTlRIKSB7XG4gICAgICAgICAgICAvLyBQcmV2aW91cyBtb250aCBvZiBkYXlcbiAgICAgICAgICAgIHRoaXMucHJldk1vbnRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2VsbC5jbW8gPT09IHRoaXMuQ1VSUl9NT05USCkge1xuICAgICAgICAgICAgLy8gQ3VycmVudCBtb250aCBvZiBkYXlcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGF0ZShjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5ORVhUX01PTlRIKSB7XG4gICAgICAgICAgICAvLyBOZXh0IG1vbnRoIG9mIGRheVxuICAgICAgICAgICAgdGhpcy5uZXh0TW9udGgoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdERhdGUoZGF0ZTphbnkpOnZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHtkYXk6IGRhdGUuZGF5LCBtb250aDogZGF0ZS5tb250aCwgeWVhcjogZGF0ZS55ZWFyfTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSB0aGlzLmZvcm1hdERhdGUoZGF0ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBDdXN0b20gRWRpdGluZyBQYXJkZWVwXG4gICAgICAgICAgICBpZih0aGlzLnNob3dUZXh0Qm94PT1mYWxzZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLnNob3dUZXh0Qm94PT10cnVlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWxlY3Rvcj0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIC8vIEN1c3RvbSBFZGl0aW5nIFBhcmRlZXBcbiAgICAgICAgXG4gICAgICAgIGxldCBlcG9jID0gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXksIDAsIDAsIDAsIDApLmdldFRpbWUoKSAvIDEwMDAuMDtcbiAgICAgICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHtkYXRlOiB0aGlzLnNlbGVjdGVkRGF0ZSwgZm9ybWF0dGVkOiB0aGlzLnNlbGVjdGlvbkRheVR4dCwgZXBvYzogZXBvY30pO1xuICAgIH1cblxuICAgIHByZVplcm8odmFsOnN0cmluZyk6c3RyaW5nIHtcbiAgICAgICAgLy8gUHJlcGVuZCB6ZXJvIGlmIHNtYWxsZXIgdGhhbiAxMFxuICAgICAgICByZXR1cm4gdmFsIDwgJzEwJyA/ICcwJyArIHZhbCA6IHZhbDtcbiAgICB9XG5cbiAgICBmb3JtYXREYXRlKHZhbDphbnkpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXQucmVwbGFjZSgneXl5eScsIHZhbC55ZWFyKVxuICAgICAgICAgICAgLnJlcGxhY2UoJ21tJywgdGhpcy5wcmVaZXJvKHZhbC5tb250aCkpXG4gICAgICAgICAgICAucmVwbGFjZSgnZGQnLCB0aGlzLnByZVplcm8odmFsLmRheSkpO1xuICAgIH1cblxuICAgIG1vbnRoVGV4dChtOm51bWJlcik6c3RyaW5nIHtcbiAgICAgICAgLy8gUmV0dXJucyBtb250IGFzIGEgdGV4dFxuICAgICAgICByZXR1cm4gdGhpcy5tb250aExhYmVsc1ttXTtcbiAgICB9XG5cbiAgICBtb250aFN0YXJ0SWR4KHk6bnVtYmVyLCBtOm51bWJlcik6bnVtYmVyIHtcbiAgICAgICAgLy8gTW9udGggc3RhcnQgaW5kZXhcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkLnNldERhdGUoMSk7XG4gICAgICAgIGQuc2V0TW9udGgobSAtIDEpO1xuICAgICAgICBkLnNldEZ1bGxZZWFyKHkpO1xuICAgICAgICBsZXQgaWR4ID0gZC5nZXREYXkoKSArIHRoaXMuc3VuZGF5SWR4KCk7XG4gICAgICAgIHJldHVybiBpZHggPj0gNyA/IGlkeCAtIDcgOiBpZHg7XG4gICAgfVxuXG4gICAgZGF5c0luTW9udGgobTpudW1iZXIsIHk6bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAvLyBSZXR1cm4gbnVtYmVyIG9mIGRheXMgb2YgY3VycmVudCBtb250aFxuICAgICAgICByZXR1cm4gbmV3IERhdGUoeSwgbSwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIGRheXNJblByZXZNb250aChtOm51bWJlciwgeTpudW1iZXIpOm51bWJlciB7XG4gICAgICAgIC8vIFJldHVybiBudW1iZXIgb2YgZGF5cyBvZiB0aGUgcHJldmlvdXMgbW9udGhcbiAgICAgICAgaWYgKG0gPT09IDEpIHtcbiAgICAgICAgICAgIG0gPSAxMjtcbiAgICAgICAgICAgIHktLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG0tLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXlzSW5Nb250aChtLCB5KTtcbiAgICB9XG5cbiAgICBpc0N1cnJEYXkoZDpudW1iZXIsIG06bnVtYmVyLCB5Om51bWJlciwgY21vOmFueSk6Ym9vbGVhbiB7XG4gICAgICAgIC8vIENoZWNrIGlzIGEgZ2l2ZW4gZGF0ZSB0aGUgY3VycmVudCBkYXRlXG4gICAgICAgIHJldHVybiBkID09PSB0aGlzLnRvZGF5LmdldERhdGUoKSAmJiBtID09PSB0aGlzLnRvZGF5LmdldE1vbnRoKCkgKyAxICYmIHkgPT09IHRoaXMudG9kYXkuZ2V0RnVsbFllYXIoKSAmJiBjbW8gPT09IDI7XG4gICAgfVxuXG4gICAgc3VuZGF5SWR4KCk6bnVtYmVyIHtcbiAgICAgICAgLy8gSW5kZXggb2YgU3VuZGF5IGRheVxuICAgICAgICByZXR1cm4gdGhpcy5kYXlJZHggPiAwID8gNyAtIHRoaXMuZGF5SWR4IDogMDtcbiAgICB9XG5cbiAgICBjcmVhdGVNb250aChtOm51bWJlciwgeTpudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRlcy5sZW5ndGggPSAwO1xuICAgICAgICBsZXQgbW9udGhTdGFydCA9IHRoaXMubW9udGhTdGFydElkeCh5LCBtKTtcbiAgICAgICAgbGV0IGRJblRoaXNNID0gdGhpcy5kYXlzSW5Nb250aChtLCB5KTtcbiAgICAgICAgbGV0IGRJblByZXZNID0gdGhpcy5kYXlzSW5QcmV2TW9udGgobSwgeSk7XG4gICAgICAgIGxldCBzdW5JZHggPSB0aGlzLnN1bmRheUlkeCgpO1xuXG4gICAgICAgIGxldCBkYXlOYnIgPSAxO1xuICAgICAgICBsZXQgY21vID0gdGhpcy5QUkVWX01PTlRIO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgdmFyIHdlZWsgPSBbXTtcbiAgICAgICAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gRmlyc3Qgd2Vla1xuICAgICAgICAgICAgICAgIHZhciBwbSA9IGRJblByZXZNIC0gbW9udGhTdGFydCArIDE7XG4gICAgICAgICAgICAgICAgLy8gUHJldmlvdXMgbW9udGhcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gcG07IGogPD0gZEluUHJldk07IGorKykge1xuICAgICAgICAgICAgICAgICAgICB3ZWVrLnB1c2goe2RheTogaiwgbW9udGg6IG0sIHllYXI6IHksIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShqLCBtLCB5LCBjbW8pLCBzdW46IHdlZWsubGVuZ3RoID09PSBzdW5JZHh9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY21vID0gdGhpcy5DVVJSX01PTlRIO1xuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQgbW9udGhcbiAgICAgICAgICAgICAgICB2YXIgZGF5c0xlZnQgPSA3IC0gd2Vlay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkYXlzTGVmdDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlZWsucHVzaCh7ZGF5OiBkYXlOYnIsIG1vbnRoOiBtLCB5ZWFyOiB5LCBjbW86IGNtbywgY3VyckRheTogdGhpcy5pc0N1cnJEYXkoZGF5TmJyLCBtLCB5LCBjbW8pLCBzdW46IHdlZWsubGVuZ3RoID09PSBzdW5JZHh9KTtcbiAgICAgICAgICAgICAgICAgICAgZGF5TmJyKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzdCBvZiB0aGUgd2Vla3NcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5TmJyID4gZEluVGhpc00pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5leHQgbW9udGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheU5iciA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbW8gPSB0aGlzLk5FWFRfTU9OVEg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2Vlay5wdXNoKHtkYXk6IGRheU5iciwgbW9udGg6IG0sIHllYXI6IHksIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbyksIHN1bjogd2Vlay5sZW5ndGggPT09IHN1bklkeH0pO1xuICAgICAgICAgICAgICAgICAgICBkYXlOYnIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGVzLnB1c2god2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
