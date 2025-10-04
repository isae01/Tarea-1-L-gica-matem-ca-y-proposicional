// function evaluateRisk (income, hasLoans, latePayments, isStudent) {
//     if (income < 20000 && latePayments >3 || hasLoans && isStudent) {
//         return 'High Risk';
//     }
//     else if (income >= 20000 && income < 50000 && latePayments <=2) {
//         return 'Medium Risk';
//     }
//     else {
//         return 'Low Risk';
//     }           
// };

// console.log(evaluateRisk(15000, true, 4, true));
// console.log(evaluateRisk(30000, false, 1, false));    
// console.log(evaluateRisk(60000, false, 0, false));  

// Ejercicio 2

function recommendProduct (age, isMember, purchaseHistory) {
    if (isMember && purchaseHistory.tech >=5 || age >=18 <=30 && purchaseHistory.fashion >=2) {
        return 'Recommend Tech Product';
    }
    else if (!isMember && (purchaseHistory.tech + purchaseHistory.fashion + purchaseHistory.other) <=3 || age >=25 <=40){
        return 'Recommend Fashion Product';
    }
    else {
        return 'Recommend Generic Product';
    }
}; 

console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 })); 

