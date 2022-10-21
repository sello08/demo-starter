
//
// dinamik olması gerekiyor

let krediler = ["ihtiyaç", "taşıt", "araç"];

for (let i = 0; i < krediler.length; i++) {
  console.log(krediler[i]);
}

krediler.forEach((kredi) => {
  console.log("Foreach: ", kredi);
});

let urunler = [
  { fiyat: 100, ad: "ürün 1", discount: "true", rate: 15 },
  { fiyat: 150, ad: "ürün 2", discount: "false", rate: 0 },
  { fiyat: 200, ad: "ürün 3", discount: "true", rate: 2.5 },
];


