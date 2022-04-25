$header = document.querySelector('header');
$body = document.querySelector('body');

let $cv = document.querySelector('.cv');
let $btnCloseCv = document.querySelector('.btn_close_cv');
let $btnOpenCv = document.querySelector('.btn_open_cv')


$btnOpenCv.addEventListener('click', function(){
    $cv.classList.remove('is-hidden');
    $header.classList.add('opaque');
    $body.classList.add('opaque');
    $cv.style.opacity ="";
})
$btnCloseCv.addEventListener('click', function(){
    $cv.classList.add('is-hidden');
    $header.classList.remove('opaque');
    $body.classList.remove('opaque');
})