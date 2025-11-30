/* In order for us to cause a function to continue or break when we are looping the function, we use "continue" and "break" statements. */


//Continue 
/*We are telling the program to continue printing the digits and skip over the iteration of the "-" with strict equality. So the instead of printing "-", 
the program skips over it on to the next iterable variable, and prints that variable.*/
let phoneNumber = "269-391-3633";
for (let digit of phoneNumber) {
    if (digit ==="-") continue;
console.log(digit);
};

//Output
2
6
9
3
9
1
3
6
3
3

//Break
/*The program is being instructed to break the iteration process and print, if a strict equality "-" comes to exist.*/
let phoneNumber = "269-391-3633";
for (let digit of phoneNumber) {
    if (digit ==="-") break;
console.log(digit);
};

//Output
2
6
9
