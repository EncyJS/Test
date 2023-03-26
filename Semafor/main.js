function changeColor(color) {
    var lights = document.getElementsByClassName('light');

    for (var i = 0; i < lights.length; i++) {
        lights[i].style.backgroundColor = 'gray';
    }

    var selectedLight = document.querySelector('.' + color);
    selectedLight.style.backgroundColor = color;
}