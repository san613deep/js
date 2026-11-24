const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        
        color += hex[math.floor(math.random() * 16)];
    }

    return color;
};

let intervalId = null;

const startChangingColor = function () {

    if (intervalId === null) {

        intervalId = setInterval(changeBgColor, 1000);

    }

};

function changeBgColor() {

    const newColor = randomColor();

    document.body.style.backgroundColor = newColor;

    document.querySelector('#colorCode').textContent =
        'Current Color: ' + newColor;

}

const stopChangingColor = function () {

    clearInterval(intervalId);

    intervalId = null;

};