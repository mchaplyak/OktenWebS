function userCard(number) {
    let cardOptions = {
        balance: 100,
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
            return cardName.cardOptions.balance += money + (money * 0.05)
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


let card1 = userCard(1);

card1.putCredits(5000);

card1.setTransactionLimit(10000);

card1.takeCredits(200);

console.log(card1.getCardOptions());


class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.addCards = function (nameOfCard) {
            if (this.cards.length < 3) {
            return this.cards.push(nameOfCard)
            } else {
                console.error('Ваш ліміт на кількість карт перевищенно!')
            }
        }
        this.getCardByKey = function (cardNumber) {
            //??? як тут заретурнити карту?? \ Наскільки я поняв, проітерувати обєкт, і якщо ключ рівний значенню, то повернути його.
        }
    }
}