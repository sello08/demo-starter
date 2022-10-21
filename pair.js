// product.js
//------------------------ürünleri al
//------------------------isme göre filtreleme fonksiyonu
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


//-------------------------------------------------------------------------------------------------

function getByProductName(name){

    products.forEach(product => {
        if(product.productName.includes(name)){
            console.log(product)
        }
    })
}

    function getByProductName2(name){
       products =  products.map(element => {
        return {...element, unitPrice: element.unitPrice * 2};
       });
       console.log(products);
    }

//getByProductName2("bitter");


//-------------------------------------------------------------------------------------------------

function getByProductNameFirst(name){

    products.forEach(product => {
        if(product.productName.includes(name)){
            console.log(product[0])
        }
    })
}

// getByProductNameFirst("bitter");




//-------------------------------------------------------------------------------------------------
    function getByUnitPrice(unitPrice) {
        products.forEach(product => {
            if (product.unitPrice > unitPrice) {
                console.log(product)
            }
        })
    }
    
    //getByUnitPrice(100)


//-------------------------------------------------------------------------------------------------
    function getByUnitPrice(unitPrice) {
        products.forEach(product => {
            if (product.unitPrice < unitPrice) {
                console.log(product)
            }
        })
    }
    
    //getByUnitPrice(200)


//-------------------------------------------------------------------------------------------------
    function getByDiscount() {
        products.forEach(product => {
            if (product.discount == "true") {
                console.log(" discount " ,product)
            }
        })
    }
    
    //getByDiscount()

//-------------------------------------------------------------------------------------------------
    function deleteProduct2(name) {
        products.forEach(product => {
            if (product.productName !== name) {
                console.log("dasdsads",product)
            }
        })
    }
    
    deleteProduct2("sütlü çikolata");


//-------------------------------------------------------------------------------------------------


    function deleteProduct(product) {
        let newProducts = products.filter(product => product.productName !== product)
        products = [...newProducts]
    
    
    }
    
   // deleteProduct('Ürün 2')
  //  console.log(products)

  