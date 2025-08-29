document.getElementById('fa-btn').addEventListener('click', () => {
    document.getElementById('about-fa').style.display = 'block';
    document.getElementById('about-en').style.display = 'none';
    document.getElementById('title-fa').style.display = 'block';
    document.getElementById('title-en').style.display = 'none';

    document.getElementById('gift-fa').style.display = 'block';
    document.getElementById('gift-en').style.display = 'none';

});

document.getElementById('en-btn').addEventListener('click', () => {
    document.getElementById('about-fa').style.display = 'none';
    document.getElementById('about-en').style.display = 'block';
    document.getElementById('title-fa').style.display = 'none';
    document.getElementById('title-en').style.display = 'block';

    document.getElementById('gift-fa').style.display = 'none';
    document.getElementById('gift-en').style.display = 'block';

});


document.getElementById('fa-btn').addEventListener('click', () => {
    document.getElementById('gift-fa').style.display = 'block';
    document.getElementById('gift-en').style.display = 'none';
});

document.getElementById('en-btn').addEventListener('click', () => {
    document.getElementById('gift-fa').style.display = 'none';
    document.getElementById('gift-en').style.display = 'block';
});
