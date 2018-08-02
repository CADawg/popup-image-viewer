const closeViewer = function(){
    let overlay = document.getElementsByClassName('overlay')[0],
        window = document.getElementsByClassName('window')[0];

    overlay.classList.remove('show');
    window.classList.remove('show');

    setTimeout(function(){
        overlay.parentNode.removeChild(overlay);
        window.parentNode.removeChild(window);
    }, 200);
}

const imageViewer = function(){
    let overlay = document.createElement('div'),
        window = document.createElement('div'),
        img = document.createElement('img'),
        hint = document.createElement('span');

    overlay.classList.add('overlay');
    window.classList.add('window');

    img.src = this.style.backgroundImage.slice(4, -1).replace(/"/g, '');
    hint.className = 'description';
    hint.appendChild(document.createTextNode('Click / Tap outside of the image to close the preview.'));

    window.appendChild(img);
    window.appendChild(hint);

    document.getElementsByClassName('viewer')[0].appendChild(overlay);
    document.getElementsByClassName('viewer')[0].appendChild(window);

    overlay.addEventListener('click', closeViewer);

    setTimeout(function(){
        overlay.classList.add('show');
        window.classList.add('show');
    }, 10);
}

let images = document.querySelectorAll('.view');
images.forEach(function(img){
    img.addEventListener('click', imageViewer); 
});