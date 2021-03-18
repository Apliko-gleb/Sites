var BlockMove1 = anime({
    targets: '.defictation-image',
    translateX: 150,
    easing: 'linear',
    autoplay: false,
    duration: 1500
});
var BlockMove2 = anime({
    targets: '.custom_block_corpus_img',
    translateX: 200,
    easing: 'linear',
    autoplay: false,
    duration: 1500
});
var BlockMove3 = anime({
    targets: '.custom_block_anchor_img',
    translateX: 150,
    easing: 'linear',
    autoplay: false,
    duration: 1500
});
var BlockMove4 = anime({
    targets: '.custom_block_system_img',
    translateX: 250,
    easing: 'linear',
    autoplay: false,
    duration: 1500
});
var BlockMove5 = anime({
    targets: '.methods_block_first',
    scale: 1.2,
    duration: 2000,
    autoplay: false
});
var BlockMove6 = anime({
    targets: '.methods_block_second',
    scale: 1.2,
    duration: 2000,
    autoplay: false
});
var BlockMove7 = anime({
    targets: '.methods_block_third',
    scale: 1.2,
    duration: 2000,
    autoplay: false
});
var BlockMove8 = anime({
    targets: '.prize_block_first',
    translateY: 350,
    easing: 'easeInOutQuad',
    autoplay: false,
    duration: 1500
});
document.ontouchmove = function(f) {
    BlockMove1.seek(window.pageYOffset * 7.85);
    BlockMove2.seek(window.pageYOffset * 1.85);
    BlockMove3.seek(window.pageYOffset * 1.05);
    BlockMove4.seek(window.pageYOffset * 0.55);
    BlockMove8.seek(window.pageYOffset * 0.2);

};


window.onscroll = function(e) {
    BlockMove1.seek(window.pageYOffset * 7.85);
    BlockMove2.seek(window.pageYOffset * 1.85);
    BlockMove3.seek(window.pageYOffset * 1.05);
    BlockMove4.seek(window.pageYOffset * 0.55);
    BlockMove8.seek(window.pageYOffset * 0.2);

};
document.querySelector('.methods_block_first').onclick = BlockMove5.restart;
document.querySelector('.methods_block_second').onclick = BlockMove6.restart;
document.querySelector('.methods_block_third').onclick = BlockMove7.restart;