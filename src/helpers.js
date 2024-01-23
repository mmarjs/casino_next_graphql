import moment from 'moment-timezone';

export const truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
}



export const formatError = (error) => {
    if(typeof error === "string"){
        return error;
    }
    let errorMsg = 'An unknown error occured';
    //console.log("formatError", error)
    if(error.response){
        //console.log("formatError response", error.response)
        if(error.response.data){
            //console.log("error.response.data", error.response.data)
            if(typeof error.response.data === "string"){
                errorMsg = error.response.data;
            }
            else if(error.response.data.errors){
                if(Array.isArray(error.response.data.errors)){
                    if(error.response.data.errors.length > 0){
                        if(error.response.data.errors[0].error){
                            errorMsg = error.response.data.errors[0].error;
                        }
                    }
                }
                else if(typeof error.response.data.errors === "string"){
                    errorMsg = error.response.data.errors;
                }
            }else if(error.response.data.message){
                if(typeof error.response.data.message === "string"){
                    errorMsg = error.response.data.message;
                }
            }
            
        }else if(error.response.statusText && typeof error.response.statusText === "string"){
            errorMsg = error.response.statusText;
        }
    }
    else if(error.message){
        if(typeof error.message === "string"){
            errorMsg = error.message
        }
    }

    return errorMsg;
}


export function getLocalDateTimeFromGmt(dateTime, format){
    //let dateTimeSting = `${moment(dateTime).format('YYYY-MM-DD HH:mm:ss')}`;
  
    //console.log("dateTimeSting", dateTimeSting)
    let gmtDateTime = moment.tz(dateTime, 'Greenwich');
    //console.log("gmtDateTime", gmtDateTime)
  
    let localDateTime = gmtDateTime.clone().tz(moment.tz.guess()).format(format?format:"DD MMM YYYY hh:mm A");
    //console.log("localDateTime", localDateTime)
    return localDateTime;
    
}

export const getObjectFromArrayByKeyValue = (array, field, value) => {
    
    /* Find the value of the first element/object in the array, otherwise undefined is returned. */
    let result = array.find(obj => {
        return obj[field] === value
    })

    return result;
}

export const checkPasswordStrength = (password) => {

                
    // Do not show anything when the length of password is zero.
    if (password.length < 6) {
        return 10
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    // Display it
    var strength = 0;
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = 10;
            break;
        case 3:
            strength = 60;
            break;
        case 4:
            strength = 100;
            break;
    }
    return strength
}


//get price from unit amount
export const getCurrencySymbol = (currencyName) => {
    var currencySymbols = {
        'usd': '$', // US Dollar
        'eur': '€', // Euro
        'crc': '₡', // Costa Rican Colón
        'gbp': '£', // British Pound Sterling
        'ils': '₪', // Israeli New Sheqel
        'inr': '₹', // Indian Rupee
        'jpy': '¥', // Japanese Yen
        'krw': '₩', // South Korean Won
        'ngn': '₦', // Nigerian Naira
        'php': '₱', // Philippine Peso
        'pln': 'zł', // Polish Zloty
        'pyg': '₲', // Paraguayan Guarani
        'thb': '฿', // Thai Baht
        'uah': '₴', // Ukrainian Hryvnia
        'vnd': '₫', // Vietnamese Dong
    };

    if(currencySymbols[currencyName]!==undefined) {
        return currencySymbols[currencyName.toLowerCase()];
    }
    else{
        return currencyName;
    }
}


export const getPriceFromUnitAmount = (unitAmount, currency) => {
    if(currency){
        return `${getCurrencySymbol(currency.toLowerCase())}${unitAmount/100}`
    }
    else{
        return `${unitAmount/100}`
    }
}
//end



export const getObjectsFromArrayByKeyValue = function(data, key, value){
    let newData = [...data];
    let newArray = newData.filter(function( item ) {
        if(item[key]){
            if(Array.isArray(item[key])){
                return item[key].includes(value)
            }else{
                return item[key] === value;
            }
        }
    });
    return newArray;
}