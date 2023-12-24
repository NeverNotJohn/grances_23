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
    var scroll = document.getElementById('scroll');
    scroll.remove();

    // Add new page
    var page2 = document.getElementById('page2');
    page2.classList.add('visible');
}

function final() {
    // Delete Main
    var main = document.getElementById('main');
    main.remove();


    // Make final visible
    var end = document.getElementById('end');
    end.classList.remove('invisible');
    end.classList.add('visible');
    document.body.style.height = '100vh';
}