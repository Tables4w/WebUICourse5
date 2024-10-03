
window.addEventListener('DOMContentLoaded', function () {
    const goodsPriceList={"product1": 100, "product2": 140, "product3":170, "product4": 80, "product5":125}

    let amount = document.getElementById("amount");
    let product = document.getElementById("goodsList");
    let calcButton=document.getElementById("calculate");
    let resultfield=document.getElementById("result");
    calcButton.addEventListener("click", ()=>{
        let inp=amount.value;
        if(inp.match(/^\d+$/)!==null){
        let res=goodsPriceList[product.value] * inp;
        resultfield.innerText=res;}
        else{
            resultfield.innerText="Некорректный ввод количества";
        }
    });
});