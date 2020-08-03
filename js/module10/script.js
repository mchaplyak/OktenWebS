function userCard(number) {
    let cardOptions = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    }

    function getCardOptions() {
        return cardOptions;
    }

    function putCredits(money) {
        return cardOptions.balance += money;
    }

    function takeCredits(money) {
        if (cardOptions.transactionLimit >= money && cardOptions.balance >= money) {
        return cardOptions.balance -= money;} else {
            console.error('No Money!!')
        }
    }

    function setTransactionLimit(limitOfTransaction) {
        return cardOptions.transactionLimit = limitOfTransaction;
    }

    function transferCredits(money, cardName) {
        takeCredits(money)
        if (cardOptions.transactionLimit >= money && cardOptions.balance >= money) {
            return cardName.cardOptions.balance += money + (money * 0.05) } else {
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
            return this.cards.push(nameOfCard)} else {
                console.error('Ваш ліміт на кількість карт перевищенно!')
            }
        }
        this.getCardByKey = function (cardNumber) {
            //??? як тут заретурнити карту?? \ Наскільки я поняв, проітерувати обєкт, і якщо ключ рівний значенню, то повернути його.
        }
    }
}