function fizzBuzz(num) {

   
    if(num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz'
    } else if (num % 3 == 0 && num % 5 == 0 || num.includes("3") && num.includes("5")){
        return 'FizzBuzz'  
    } else if (num % 3 == 0){
        return 'Fizz'
    } else if (num % 5 == 0){
        return 'Buzz'
    }  else if (num % 3 == 0 || num.includes("3")){
        return 'Fizz'
    } else if (num % 5 == 0 || num.includes("5")){
        return 'Buzz'
    }

    return num
}
module.exports = fizzBuzz;