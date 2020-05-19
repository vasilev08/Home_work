var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD?");

var appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// var Answer1 = prompt('Введите обязательную статью расходов в этом месяце'),
//     Answer2 = prompt('Во сколько обойдется?'),
//     Answer3 = prompt('Введите обязательную статью расходов в этом месяце'),
//     Answer4 = prompt('Во сколько обойдется?');
    
// appData.expenses.Answer1 = Answer2;
// appData.expenses.Answer3 = Answer4;


// for (let i = 0; i < 2; i++) {
//     var Answer1 = prompt('Введите обязательную статью расходов в этом месяце'),
//         Answer2 = prompt('Во сколько обойдется?');
    
//     if ((typeof (Answer1) === 'string') && (typeof (Answer1) != null) && (typeof (Answer2) === 'string') && (typeof (Answer2) != null) && Answer1 != '' && Answer2 != '' && Answer1.length < 50) {
//         console.log('done');
//         appData.expenses[Answer1] = Answer2;   
//     }
//     else {
//         console.log('Answer error');
//         alert('Поля обязательны для заполнения, попробуйте еще раз.');
//         i--;
//   }
// };

let i = 0;

do {
    var Answer1 = prompt('Введите обязательную статью расходов в этом месяце'),
        Answer2 = prompt('Во сколько обойдется?');
    if ((typeof (Answer1) === 'string') && (typeof (Answer1) != null) && (typeof (Answer2) === 'string') && (typeof (Answer2) != null) && Answer1 != '' && Answer2 != '' && Answer1.length < 50) {
    appData.expenses[Answer1] = Answer2;
        i++;
    } else {
    console.log('Answer error');
        alert('Поля обязательны для заполнения, попробуйте еще раз.');
    }
} while (i < 2);

appData.moneyPerDay = appData.budjet / 30;


alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 1000) {
    console.log('Минимальный уровень дохода');
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень дохода');
} else if (appData.moneyPerDay > 2000) {
    console.log('Выоский уровень дохода');
} else {
    console.log('Error');
}

console.log((appData));