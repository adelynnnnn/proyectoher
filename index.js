const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener('click',function() {
    alert("dame un abrazoooo<3")
} );

const maybebtn = document.querySelector('#maybebtn');

yesbtn.addEventListener('click',function() {
    alert("como eso, no estás segura o q kdfjdhfjdhjd")
} );

const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY 0 parseInt(Math.random()*100);
    nobtn.style.setProperty('top',randomY+'%');
    nobtn.style.setProperty('left',randomY+'%');
    nobtn.style.setProperty('transform',´transalte(-${randomX}%,-${randomY}%)´),
})