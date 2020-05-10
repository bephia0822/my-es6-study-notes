let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    total += income;
}

console.log(total);
//204000     等於把它加起來
//但我們這裡要學的是把它分開
let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    console.log(income);
    total += income;
}
//62000
//67000
//75000

//另一個例子(有點極端ＸＤ)
let fullName = "Dylan Coding God Israel";


for (const char of fullName) {   //char好像是他亂掰的
    console.log(char);
}
//D
//y
//l
//a
//n
//C
//o
//d
//i
//n
//g
//G
//o
//d
//I
//s
//r
//a
//e
//l