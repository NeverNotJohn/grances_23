function one() {
    document.body.style.height = '300vh';

    var nav = document.getElementById('nav');
    nav.classList.add('visible');

    // Play music
    var music = document.getElementById('it');
    music.play();

    // Delete Self
    var but = document.getElementById('but1');
    but.remove();
}