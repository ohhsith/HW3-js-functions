console.log('------------- #4a')
function getSum (a ,b) {
    return a + b;
}
console.log(getSum(55, 37));



console.log('------------- #4b')
function getSubtraction (a ,b) {
    return a - b;
}
console.log(getSubtraction(55, 37));


console.log('------------- #4c')
function getMultiplication (a ,b) {
    return a * b;
}
console.log(getMultiplication(55, 37));



console.log('------------- #4d')
function getDivision (a ,b) {
    return a / b;
}
console.log(getDivision(55, 37));



console.log('------------- #5')
function getIncreaseTo(n) {
    
    for (let i=1; i<=n; i++) {
        console.log(i)
    } 
}
getIncreaseTo(5);


console.log('------------- #6')
function getDecreaseFrom(n) {
    
    for (let i=n; i>=1; i--) {
        console.log(i)
    }
    
}
getDecreaseFrom(5);


console.log('------------- #7')
function getPow(x,n) {
    
   let result= Math.pow(x , n);
    return result;
    
}
console.log(getPow(5,2));


console.log('------------- #8')
function isBigger(k, l) {
 if (k > l) {
    return (true);
    }  

  else {
    return (false); 
    }
}
console.log(isBigger(5, -1));


console.log('------------- #9')
function isSmaller(k, l) {
    return k<l ? true : false;
   }
console.log(isSmaller(5, -1));
