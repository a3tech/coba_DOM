const z = document.getElementById('ubahWarna');
z.addEventListener('click', function(){
    const r = Math.round(Math.random()*255+1);
    const g = Math.round(Math.random()*255+1);
    const b = Math.round(Math.random()*255+1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

const smerah = document.querySelector('input[name=smerah]');
const shijau = document.querySelector('input[name=shijau]');
const sbiru = document.querySelector('input[name=sbiru]');
smerah.addEventListener('input',function(){
    const r = smerah.value;
    const g = shijau.value;
    const b = sbiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
sbiru.addEventListener('input',function(){
    const r = smerah.value;
    const g = shijau.value;
    const b = sbiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
shijau.addEventListener('input',function(){
    const r = smerah.value;
    const g = shijau.value;
    const b = sbiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

document.body.addEventListener('mousemove',function(event){
    const xPos = Math.round((event.clientX / window.innerWidth)*255);
    const yPos = Math.round((event.clientY / window.innerWidth)*255);
    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)'
})


