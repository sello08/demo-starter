console.log("statements start");

// koşul blokları

console.log(1 == 1);

if (1 == 12) {
  console.log("if içerisi çalıştı");
} else if (2 != 2) {
  console.log("else if bloğu çalıştı");
} else {
  console.log("else bloğu çalıştı");
}

let dolarKurDun = 18.74;
let dolarKurBugun = 18.8;

// dolarkur bugun daha fazla  ise consola fazla daha az ise az yazdır

if (dolarKurBugun > dolarKurDun) {
  console.log("Bugün dolar kuru daha fazla");
} else {
  console.log("Bugün dolar kuru daha az");
}

//  ternacy operator (tek satırlık if blokları......)
// koşul ? kod1 : kod2  // koşul doğruysa kod1 yanlışsa kod2 çalışır.....

dolarKurBugun >= dolarKurDun
  ? console.log("Dolar kuru yükselişte")
  : console.log("Dolar kuru düşüşte");

// switch - case

let toplamBakiye = 100;
let secilenKur = "USD";

switch (secilenKur) {
  case "USD":
    toplamBakiye *= 17;
    break;
  case "EUR":
    toplamBakiye *= 20;
    break;
  default:
    console.warn("Bilinmedik Kur türü..");
    break;
}

console.log("Toplam Bakiye: ", toplamBakiye);

// secilen kreedi
// kredi tutarı
// secilen kredi taşıt ise 2 ihtiyaç ise 1.5 konut ise 2.5 ile çarp
// hiç biri değilse hata bas
//en son kredi tutarını yazdır

// 0 = taşıt, 1 = konut, 2 = ihtiyaç
let secilenKredi = 1;
let krediTutarı = 100000;

switch (secilenKredi) {
  case 0:
    krediTutarı *= 2;
    break;
  case 1:
    krediTutarı *= 2.5;
    break;
  case 2:
    krediTutarı *= 1.5;
    break;

  default:
    console.warn("bilinmedik kredi türü");
    break;
}

console.log("kredi tutarınız: ", krediTutarı);

// girilen sayı çift ise çift tek ise tek yaz

let sayi = 32;
if (sayi % 2 == 0) {
  console.log("çift");
} else {
  console.log("tek");
}
