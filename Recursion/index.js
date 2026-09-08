// Sum of N Numbers in Recurison

// Linear Recursion one function does only a single call
function Sum(n){
    if (n == 0 ){
        return 0; // base case
    }

   return Sum(n-1) + n;  // recursive case
}

let result
// result = Sum(5);

// console.log(result);

function Power (x , n){
    if (n == 1 ){
        return x;
    }

   return Power(x, n-1) * x;
}


// result = Power(5, 5);


function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    return factorial(n-1) * n;
}
result = factorial(5)
console.log(result);




// Sum of N Numbers in Recurison
