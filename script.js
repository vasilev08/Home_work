let time, money;


function start() {
    do {
        money = +prompt("Ваш бюджет на месяц?");
        } while (isNaN(money)|| (money == '') || (money == null));
        time = prompt("Введите дату в формате YYYY-MM-DD?");
}

start();

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let Answer1 = prompt('Введите обязательную статью расходов в этом месяце'),
                Answer2 = prompt('Во сколько обойдется?');
            
            if ((typeof (Answer1) === 'string') && (typeof (Answer1) != null) && (typeof (Answer2) === 'string') && (typeof (Answer2) != null) && Answer1 != '' && Answer2 != '' && Answer1.length < 50) {
                console.log('done');
                appData.expenses[Answer1] = Answer2;   
            }
            else {
                console.log('Answer error');
                alert('Поля обязательны для заполнения, попробуйте еще раз.');
                i--;
          }
        }
    },
    detectDayBudget: function () {appData.moneyPerDay = (appData.budjet / 30).toFixed(2);
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 1000) {
            console.log('Минимальный уровень дохода');
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень дохода');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Выоский уровень дохода');
        } else {
            console.log('Error');
        }
    },
    checkSavings: function () {
        {
            if (appData.savings == true) {
                let save = +prompt('Какова сумма накоплений?'),
                    percent = +prompt('Какой процент?');
                
                appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
                alert('Доход в месяц с депозита: ' + appData.monthIncome);
            }
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            Answer1 = prompt('Введите необязательную статью расходов в этом месяце');
            appData.optionalExpenses[i] = Answer1;
        }
    },
    chooseIncome: function () {
        let items;
        while ((typeof (items) != 'string') || (items == '') || (items === undefined) || (typeof(items) == null)) {
        items = prompt('Что принесет дополнительный доход? (Перечислите через зяпятую)');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
        function displayForEach(item, i) { 
            document.write('<br>' + ++i + ' : '+ item );
        };
        document.write('Способы доп. заработка: ');
        appData.income.forEach(displayForEach);
    }
};

function displayObjInConsole(arr) {
    for (let key in arr) {
        console.log(key +' :' + arr[key]);
    }
}

    console.log("Наша программа включает в себя данные: " + displayObjInConsole(appData));
