/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error : error yang muncul ketika tipe data nya berbeda dari yang di ingin kan dari suatu kode (bisa function ataupun method)
/// - Reference Error : Error yang muncul ketika kita memanggil atau menggunakan variabel yang belum di deklarasi.
/// - Range Error : ketika menggunakan angka di luar dari jangkauan.
/// - Syntax Error : Error yang muncul ketika ada kesalahan penulisan sintaks. 


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - Akan terjadi error
/// - Error yang akan muncul adalah Reference Error.
/// - Hal tersebut terjadi dikarenakan code di bawah mencoba memanggil variabel terlebih dahulu yang mana variabel tersebut di deklarasikan setelah nya
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;