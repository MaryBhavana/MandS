var str = ["a","c","c","m","d","m","e","k","f","b","k"];
str = prompt("enter a string:");
let  = new Set(str);
console.log(...a);




var s="abcadeecfb";
function prCharWithFreq(s)
{
// Store all characters and
// their frequencies in dictionary
var d = new Map();   

s.split('').forEach(element => {
 
    if(d.has(element))
    {
        d.set(element, d.get(element)+1);
    }
    else
        d.set(element, 1);
});

// Print characters and their
// frequencies in same order
// of their appearance

s.split('').forEach(element => {
// Print only if this
// character is not printed
// before
if(d.has(element) && d.get(element)!=0)
{
  console.log( element + d.get(element) + " ");
  d.set(element, 0);
}
});
}
prCharWithFreq(s);
