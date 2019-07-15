module.exports = {
    getRandomInt,
    makeLorem,
    makeId,
    getTodayAsInputVal,
    createSortFuncTxt,
    getRandomColors

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeId(length=5) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function makeLorem(length) {

    var randStr = '';
    while (randStr.length < length) {
        var wordLength = getRandomInt(3, 6);
        var word = createWord(wordLength);

        if (Math.random() > 0.9) word += ',';

        randStr += word + ' ';
    }
    randStr = randStr.substring(0, length);
    randStr = randStr[0].toUpperCase() + randStr.substr(1)

    return randStr;
}

function getRandChar() {
    var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
    var randIndex = parseInt(Math.random() * LETTERS.length)
    return LETTERS.charAt(randIndex);
}

function createWord(length) {
    var word = '';
    while (word.length < length) {
        var randChar = getRandChar();
        word += randChar;
    }

    return word;
}

function getTodayAsInputVal() {
        var local = new Date();
        local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
        return local.toJSON().slice(0,10);
}

function createSortFuncTxt(txt,op) {
    function sorting(a,b) {
        if (op === 'up') {
            if (a[txt] > b[txt]) {
                return 1;
            } else if (a[txt] < b[txt]) {
                return -1;
            } else {
                return 0;
            }    
        } else {
            if (a[txt] < b[txt]) {
                return 1;
            } else if (a[txt] > b[txt]) {
                return -1;
            } else {
                return 0;
            }    
        } 
    }
    return sorting;
}

function getRandomColors(length) {
    const colors = [];
    while (colors.length < length) {
        colors.push(getRandomColor());
    }

    return colors;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


