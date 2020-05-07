//先說Array就是[]並以逗號隔開，且按順序排列，console.log的結果也會照順序

let [firstName] = ['Dylan', 'Coding God', 'Israel'];

console.log(firstName)
//Dylan

let [firstName, middleName] = ['Dylan', 'Coding God', 'Israel'];

console.log(firstName + middleName)
//DylanCoding God  雖然不是很漂亮但就是一個概念

let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

console.log(lastName)
//Israel

let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

lastName = 'Clements';

console.log(lastName)
//Clements   這就是Destructure 因為是用let，可以改變anytime 