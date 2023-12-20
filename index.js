function one() {
    document.body.style.height = '300vh';

    var nav = document.getElementById('nav');
    nav.classList.add('visible');

    // Delete Self
    var but = document.getElementById('but1');
    but.remove();
}