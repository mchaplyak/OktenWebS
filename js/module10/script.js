function userCard(number) {
    let cardOptions = {
        balance: 100.0,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    }
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();

    function getCardOptions() {
        return cardOptions;
    }

    function putCredits(money) {
        cardOptions.historyLogs.push({
            operationType: 'Received credits',
            credits: money,
            operationTime: `${date}, ${time}`
        })
        return cardOptions.balance += money;
    }

    function takeCredits(money) {
        cardOptions.historyLogs.push({
            operationType: 'Withdrawal of credits',
            credits: money,
            operationTime: `${date}, ${time}`
        })
        if (cardOptions.transactionLimit >= money && cardOptions.balance >= money) {
        return cardOptions.balance -= money
        } else {
            console.error('No Money!!')
        }
    }

    function setTransactionLimit(limitOfTransaction) {
        cardOptions.historyLogs.push({
            operationType: 'Transaction limit change',
            credits: limitOfTransaction,
            operationTime: `${date}, ${time}`
        })
        return cardOptions.transactionLimit = limitOfTransaction;
    }

    function transferCredits(money, cardName) {
        takeCredits(money)
        if (cardOptions.transactionLimit >= money && cardOptions.balance >= money) {
            return cardName.putCredits(money - (money * (0.5/100))); // Беремо відсоток від суми переказу (можливо можна простіше?)

        } else {
            console.error('No Money!!')
        }
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.addCards = function (nameOfCard) {
            if (this.cards.length < 3) {
                for (let i = this.cards.length+1; i < this.cards.length; i++) {
                    userCard([i])
                }
                return this.cards.push(nameOfCard)
            } else {
                console.error('Ваш ліміт на кількість карт перевищенно!')
            }
        }
        this.getCardByKey = function (cardNumber) {
           return userCard(cardNumber)
        }
    }
}

let max = new UserAccount('Max');

max.addCards('Monobank')
max.addCards('PrivatBank')
max.addCards('OschadBank')

console.log(max);

let card1 = max.getCardByKey(1);
let card2 = max.getCardByKey(2);
let card3 = max.getCardByKey(3);

card1.putCredits(5000);
card1.setTransactionLimit(5000);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
console.log(card3.getCardOptions());
console.log('__________________________')

card1.transferCredits(450,card2)

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
console.log(card3.getCardOptions());
console.log('__________________________')

card2.setTransactionLimit(500);
card2.takeCredits(250);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
console.log(card3.getCardOptions());
console.log('__________________________')


