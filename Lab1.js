
//Exercise 1 

function 
capitalLetter(str){

var splitStr = str.toLowerCase().split(' ');

console.log(splitStr);

var result = [];

for (var i=0; i < splitStr.length; i++) {

var word = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

result.push(word)

}

console.log(result);

return result.join(' ');
}

console.log(capitalLetter('the quick brown fox'));

//2 maxNum function (x,y,z) {

function maxNum (x,y,z) {

    max_val = 0;
    if (x > y) {
    max_val = x;
} else {
    max_val= y;
} 
if (z > max_val) {
    max_val = z;
}   
return max_val;
}

console.log(maxNum(1,5,10));

//3 str.splice()

function right_three(str) {
    if (str.length > 1) {
        return str.slice(-3)+str.slice(0,-3);
}

return str;

}

console.log(right_three("Python"));

console.log(right_three("JavaScript"));

console.log(right_three("Hi"));

//4

function 
angle_Type(angle) {
    if(angle < 90) {
        return "Acute angle.";
}

    if (angle === 90) {
        return "Right angle.";
}

    if(angle <180) {
        return "Obtuse angle.";
}
return "Straight angle.";
}

console.log(angle_Type(47))

console.log(angle_Type(90))

console.log(angle_Type(145))

console.log(angle_Type(180))