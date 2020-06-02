/*SECTION 1
Answer:
1.  The DRY acronym stands for Don't Repeat Yourself.  It is a principal of software development that is meant to reduce repetiton in your code. It is a very important principal to 
understand. DRY is a way reduce complexity by dividing systems into components. We should pay attention to it because it is a principal of software development,
our employers, supervisors, and peers will expect us to have working knowledge of this concept and use it. We have learned loops to assist with keeping our code DRY. 

2.  The Variables that we learned about this week were const, let, and var they are all variable, but one of the three is outdated and not popularly used.
The outdated variable is variable it is not to be used. The variable const means constant and the variable value doesn't change. The variable let has a value
that is changeable.

SECTION 2
Boolean expressions ...and variable assignments
Code:*//*

const a = 4;
const b = 53;
if (a != b) {
console.log("true")
}
//ran code - output = true  using != not equal 

const c = 57;
const d = 16;
if (c > d) {
    console.log("true")
}
//ran code - output = true  using > greater than *//*
const Name = 0;
if (Name === Name) {
    console.log("true")
}
//ran code - output = true using === is equal to *//*
const a = 4;
const b = 53;
const c = 57;
if (a + b + c > 100) {
    console.log("true")
}
//ran code - output = true > greater than *//*
const e = 'Kelvin';
if (e != 'Kevin'){
    console.log("true")
}
//ran code - got error - fixed error (forgot ' ' around Kelvin) - got output = true using != not equal*//*
let h = 48;
if (h == '48') {
    console.log("true")
}
/*ran code - did not produce true using != ?? not sure why - changed to loosley equal to and it printed true - not happy with this output - as it should
have seen one as a number and one as text. *//*
const f = false;
const e = 'Kelvin';
if (f != e) {
    console.log("true")
} */
//ran code - output = true used != not equal 
/*
let g = 0; 
console.log(g)*/
//ran code - ouput = 0
/*
const b = 53;
const c = 57;
let g = (b + c); {
    console.log(g)
} 
//ran code - output = 110 

/*Answer:
I used const when the variable was provided and when it was in the assignment as const. I did use let a few times. Did not use var since it is outdated and should
not be used. 
I did not use a var in the code below and it produced output without error*//*
b = 52; {
    console.log(b)
}
*//*
10 = g; {
    console.log(10)
}*/
/*SyntaxError: Invalid left-hand side in assignment  - We were taught that you are not to use a number as a variable name. It is prohited in most programing languages.
The reason being that there needs to be a way to distingush numeric from constant. I looked up why, and learned without this rule it would make parsing complicated.*/
/*
//Bonus Challenge
const a = 4;
const b = 53;
const f =false;
const e = 'Kelvin';
const c = 57;
if (a < (b || f) ===(!f && e > c)) {
    console.log("true")
}
//SECTION 3
//While Loops
/*Answer:
Yes, this is an example of an infinite loop. Reason being the condition of the while loop is set to true and in the example code there isn't any statement 
or break to stop it from looping forever. 

Yes, this is an example of an infinte loop also. It does have the line of syntax that states runProgram = false; but that won't change the declaration of 
const runProgram = true. it would need to have let runProgram = true to be mutable. It will print out Do not run this loop for ever. 

Reading Code
Code:*/

/*let letters = "A";
let i = 0;
// start a while loop that will run as long as i is less than 20
while (i < 20) {
	letters += "A";
	i++;
//prints the letters acsending A to T which is the 20th letter of the alphabet then closed the loop since the condition is met
}
console.log(letters);
/*PSCBUS-109:w1d02 pscbus_109$ node first_js_homework.js 
AAAAAAAAAAAAAAAAAAAAA
I thought is would print out ascending letters, it only printed out 20 As. I was also wondering why the console.log is outside of the curly braces. 
Should it be inside?*//*
let letters = "A";
let i = 0;
// start a while loop that will run as long as i is less than 20
while (i < 20) {
	letters += "A";
	i++;
//prints the letters acsending A to T which is the 20th letter of the alphabet then closed the loop since the condition is met
console.log(letters);
}
/*okay, I had to try it inside the curly braces and I got this 20 lines of As starting with two and adding 1 until the lines of As reached 20 
PSCBUS-109:w1d02 pscbus_109$ node first_js_homework.js 
AA
AAA
AAAA
AAAAA
AAAAAA
AAAAAAA
AAAAAAAA
AAAAAAAAA
AAAAAAAAAA
AAAAAAAAAAA
AAAAAAAAAAAA
AAAAAAAAAAAAA
AAAAAAAAAAAAAA
AAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAA

SECTION 4
For Loops
Answer: They are similar in they both automate a repetative action, they both repeate the same code multiple times with out the need to type it over and over for loop is different from a while loop because a while loop will continue whith out being told as long as the condition is met and a for loop needs
to be given specific number of times to loop through the code.

for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
The three components of the control panel are statement 1 (i = 0) it sets the variable, then statement 2 (i < 100) it sets the condition, and finally statement 3 is what is out put after each time the code is executed in this case (Without you, today's emotions are the scurf of yesterday's)

for (let i = 0; i < 999; i++){
    console.log(i);
}
Backslash differences 

The "forward slash" (/) really just called slash is used for urls and as a divison operator. Backslashes are used to seperate directories, in programing they can be used
as \n = new line. 
In our homework, the backslash help with letting the ' print. You place a back slash before the ' and it will now print.  

For loop in reverse
Code:*/
for (let i = 0; i < 10; i--) {
    console.log(i);
}

/*having some issues with terminal PSCBUS-109:~ pscbus_109$ cd Desktop/
PSCBUS-109:Desktop pscbus_109$ cd w1d02
PSCBUS-109:w1d02 pscbus_109$ ls
answers.js              first_js_homework.js
PSCBUS-109:w1d02 pscbus_109$ code first_js_homework.js
bash: code: command not found
PSCBUS-109:w1d02 pscbus_109$ 

Got some assistance from Jose via Slack*/

for (let i = 0; i < 10; i--) {
    console.log(i);
}