let urunler = [
    { fiyat: 100, ad: "ürün 1", indirim: "true", oran: 15 },
    { fiyat: 150, ad: "ürün 2", indirim: "false", oran: 0 },
    { fiyat: 200, ad: "ürün 3", indirim: "true", oran: 2.5 },
  ];
  
  // filter
  //array.prototype.filter
  
  let filtrelenmisUrunler = urunler.filter((urun) => {
    return urun.fiyat > 160;
  });
  
  console.log(filtrelenmisUrunler);
  
  // Urunler artık filtrelenmiş array
  let filtre2 = urunler.filter((urun) => {
    return urun.fiyat > 120;
  });
  console.log(filtre2);
  
  // Map => foreach  ile aynı işlevi görür farklı olarak map yeni bir array oluşturur ve bu arrayi döner...
  
  let maplenmisArray = urunler.map((urun) => {
    return {
      fiyat: urun.fiyat * 2,
      ad: urun.ad,
      indirim: urun.indirim,
      oran: urun.oran,
    };
  });
  console.log("Maplenmis Array: ", maplenmisArray);
  
  // map kullanarak
  // indirim ve oran konsolda görünmeyecek
  // indirim = true ise oran kadar fiyat düşecek
  //kullanıcıya sadece fiyat ,ad ve indirim tutarı gözükecek
  
  let newArray = urunler.map((urun) => {
    return {
      fiyat:
        urun.indirim === true
          ? urun.fiyat - urun.fiyat * (urun.oran / 100)
          : urun.fiyat,
      ad: urun.ad,
      indirimTutari: urun.fiyat * (urun.oran / 100),
    };
  });
  
  console.log(newArray);
  
  let cart = [
    { id: 1, productName: "product 1", quantity: 3, unitPrice: 3000 },
    { id: 1, productName: "product 2", quantity: 2, unitPrice: 1000 },
    { id: 1, productName: "product 3", quantity: 1, unitPrice: 500 },
  ];
  
  // sepetteki ürünleri gez, adet*unitprice ile toplam fiyatı bul
  // kullanıcıya göster {totalPrice:300,totalProductCount:6}
  let total = { totalPrice: 0, totalProductCount: 0 };

  
  cart.forEach((cart) => {
    total.totalPrice += cart.unitPrice * cart.quantity;
    total.totalProductCount += cart.quantity;
  });
  console.log(total);
  