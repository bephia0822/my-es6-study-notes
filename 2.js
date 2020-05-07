//應該是教說重新命名之後會比較方便

const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

const {firstName, lastName} = personalInformation;

console.log(`${firstName} ${lastName}`);
//Dylan Israel

//改變一下簡稱（這個簡稱也要簡短好辨認）得到一樣的結果
const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);
//Dylan Israel