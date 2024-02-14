// Problem 1
function calculateMoney(ticketNum){
    if(ticketNum < 0){
        return 'Invalid Number'
    }
    else{
        const ticketPrize = ticketNum * 120
        const expense = 500 + (8*50)
        return ticketPrize - expense
    }
}

// Problem 2
function checkName1(name){
    if(typeof name !== 'string'){
        return 'invalid'
    }
    else{
        const lastLetter = (name[name.length - 1]).toLowerCase();
        if(lastLetter === 'a' || lastLetter === 'e' || lastLetter === 'i' || lastLetter === 'o' || lastLetter ==='u' || lastLetter === 'y' || lastLetter ==='w'){
            return 'Good Name'
        }
        else{
            return 'Bad Name'
        }
    }
}


//Problem 3
function deleteInvalids(arr){
    if(!Array.isArray(arr)){
        return 'Invalid Array'
    }
    else{
        let newArr = [];
        for(let i=0; i<arr.length; i++){
            if(arr[i]){
                if(typeof arr[i] === 'number'){
                    newArr.push(arr[i])
                }
            }
        }
        return newArr;
    }
}



//Problem 4
function password(obj){
    if(obj.name && obj.birthYear && obj.siteName){
        if(obj.birthYear.toString().length === 4){
            const modifiedSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
            const result = `${modifiedSiteName}#${obj.name}@${obj.birthYear} `
            return result
        }
        else{
            return 'invalid'
        }
    }
    else{
        return 'invalid'
    }
} 


//Problem 5
function monthlySavings(paymentArr, livingCostNum){
    if((!Array.isArray(paymentArr)) || (typeof livingCostNum !== 'number')){
        return 'invalid input'
    }
    else{
        var totalIncome = 0
        for(let i = 0; i < paymentArr.length; i++){
            if(paymentArr[i] >= 3000){
                let afterTax = (paymentArr[i] * 80) / 100;
                totalIncome += afterTax;
            }
            else{
                totalIncome += paymentArr[i];
            }
        }
        const savings = totalIncome - livingCostNum;
        if(savings <= 0){
            return 'earn more'
        }
        else{
            return savings
        }
    }    
}
