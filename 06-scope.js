/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// Javascript memiliki 3 scope variabel, yaitu global scope, function scope, dan block scope.
/// - global scope: scope variabel yang dapat di akses di semua tempat.
/// - function scope: scope variabel yang dapat di akses hanya di dalam block function saja.
/// - block scope: scope variabel yang hanya dapat di akses di dalam block code (dalam kurung kurawal)
/// global scope:
let umur = 21;
const warning = "sudah cukup umur";
if(umur >= 21){
  console.log(warning)
}
/// variabel warning dapat di akses di dalam blok kode if

/// function scope
let funct = (a, b) => {
  let i = 20
  return i + a + b;
}

/// i += 1
/// ketika kita memanggil i lagi akan terjadi error.

// block scope
for(let j = 0; j <= 10; j++){
  let i = 1 + j;
}

/// console.log(i)
/// i tidak bisa dipanggil karna ada di dalam blok kode for.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// yang akan muncul di dalam console.log adalah 'Mariah'
/// karna yang di passing ke parameter function adalah "Mariah Carey" dan variabel name di dalam function hanya parameter, bukan memanggil variabel name yang di luar 
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));