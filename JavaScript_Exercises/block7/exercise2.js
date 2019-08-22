function addCurrency(coin, coin_value, coins_db){

    var currency_key = findcurrency(coin.coin, coins_db);

    if(currency_key !== false){

        coins_db[currency_key].amount += coin_value;

        var is_new = false;
        var message_to_return = tellConversion(is_new, coin, coin_value);

        return message_to_return;

    } else {

        coins_db.push({'coin': coin.coin, 'amount': coin_value, 'rate' : coin.rate});

        var is_new = true;
        var message_to_return = tellConversion(is_new, coin);

        return message_to_return;

    }
}

function findcurrency(coin_name, coins_db){

    for(var key in coins_db){

        if(coins_db[key].coin === coin_name){
            return key;
        }
    }

    return false;

}

function converter(coin_value, rate){

    return coin_value * rate;
    
}

function tellConversion(is_new, coin, coin_value = 0){

    if(is_new){

        var capitalized_coin_name = coin.coin.charAt(0).toUpperCase() + coin.coin.slice(1);

        return 'New coin ' + capitalized_coin_name + ' added to Database';

    } else {

        var pluralcoin = coin.coin + 's';
        var coin_converted_with_rate = converter(coin_value, coin.rate);

        return 'You will receive ' + coin_converted_with_rate + ' usd for your ' + coin_value + ' ' + pluralcoin;

    }
    
}
