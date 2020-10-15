let a: number = 60;
let b: number = 20;
let c: number = 20;



let d: number;

if (a==b && b==c)
        {
            d = 3;
        }

        else if (a==c)
        {
            d = 2;
        }
        else if (a==b)
        {
            d = 2;
        }
        else if (c==b)
        {
            d = 2;
        }
        else
        {
            d = 0;
        }
       
 console.log("Number of same numbers: " + d);              

        

