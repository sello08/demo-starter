let numbers = [10, 20, 30, 40, 50, 60]


function sum(array){
    let total = 0;
    for (let i = 0; i < array.length; i++) {
         total += array[i];
    }
    return total;
}



function person(fName, sName, ...otherInfo){
    return otherInfo.includes("siyah");
}

let result = person("selim", "akyol", 10, "siyah", 180);

 function sizCevapVerin() {
    return [10, 20, 30, 40, 50];
  }


  let cevaplar = sizCevapVerin();

  //console.log("cevaplar",cevaplar);

  let teacher = {
    firsName : "Selim",
    lastName : "Akyol"
  }

  let learningTopics = {
    topics : ["JavaScript", "Angular"]
  }

  let instructor = [...learningTopics.topics];

  //console.log("teacher",instructor);
  
