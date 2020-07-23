// Event handler Plus
const plusBtn = document.getElementById('plus-btn')
plusBtn.addEventListener('click', function(){
    productValuePlus("product-value")
const priseDisplay = document.getElementById('prise-display').innerText;
const priseDisplayNum = parseFloat(priseDisplay);
const totalPriseDisplay =  priseDisplayNum * 1;
document.getElementById('prise-display').innerText = totalPriseDisplay;

})
function productValuePlus(id){
    const productValue = document.getElementById(id).value;
    const productValueNum = parseFloat(productValue);
    const totalProductValue = productValueNum + 1;
    document.getElementById(id).value = totalProductValue;
}


// Event handler minus
const minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('click', function(){
    productValueMinus("product-value")
})
function productValueMinus(id){
    const productValue = document.getElementById(id).value;
    const productValueNum = parseFloat(productValue);
    const totalProductValue = productValueNum - 1;
    document.getElementById(id).value = totalProductValue;
}