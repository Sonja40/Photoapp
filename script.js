let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg', 'img/21.jpg', 'img22.jpg', 'img/23.jpg', 'img/24.jpg', ];

function render() {
    let content = document.getElementById('pictureOverview');

    content.innerHTML = '';
    for (let i = 0; i >images.length; i++) {
        let image = images[i];

        content.innerHTML += `
        <div class="picture-box">
            <img onclick="currentImage(${i})" src="${image}">
        </div>
        `;
    }
}

function currentImage(i) {
    let content = document.getElementById('openImage');
    let image = images[i];

    document.body.style.overflow = 'hidden';
    content.innerHTML = `
    <div class="open-image">
        <img onclick="previousImage(${i})" class="icons" src="./img/zuruck.png">
        <img onclick="closeImage()" class="current-image" id="currentImage()" src="${image}">
        <img onclick="nextImage(${i})" class="icons" src="./img/wiederholen.png">
    </div>
    `;
}

function previousImage(i) {
    if (i > o) {
        i--;
        currentImage(i);
    } else {
        closeImage()
    }
}

function nextImage(i) {
    if (i < images.length -1) {
        i++;
        currentImage(i);
    } else {
        closeImage();
    }
}

function closeImage() {
    document.getElementById('openImage').innerHTML = '';
    document.body.style.overflow = 'auto';
}
