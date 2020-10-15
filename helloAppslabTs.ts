let a: number = 7;
let b: number = 8;
let c: number = 12;

if (c<b||c<a)
{
    console.log("c has to be longest");
}
else if (a+b>c)
{
    console.log("triangle is possible");
}

else{
    console.log("triangle is impossible");
}