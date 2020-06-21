//CHAPTER 21 TO 25
//STRING METHODS



// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

first_name = prompt("Enter First Name: ");
last_name = prompt("Enter Last Name: ");
full_name = first_name +" "+ last_name;
document.write("Hello "+full_name);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

phone_model = prompt("What is your Favourite Phone Model?");
phone_length = phone_model.length;
document.write("My Favourite Phone Model is "+phone_model+"<br>");
document.write("Length of String "+phone_length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

country_name = prompt("Enter Country Name: ");
nth_index = country_name.indexOf("n");
document.write("Country Name: "+country_name+"<br>");
document.write("Index of n: "+nth_index+"<br>");

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

string_name = prompt("Enter String: ");
lth_index = string_name.lastIndexOf("l");
document.write("String Name: "+string_name+"<br>");
document.write("Index of last l: "+lth_index+"<br>");

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

word_for_third_character = prompt("Enter Word: ");
third_character = word_for_third_character[3];
document.write("String Name: "+word_for_third_character +"<br>");
document.write("Character at 3rd index: "+third_character+"<br>");

// 6. Repeat Q1 using string concat() method.


first_name_6 = prompt("Enter First Name: ");
last_name_6 = prompt("Enter Last Name: ");
full_name_6 = first_name_6.concat(last_name_6);
document.write("Hello "+full_name_6);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

city_enter = prompt("Enter City: ");
final_city = city_enter.replace("hyder","Islam");
document.write("Old name: "+city_enter+"<br>");
document.write("New name: "+final_city+"<br>");


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";
var final_message = message.replace(/and/g ,"&");
document.write(final_message);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


enter_number = prompt("Enter Number: ");
type_enter_number = typeof(enter_number);
document.write("Old Number: "+enter_number+"<br>");
document.write("Old Number Type: "+type_enter_number+"<br>");
new_number = parseInt(enter_number);
type_new_number = typeof(new_number);
document.write("New Number: "+new_number+"<br>");
document.write("New Number Type: "+type_new_number+"<br>");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
enter_password = prompt("Enter Password: ");
upper_case_password = enter_password.toUpperCase();
document.write("User Input: "+enter_password+"<br>");
document.write("Upper Case: "+upper_case_password+"<br>");

// 11. Write a program that takes user input. Convert and
// show the input in title case.
var a=prompt("Enter a programming language");
var firstChar=a.slice(0,1);
var otherChar=a.slice(1);
firstChar=firstChar.toUpperCase();
otherChar=otherChar.toLowerCase();
var b=firstChar+otherChar;
document.write("User Input: "+a+"<br>");
document.write("Title Case: "+b);


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36 ;
var my_string = num.toString();
final_string = my_string.slice(0,2) + my_string.slice(3,5);
document.write("Number: "+my_string+"<br>");
document.write("Result: "+final_string+"<br>");


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var username=prompt("Entetr username");
var a=["@",",",".","!"];
for(var i=0; i<username.length; i++){
    for(var j=0; j<a.length; j++){
        if(username.charAt(i)===a[j]){
            alert("enter a valid username");
        }
    }
}




// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

Array1 = ["cake", "apple pie", "cookie", "chips", "patties"];
user_answer = prompt("Welcome to ABC Bakery /nWhat do you want to order Sir/Ma'am?");
for (var i = 0; i<Array1.length ; i++){
    if (user_answer.toLowerCase() == Array1[i]){
        document.write(user_answer+" is available at index "+i+" at our bakery");
        break
    }
    else if (user_answer.toLowerCase() != Array1[i]){
        document.write("We are Sorry, "+user_answer+" is not available at our bakery");
        break
    }
    
}


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser

var university = "University of Karachi";
university = university.split("")

empty_array=[]

for (var i = 0; i<=university.length-1; i++){
    empty_array[i]=university[i];
    document.write(empty_array[i]+"<br>")

}

// 17. Write a program to display the last character of a user
// input.
 user_input = prompt("Enter Word: ");
 document.write("User Input: "+user_input+"<br>");
 x=user_input.length
 last_letter = user_input[x-1];
 document.write("Last Character of Input: "+last_letter);



// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string
var text = "The quick brown fox jumps over the lazy dog";
var counter = 0;
for (var i=0; i<=text.length; i++){
    if (text.slice(i,i+3).toLowerCase()=="the"){
        counter++
    }
}
document.write("Text: "+text+"<br>");
document.write("There are "+counter+" occourences(s) of word 'the'");






//CHAPTER 26 TO 30
//MATH METHODS







// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

positive_number = parseFloat(prompt("Enter Positive Number: "));
round_off_positive = Math.round(positive_number);
floor_positive = Math.floor(positive_number);
ceil_positive = Math.ceil(positive_number);
document.write("Number: "+positive_number+"<br>");
document.write("Round Off Value: "+round_off_positive+"<br>");
document.write("Floor Value: "+floor_positive+"<br>");
document.write("Ceil Value: "+ceil_positive+"<br>");


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

negitive_number = parseFloat(prompt("Enter Negitive Number: "));
round_off_negitive = Math.round(negitive_number);
floor_negitive = Math.floor(negitive_number);
ceil_negitive = Math.ceil(negitive_number);
document.write("Number: "+negitive_number+"<br>");
document.write("Round Off Value: "+round_off_negitive+"<br>");
document.write("Floor Value: "+floor_negitive+"<br>");
document.write("Ceil Value: "+ceil_negitive+"<br>");

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

input_number3 = parseFloat(prompt("Enter Number: "));
absolute_number = Math.abs(input_number3);
document.write("Absolute Value: "+absolute_number+"<br>");

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

dice_number = Math.floor(Math.random() * 6)+1 ;
document.write("Random Dice Value: "+dice_number+"<br>");

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

coin_number = Math.floor(Math.random() * 2)+1 ;
if (coin_number==1){
    document.write(coin_number+"<br>");
    document.write("Random Coin Value: Tails <br>");

}else if (coin_number==2){
    document.write(coin_number+"<br>");
    document.write("Random Coin Value: Heads <br>");

}


// 6. Write a program that shows a random number between 1
// and 100 in your browser.


random_number1to100 = Math.floor(Math.random() * 100)+1 ;
document.write("Random Number between 1 and 100: "+random_number1to100+"<br>");

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

random_number1to10 = Math.floor(Math.random() * 10)+1 ;
for (i=0; i<=5; i++) {
    user_guess = parseInt(prompt("Enter Number between 1 to 10?"));

    if (user_guess==random_number1to10){
        document.write("Congratulations!!")
        break
    }
    else{
        alert("Try Again")
    }
}











//CHAPTER 31 TO 34
//DATE METHODS



// 1. Write a program that displays current date and time in
// your browser.

var d = new Date();
document.write(d);



// 2. Write a program that alerts the current month in words.
// For example December.
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var d = new Date();
var n = d.getMonth();
document.write("Current Month:"+months[n]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var d = new Date();
var current_day = d.getDay();
document.write("Today is "+days[current_day]);


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var d = new Date();
var current_day = d.getDay();
if (current_day==0 || current_day==6){
    document.write("Its Fun Day");

}


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”

var d = new Date();
document.write(d+"<br>");
if(d<=15){
    document.write("First Fifteen days of the month");
}else{
    document.write("Last days of the month");

}


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
var a=new Date();
var b=a.getTime();
document.write("Current Date: "+a+"<br>");
document.write("Elapsed milliseconds since January 1,1970: "+b+"<br>");
document.write("Elapsed minutes since January 1,1970: "+b/1000*60);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var a=new Date();
var b=a.getHours();
if(b<12){
    document.write("It's AM");
}else{
    document.write("It's PM");

}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


var later_date = new Date(2020,12,0);
document.write(later_date);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var ramadan_2015 = new Date(2015,06,18);
var current_date = new Date();
var final_days = Math.ceil((current_date.getTime()-ramadan_2015.getTime())/ (1000*60*60*24))
document.write(final_days)

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var a=new Date(2015,0,1);
var reference=new Date();
var diff=Math.ceil(reference.getTime()-a.getTime())/(1000);
document.write("On reference day "+reference+" <br>"+ diff+" seconds have passed since beginning of 2015");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
var dt = new Date();
document.write("current time: "+dt+"<br>");
dt.setHours( dt.getHours()  -1 );
document.write("An Hour ago: "+dt );

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

current_date = new Date();
before_100_year = current_date.getFullYear()-100;
before_100_date = new Date(before_100_year);
document.write("Current Date: "+current_date+"<br>");
document.write("100 Years back, it was "+before_100_date+"<br>");




// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


user_age = parseInt(prompt("Enter Your Age:"));
current_year = new Date().getFullYear();
birth_year = current_year - user_age;
document.write("Your Age: "+user_age+"<br>");
document.write("Your Birth Year: "+birth_year+"<br>");



// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


document.write("<h1>K-Electric Bill</h1><br>");
document.write("Customer Name: ABC Customer"+"<br>");
var month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
var d = new Date();
var n = d.getMonth();
document.write("Current Month: "+month[n]+"<br>");
var units = 410;
document.write("Units per Month: "+units+"<br>");
var charges = 16;
document.write("Charges per Unit: "+charges+"<br><br>");
var net_amount = units*charges;
document.write("Net Amount Payabale (within due date): "+net_amount+"<br>");
var late_surcharge = 350;
document.write("Late Payment Surchage: "+late_surcharge+"<br>");
var Gross_amount = net_amount+late_surcharge;
document.write("Gross Amount Payabale (after due date): "+Gross_amount+"<br>");










//CHAPTER 35 TO 38
//FUNCTIONS


// 1. Write a function that displays current date & time in your
// browser.
function DateAndTime(){
    var d = new Date();
    document.write(d);
}

DateAndTime();



// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
function Greeting(f_name, l_name){
    document.write("Hello "+f_name+" "+l_name);
}

Greeting("FirstName","LastName");



// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
function Addition(num1,num2){
    var result = num1 + num2;
    document.write("The sum of "+num1+" and "+num2+" is "+result);
}

Addition(10,7);



// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
function Calculator(number1,number2,operation){
    if (operation == "+"){
        document.write(number1+" "+operation+" "+number2+" = "+(number1+number2));
    }
    else if (operation == "-"){
        document.write(number1+" "+operation+" "+number2+" = "+(number1-number2));
    }
    else if (operation == "*"){
        document.write(number1+" "+operation+" "+number2+" = "+(number1*number2));
    }
    else if (operation == "/"){
        document.write(number1+" "+operation+" "+number2+" = "+(number1/number2));
    }
    else if (operation == "%"){
        document.write(number1+" "+operation+" "+number2+" = "+(number1%number2));
    }

}
Calculator(10,2,"+");


// 5. Write a function that squares its argument.
function Square(num){
    document.write("The Square of "+num+" is "+num**2);
}
Square(5);


// 6. Write a function that computes factorial of a number.
function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
var n=5
answer = factorial(n)
document.write("The factorial of " + n + " is " + answer);




// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
function Counting(start_point, end_point){
    for( var i=start_point; i<=end_point; i++){
        document.write(i+"<br>");
    }
}
Counting(1,10);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
function calculateSquare(value){
    return value**2
}
function calculateHypotenuse(base,perpendicular){
    hypotenuse = calculateSquare(base)+ calculateSquare(perpendicular);
    document.write("Hypotenuse is: "+hypotenuse);
}
calculateHypotenuse(15,5);

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
function area(width,height){
    var rect_area=width*height;
    document.write("Area of rectangle is: "+rect_area+"<br>");
}
a=5;
b=5;
area(a,b);
area(5,5);



// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
function check_Palindrome(str_entry){
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
        if(cstr==="") {
            document.write("Nothing found!");
            return false;
        }
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
            if (cstr.length === 1) {
                document.write("Entry is a palindrome."+"<br>");
                return true;
            } else {
                ccount = (cstr.length - 1) / 2;
            }
        }
        for (var x = 0; x < ccount; x++) {
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                document.write("Entry is not a palindrome."+"<br>");
                return false;
            }
        }
        document.write("The entry is a palindrome."+"<br>");
        return true;
}
check_Palindrome('level');
check_Palindrome('fox');




// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function uppercase(str){
  var array1 = str.split(' ');
  var newarray1 = [];
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function find_longest_word(str){
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];
  for(var x = 1 ; x < array1.length ; x++){
        if(result.length < array1[x].length){
            result = array1[x];
        } 
    }
  document.write(result);
}
find_longest_word('Web Development Tutorial');

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function occurences(str,word){
    var count=0
    for(var m=0; m < str.length; m++){
        if(str[m]===word){
            count=count+1;
        }
   
    }
    document.write(count);
}
occurences('JSResourceS.com',"o");




// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
function calcCircunference(radius){
    circumference=2*3.142*radius;
    document.write("The circunference of circle is: "+circumference+"<br>");
}
function calcArea(radius){
    area=3.142*Math.pow(radius,2);
    document.write("The area of circle is: "+area);
}
calcCircunference(4);
calcArea(4);