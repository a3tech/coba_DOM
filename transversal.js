//DOM Traversal
//digunakan untuk menelusuri sebuah elemen berdasarkan elemen induk atau parentnya
/* CARA 1 :
const close = document.querySelectorAll('.close');
const card= document.querySelectorAll('.card');
for(let i=0;i<close.length;i++){
    close[i].addEventListener('click',function(e){
      //  close[i].parentElement.style.display='none';
     e.target.style.display = 'none';
    })}
    const a = document.querySelector('.nama');
//console.log(a.parentElement);
//console.log(a.parentElement.parentElement);
//console.log(a.nextSibling);
//console.log(a.nextElementSibling);
console.log(a.nextElementSibling.nextElementSibling);

  CARA 2 :
   const close = document.querySelectorAll('.close');
   close.forEach(function(e){
       e.addEventListener('click',function(evt){
        evt.target.parentElement.style.display='none';
       })
   })

   */
//Prevent Default untuk mencegah aksi default dari elemen html
/*
const close = document.querySelectorAll('.close');
close.forEach(function(e){
    e.addEventListener('click',function(evt){
     evt.target.parentElement.style.display='none';
     evt.preventDefault(); untuk menghentikan aksi defaul dari element html
    })
})*/




/*
Bubbling untuk menjalankan event dari elemen html dan event dari parent element
event untuk class close yang mempunyai parent card
const close = document.querySelectorAll('.close');
close.forEach(function(e){
    e.addEventListener('click',function(evt){
     evt.target.parentElement.style.display='none';
     evt.preventDefault(); 
     evt.stopPropagation(); untuk menghentikan event yg berada pada elemen parent
    });
});
Event untuk parent class card
const cards = document.querySelectorAll('.card');
cards.forEach(function(card){
    card.addEventListener('click',function(e){
     alert('ok');
    });
});*/
/*
//dengan parent class lebih baik untuk menerapkan event yg berada pada setiap elemen didalamnya
const container = document.querySelector('.container');
container.addEventListener('click',function(e){
    if(e.target.className == 'close' ){
        e.target.parentElement.style.display = 'none';
    }
})*/
