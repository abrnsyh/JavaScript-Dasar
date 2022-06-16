/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 1; i <= 100; i++) {
    let prime = true;
    for(let j = 2; j < i; j++) {
        if(i % j == 0){
            prime = false;
        }
    }   
    if(prime){
        console.log(i)
    }
 }

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
//let fiftiethPrime;

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd = 0;

/// EDIT HERE
do {
    if(fiftiethOdd % 2 != 0){
        oddCounter +=1
        if(oddCounter == 50){
            console.log(fiftiethOdd)
        }
    }
    fiftiethOdd++
} while (oddCounter <= 50)