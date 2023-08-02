//ALGORITMA ==> KERANGKA BERPIKIR SISTEMATIS SECARA LOGIS UNTUK MENYELESAIKAN MASALAH

// let Inputan = prompt("masukan nilai");
// if(angka<0){
//     document.write("negatif");
// }else if(angka>0){
//     document.write("positif");
// }else if(angka=0){
//     document.write("netral");
// }else{
//     document.write("netral");
// }


// let sumbuX = prompt("masukan sumbu x : ");
// let sumbuY = prompt("masukan sumbu y : ");

// if(sumbuX > 0 && sumbuY > 0){
//     document.write("player di kanan atas")
// }else if(sumbuX < 0 && sumbuY < 0){
//     document.write("player di kiri atas")
// }else if(sumbuX > 0 && sumbuY < 0){
//     document.write("player di kanan bawah")
// }else if(sumbuX < 0 && sumbuY > 0 ){
//     document.write("player di kiri bawah")
// }
// document.write("Soal nomor 1 <br>")
// for(let i = 1; i<=20; i++){
//     document.write("I'm Steve <br>")
// }

// console.log("soal nomor 2")
// for(let i = 1; i<=20; i++){
//     console.log(i);
// }
// console.log("soal nomor 3")
// for(let i = 1; i<=20; i++){
//     console.log(i*5);
// }
// console.log("soal genap")
// for(let i = 0; i<=5; i++){
//     console.log(i*2)
// }
// console.log("soal ganjil")
// for(let i = 0; i<=20; i++){
//     console.log(i += 1)
// }

// let inputan1 = prompt("masukan nilai pertama : ");
// let inputan  = prompt("masukan jumlah lemparan  ");

// for(let i = 1; i<=inputan; i++){
    
//     let nilai = [2,4,6,8,10,12]
// let dadu = Math.floor(Math.random()*6+1);

// switch (dadu) {
//     case 1:
//         console.log(`silahkan ambil ${nilai[0]}`)
//         break;
//     case 2:
//         console.log(`silahkan ambil ${ nilai[1]}`)
//         break;
//     case 3:
//             console.log(`silahkan ambil ${nilai[2]}`)
//             break;
//     case 4:
//         console.log(`silahkan ambil ${nilai[3]}`)
//         break;
//     case 5:
//         console.log(`silahkan ambil ${nilai[4]}`)
//         break;
//     case 6:
//             console.log(`silahkan ambil ${nilai[5]}`)
//         break;

//     default:
//         break;
// }
//         }

// let arr = [`Orek`, `Telor`, `Es teh`, `Sambel`, `Opor`];

// for(let i =0; i<arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach((food) =>{
//     console.log(food)
// });

// arr.map((data) =>{
//     console.log(data)
// })

//1. Method
// PUSH // MENAMBAH ELEMEN ARRAY BELAKANG
// arr.push(`Indomie telor`);
// console.log(arr)

//2. POP // MENGHAPUS PALING BELAKANG
// arr.pop()
// console.log(arr)

//3. SHIFT // MENGHAPUS PALING DEPAN
// arr.shift()
// console.log(arr)

//4. SPLICE //MENGHAPUS ARRAY KE BELAKANG 
// Array.splice(1,2)
// console.log(arr)


// let perusahaan = [`Honda`, `Hyundai`, `Yamaha`, `Porsche`, `BMW`, `Ferrari`, `Lamborghini`];

// perusahaan.forEach((perusahaaan) => {
//     console.log(perusahaaan)
// });

// perusahaan.push(`Tesla`)
// console.log(perusahaan)

// perusahaan.shift()
// console.log(perusahaan)

// let nilai =[1,2,3,4,5,6]
// const dadu=(gacha)=>{

    
//     for(let i = 1; i<=gacha; i++){
//         let dadu = Math.floor(Math.random()*6+1);
        
//         switch (dadu) {
//     case 1:
//         console.log(`silahkan ambil ${nilai[0]}`)
//         break;
//     case 2:
//             console.log(`silahkan ambil ${ nilai[1]}`)
//             break;
//     case 3:
//             console.log(`silahkan ambil ${nilai[2]}`)
//             break;
//     case 4:
//         console.log(`silahkan ambil ${nilai[3]}`)
//         break;
//     case 5:
//             console.log(`silahkan ambil ${nilai[4]}`)
//         break;
//     case 6:
//             console.log(`silahkan ambil ${nilai[5]}`)
//             break;

//             default:
//         break;
//     }
//         }
        
//     }
//     dadu(parseInt(prompt("tes")));


let waktuBermain = [2, 2, 3, 3, 1, 4, 5];
let totalJam = 0;
let jumlahMelebihi = 0;

for (let i = 0; i < waktuBermain.length; i++) {
  totalJam += waktuBermain[i];
  
  if (waktuBermain[i] > 2) {
    jumlahMelebihi++;
  }
}

console.log(`Total waktu bermain game: ${totalJam}`, "jam");
console.log("Jumlah melebihi batas waktu bermain:", jumlahMelebihi, "hari");

// let waktuBermain = [2, 2, 3, 3, 1, 4, 5];
// let totalWaktu = 0;
// let jumlahMelebihi = 0;

// for (let i = 0; i < waktuBermain.length; i++) {
//   totalWaktu += waktuBermain[i];
  
//   if (waktuBermain[i] > 2) {
//     jumlahMelebihi++;
//   }
// }

// console.log(`Total waktu bermain game: ${totalWaktu}`, "jam");
// console.log("Jumlah melebihi batas waktu bermain:", jumlahMelebihi, "hari");