/*
var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { 
    var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) 
    return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

document.getElementById(todayx2)[0].textContent = today;
document.getElementById();*/



// OGSÅ TESTET

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');


today = dd;
document.write(today);




var dateNow = new Date();
var month = dateNow.getMonth();

document.createTextNode(dateNow);

var nextday2 = dateNow + 1;
var nextday3 = dateNow + 2;
var nextday4 = dateNow + 3;

nextday2 = get.getElementById("today2");


document.getElementById("todayx") = dateNow;
document.write(dateNow);
document.getElementById("todayx2").innerHTML = "03";










// =================================================Lagt inn kalender fra nettet=====================================================================

/*



function displayCalendar(){
 
 
  var htmlContent ="";
  var FebNumberOfDays ="";
  var counter = 1;
  
  
  var dateNow = new Date();
  var month = dateNow.getMonth();
 
  var nextMonth = month+1; //+1; //Used to match up the current month with the correct start date.
  var prevMonth = month -1;
  var day = dateNow.getDate();
  var year = dateNow.getFullYear();
  
  
  //Determing if February (28,or 29)  
  if (month == 1){
     if ( (year%100!=0) && (year%4==0) || (year%400==0)){
       FebNumberOfDays = 29;
     }else{
       FebNumberOfDays = 28;
     }
  }
  
  
  // names of months and week days.
  var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
  var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];
  var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]
  
  
  // days in previous month and next one , and day of week.
  var nextDate = new Date(nextMonth +' 1 ,'+year);
  var weekdays= nextDate.getDay();
  var weekdays2 = weekdays
  var numOfDays = dayPerMonth[month];
      
  
  
  
  // this leave a white space for days of pervious month.
  while (weekdays>0){
     htmlContent += "<td class='monthPre'></td>";
  
  // used in next loop.
      weekdays--;
  }
  
  // loop to build the calander body.
  while (counter <= numOfDays){
  
      // When to start new line.
     if (weekdays2 > 36){
         weekdays2 = 0;
         htmlContent += "</tr><tr>";
     }
  
  
  
     // if counter is current day.
     // highlight current day using the CSS defined in header.
     if (counter == day){
         htmlContent +="<td class='dayNow'  onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' "+
         "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'>"+counter+"</td>";
     }else{
         htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"#FF0000\"'"+
         " onMouseOut='this.style.background=\"#FFFFFF\"'>"+counter+"</td>";    
  
     }
     
     weekdays2++;
     counter++;
  }
  
  
  
  // building the calendar html body.
  var calendarBody = "<table class='calendar'> <tr class='monthNow'><th colspan='7'>"
  +monthNames[month]+" "+ year +"</th></tr>";
  calendarBody +="<tr class='dayNames'>  <td>Sun</td>  <td>Mon</td> <td>Tues</td>"+
  "<td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td> </tr>";
  calendarBody += "<tr>";
  calendarBody += htmlContent;
  calendarBody += "</tr></table>";
  // set the content of div .
  document.getElementById("calendar").innerHTML=calendarBody;
  
 }
 */