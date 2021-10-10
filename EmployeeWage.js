const IS_ABSENT=0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const EMP_WAGE_PER_HRS=20;
const NUM_OF_WORKING_DAYS= 10;
const MAX_HRS_IN_MONTH=160;
let empDailyWageArray=new Array();
function getWorkingHours(empCheck){
switch(empCheck) {
    
    case IS_PART_TIME:
        return PART_TIME_HRS;

    case IS_FULL_TIME:
        return FULL_TIME_HRS;
    default:
        return 0;
   }    
}
function calcDailyWage(empHrs) {
	return empHrs * EMP_WAGE_PER_HRS;
}
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays <= NUM_OF_WORKING_DAYS) { 
totalWorkingDays++;
let empCheck=Math.floor(Math.random()*10)%3;
let empHrs= getWorkingHours(empCheck);
totalEmpHrs += empHrs;
empDailyWageArray.push(calcDailyWage(empHrs));
}
let empWage=calcDailyWage(totalEmpHrs);
console.log("Total Days: "+ totalWorkingDays +" Total Hrs: "+ totalEmpHrs +" Employee Wage is: " + empWage);