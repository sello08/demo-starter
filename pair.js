// product.js
 //ürünleri al 
 //isme göre filtreleme fonksiyonu
 //isme göre ilk bulunan productu getirme fonk 
  //unitprice < parametre getirme fonk (array) 
  //unitprice > parametre getirme fonk(array) 
  //indirimdeki ürünleri getirme //ürün ekleme 
  //verilen isim ile ürün silme 
  //tüm ürünleri getirme  

  let products = [  
    { unitPrice: 100, productName: "ürün 1", discount: "true", rate: 15 },  
    { unitPrice: 150, productName: "ürün 2", discount: "false", rate: 0 }, 
    { unitPrice: 200, productName: "ürün 3", discount: "true", rate: 2.5 }, 
    ];

    console.log(products)


    function getByUnitPrice(unitPrice) {
        products.forEach(product => {
            if (product.unitPrice > unitPrice) {
                console.log(product)
            }
        })
    }
    
    //getByUnitPrice(2000)

    function getByUnitPrice(unitPrice) {
        products.forEach(product => {
            if (product.unitPrice < unitPrice) {
                console.log(product)
            }
        })
    }
    
    //getByUnitPrice(200)

    function getByDiscount() {
        products.forEach(product => {
            if (product.discount== true) {
                console.log(" discount " ,product)
            }
        })
    }
    
    getByDiscount()

    function deleteProduct(product) {
        let newProducts = products.filter(product => product.productName !== product)
        products = [...newProducts]
    
    
    }
    
    deleteProduct('Ürün 2')
    console.log(products)

  