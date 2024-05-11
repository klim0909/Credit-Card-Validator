document.querySelector(".innogrn-form-widget").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем стандартное действие отправки формы
    
    const cardNumber = document.querySelector(".input").value;
    if (luhnCheck(cardNumber)) {
        console.log(getCardType(cardNumber));
        color(cardNumber);
    } 
    else {
        console.log("Ошибка: Неправильный номер карты.");
    }
});
 
function color(cardNumber) {
    let imgList = document.querySelectorAll("img");

    imgList.forEach(function(img) {
        let cardClass = getCardType(cardNumber).replace(/\s/g, ''); // Удаляем пробелы из названия карты для класса
        let cardElement = document.querySelector(`.${cardClass}`);

        if (cardElement) {
            cardElement.classList.remove("del");
        }

        if (cardElement !== img) {
            img.classList.add("del");
        }
    });
}

function luhnCheck(cardNumber) {
    const number = cardNumber.toString();
    const digits = number.replace(/\D/g, '').split('').map(Number);
    let sum = 0;
    let isSecond = false;
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];
        if (isSecond) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        isSecond = !isSecond;
    }
    return sum % 10 === 0;
}
  
export function getCardType(cardNumber) {
    const visaPattern = /^4/;
    const mirPattern = /^(2200|2204)/; 
    const mastercardPattern = /^5[1-5]|^2(?:2(?:[2-9][2-9]|2[3-9])|7[01])/;
    const discoverPattern = /^6(?:011|4[4-9]|5)/;
    const amexPattern = /^3[47]/;
  
    if (visaPattern.test(cardNumber)) {
        return "viza";
    } else if (mirPattern.test(cardNumber)) {
        return "Mir";
    } else if (mastercardPattern.test(cardNumber)) {
        return "mastercard";
    } else if (discoverPattern.test(cardNumber)) {
        return "Discover";
    } else if (amexPattern.test(cardNumber)) {
        return "American";
    } else {
        return "Неизвестно";
    }
}


document.querySelector(".submit-reset").onclick = function(e) {
    window.location.reload();
  }