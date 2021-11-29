const plus = document.getElementById("plus").addEventListener("click" , function(){
    const plus = minusPlus();
    itemCount("addValue", plus);
    amount("iphoneAmonut" ,  plus + 9);
    total();

})

const minus = document.getElementById("minus").addEventListener("click" , function(){
    const minus = minusPlus();
    itemCount("addValue", -1 * minus);
    amount("iphoneAmonut" ,  -10 * minus );
    total();

 })
   

 const iphoneplus = document.getElementById("iPhone11SiliconeCasePLus").addEventListener("click" , function(){

    const plus = minusPlus();
    itemCount("iPhoneInput", plus);
    amount("iPhone11SiliconeCaseAmount" ,  plus + 19);
    total();


})

const iphoneMinus = document.getElementById("iPhone11SiliconeCaseMinus").addEventListener("click" , function(){

    const minus = minusPlus();
    itemCount("iPhoneInput", minus);
    amount("iPhone11SiliconeCaseAmount" , -20* minus );
    total();

})


function total(){
    const iphone= document.getElementById("iphoneAmonut").innerText;
    const iphoneNumber = parseFloat(iphone);
    const iphoneCase= document.getElementById("iPhone11SiliconeCaseAmount").innerText;
    const iphoneCaseNumber= parseFloat(iphoneCase);
    const total = iphoneNumber + iphoneCaseNumber ;
    const totals= document.getElementById("subTotal").innerText= total;

    return totals;
}

 function minusPlus(){
     const addNewValue = 1;
     return addNewValue;
}

function amount(id, value){
    
    const addValue=document.getElementById(id).innerText;
    const addValueNumber= parseFloat(addValue);
    const total = addValueNumber + value;
    document.getElementById(id).innerText= total;
}




function itemCount(id, value){
    
    const addValue=document.getElementById(id).value;
    const addValueNumber= parseFloat(addValue);
    const total = addValueNumber + value;
    document.getElementById(id).value= total;
}
