
function getInputVal(event,id){
    const val = document.getElementById(id).value;
    console.log(val)
    console.log("Input Value", val);

    const numVal = parseFloat(val);
    console.log("NumVal: ",numVal)
    if (!isNaN(numVal) && numVal>0)
        {
            console.log(numVal);
        }
        else
        {
            event.preventDefault();
            alert("Not a valid input");
            console.log("No")
            return -1
        }
    return numVal;

}
function getTextVal(id)
{
    const textVal = document.getElementById(id).innerText;
    const amntVal = parseFloat(textVal);
    return amntVal;
}

function donateMoney(event, id, inputAmnt){
    const donAmnt = getTextVal(id);
    console.log("Donate",donAmnt);
    const mainAmnt = getTextVal("main-amount");
    if(inputAmnt<= mainAmnt)
    {
        document.getElementById("main-amount").innerText = mainAmnt - inputAmnt;
        document.getElementById(id).innerText = donAmnt + inputAmnt;

    }
    else
    {
        event.preventDefault();
        alert("Not a valid input");
        console.log("No")
        return
    }
}


document.getElementById("noakhali-btn").addEventListener('click', function(event){
    const amount = getInputVal(event,"flood-nk");
    if(amount!=-1)
    {
        donateMoney(event,"nkh-amount",amount);
    }

})


document.getElementById("feni-btn").addEventListener('click', function(event){
    const amount = getInputVal(event,"flood-feni");
    if(amount!=-1)
        {
            donateMoney(event,"feni-amount",amount);
        }
})

document.getElementById("quota-btn").addEventListener('click', function(event){
    const amount = getInputVal(event,"quota-all");
    if(amount!=-1)
        {
            donateMoney(event,"quota-amount",amount);
        }
})


document.getElementById("blog-id").addEventListener("click",function(){
    window.location.href="./faq.html";
})

