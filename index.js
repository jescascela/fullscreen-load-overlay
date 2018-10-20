var spanTag = document.querySelector('span');
var btn = document.querySelector('button');
var counter = spanTag.textContent;

function showLoadScreen() {
    var overlay = document.querySelector('#overlay');
    overlay.style.display = 'block';
}

function hideLoadScreen() {
    var overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
}

function incrementNumber() {

    if(counter < 5) {
        counter++;
        spanTag.textContent = counter;
    } else {
        hideLoadScreen();
    }
}

btn.addEventListener('click', function(){
    showLoadScreen();
    setInterval(incrementNumber, 1000);
});
