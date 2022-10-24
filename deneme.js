// product.js
//ürünleri al
//isme göre filtreleme fonksiyonu
//------------------------isme göre ilk bulunan productu getirme fonk 
//------------------------unitprice < parametre getirme fonk (array) 
//------------------------unitprice > parametre getirme fonk(array) 
//------------------------indirimdeki ürünleri getirme //ürün ekleme 
//------------------------verilen isim ile ürün silme 
//tüm ürünleri getirme  

  let products = [  
    { unitPrice: 100, productName: "sütlü çikolata", discount: "true", rate: 15 },  
    { unitPrice: 150, productName: "bitter çikolata", discount: "false", rate: 0 }, 
    { unitPrice: 200, productName: "beyaz sütlü çikolata", discount: "true", rate: 2.5 },
    { unitPrice: 175, productName: "bitter sütlü çikolata", discount: "false", rate: 2.5 }
    ];

   // console.log(products)


function getByProductName(name){
  products.forEach(product => {
    if(product.productName.includes(name)){
      console.log(product);
    }
  })
}

//getByProductName("sütlü")

function getByProductName2(name){
  products.forEach(product => {
    if(product.productName.includes(name)){
      console.log(product);
    }
  })
}

getByProductName2("sütlü")

