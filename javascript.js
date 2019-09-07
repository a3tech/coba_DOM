/*function faktorial(n){
    if(n == 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));*/

//Perulangan forEach dan map
/*var array = [1,2,3];
array.forEach(function(asu){
console.log(asu*2);
});
var array = [1,2,3];
array.map(function(asu){
console.log(asu*2);
});*/

//Membuat Object Literal
/*var mhs = {
nama : "Annas Al Amin",
nim : "16.12.9118",
ipk : [3.97,4.00,4.00,4.00,4.00,4.00]
}*/

//Membuat Object Function Declaration
/*function ObjekMhs(nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs = ObjekMhs("Annas Al Amin", "16.12.9118", "annas.am@students.amikom.ac.id", "Sistem Informasi");
*/

//Membuat Object Dengan Constructor
/*function Mahasiswa(nama, nim){
    this.nama = nama;
    this.nim = nim;
}

var mhs = new Mahasiswa("Annas", "9118");
*/

//Latihan Object dengan contoh kasus pengelolaan angkot dan penumpang
/*function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    this.penumpangNaik = function(nama){
    this.penumpang.push(nama);
    return this.penumpang;
    }
    this.penumpangTurun = function(nama, ongkos){
        if(this.penumpang.length === 0){
            alert("Penumpang Masih Kosong !");
            return false;   
        }
        for(var i=0;i<this.penumpang.length; i++){
            if(this.penumpang[i] == nama){
                this.penumpang[i] = undefined;
                this.kas+=ongkos;
                return this.penumpang;
            }else if(this.penumpang[i] != nama ){
                alert("Nama Penumpang Tidak Ditemukan !");
                return false;   
            }
        }
        }
}
var angkot1 = new Angkot("Samidi", ["Jogja", "Solo"], [], 0);*/

//DOM SELECTION 
//document.getElementById() -> element  
/*const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'black';
judul.innerHTML = 'Annas Al Amin';

//document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName('p');
for(let i=0;i<p.length;i++){
    p[i].style.backgroundColor = 'lightblue';
}
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '30px';

//document.getElementsByClassName()->HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'dimanipulasi dengan js';*/
//performa getElementById dan getElementByTagName mempunyai performa yg lebih baik.

//document.querySelector() ->element
/*const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'lightblue';
const p = document.querySelector('p');
p.innerHTML = 'diubah dengan js';

//document.querySelectorAll()->NodeList
//queryselector digunakan agar tidak merubah struktur html misalnya menambahkan id / class, tetapi dengan method ini dirubah melalui elemen dari html itu sendiri.
const w = document.querySelectorAll('p');
for(let i=0;i<w.length;i++){
    w[i].style.backgroundColor = 'orange';
}*/

//Mengubah node root (document)
/*const section4 = document.querySelector('section#b');
const p4 = section4.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'blue';*/

//method innerHTML
/*const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'wew';*/

//method setAttribute untuk menambahkan attribut pada elemen html
//method getAttribute untuk mengambil isi attribut di elemen html
//method removeAttribute untuk menghapus attribute dari elemen html
/*const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'Annas');
const a = document.querySelector('section#a a');*/


//const p2 = document.querySelector('.p2');
//p2.classList.add('label'); untuk menambahkan class baru pada elemen html
//p2.classList.remove('label');untuk menghapus class label
//p2.classList.toggle('label'); untuk menambahkan class label pada elemen jika kosong, jika ada akan menghapus class label.
//p2.classList.item(2); untuk mencari nama class ke 2 yg dimulai dari 0 dari elemen html
//p2.classList.contains('p2'); untuk mencari nama kelas p2 apakah ada di elemen html atau tidak
//p2.classList.replace('p2','p3'); untuk mengganti nama kelas p2 dengan nama p3 pada elemen html

//DOM Manipulation Node

const p4 = document.createElement('p'); //untuk membuat elemen baru p
const textp4 = document.createTextNode('Paragrah 4'); //untuk membuat kalimat Paragraf 4
p4.appendChild(textp4);// untuk menambahkan text dari variabel textp4 kedalam elemen baru p
const sectionA = document.getElementById('a');
sectionA.appendChild(p4); //untuk menyimpan elemen baru p kedalam elemen yang mempunyai id bernama a pada akhir elemen

/*
const li = document.createElement('li');
const textli = document.createTextNode('Item Baru');
li.appendChild(textli);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(li,li2); untuk menambahkan elemen li baru pada ul yang ditambahkan pada baris ke 2
*/
/*
const link = document.getElementsByTagName('a')[0];
const sectionA = document.querySelector('section#a');
sectionA.removeChild(link); untuk menghapus elemen a yg berada di elemen section dengan nama id a
*/
/*
const sectionB = document.querySelector('section#b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const textBaru = document.createTextNode('Judul Baru');
h2Baru.appendChild(textBaru);
sectionB.replaceChild(h2Baru, p4); untuk mengganti elemen p dengan h2 yg berada di elemen section dengan nama id b
h2Baru.style.backgroundColor = 'lightgreen';
*/
 /*
 contoh penggunaan eventhandler menggunakan onclick
const p3 = document.querySelector('.p3');
function ubahWarna(){
    p3.style.backgroundColor = 'lightblue';
}
function ubahWarna1(){
    p2.style.backgroundColor = 'lightblue';
}
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna1;
*/

/*
contoh penggunaan addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click',function(){
    const ul = document.querySelector('section#b ul');
    const li = document.createElement('li');
    const textli = document.createTextNode('Item Baru');
    li.appendChild(textli);
    ul.appendChild(li);
});
*/


/* Perbedaan eventHandler dengan eventListener
const p3 = document.querySelector('.p3');
p3.onclick = function(){
    p3.style.backgroundColor = 'lightblue';
}
p3.onclick = function(){
    p3.style.color = 'red';
}jika eventHandler terdapat 2 event maka yang event pertama tertimpa event ke 2

const p2 = document.querySelector('.p2');
p2.addEventListener('click',function(){
    p2.style.backgroundColor = 'blue';
})
p2.addEventListener('click',function(){
    p2.style.color = 'white';
}) sedangkan pada event listener jika terdapat 2 event maka kedua event digabung
*/


/*event mouse 
const p1 = document.querySelector('.p1');
p1.addEventListener('dblclick',function(){
    p1.style.backgroundColor = 'blue';
})
const p2 = document.querySelector('.p2');
p2.addEventListener('mouseenter',function(){
    p2.style.backgroundColor = 'lightblue';
})
p2.addEventListener('mouseleave',function(){
    p2.style.backgroundColor = 'white';
})*/

