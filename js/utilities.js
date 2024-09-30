
function getInputVal(event,id){
    const val = document.getElementById(id).value;
    console.log(val);
    console.log("Input Value", val);
    document.getElementById(id).value = "";

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

function donateMoney(event, id, inputAmnt, Head){
    const donAmnt = getTextVal(id);
    console.log("Donate",donAmnt);
    const mainAmnt = getTextVal("main-amount");
    if(inputAmnt<= mainAmnt)
    {
        document.getElementById("main-amount").innerText = mainAmnt - inputAmnt;
        document.getElementById(id).innerText = (donAmnt + inputAmnt) + " BDT";
        const heading = document.getElementById(Head).innerText;
        console.log("Heading",heading);
        const currentDate = new Date();
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="p-4 border border-black m-5 rounded-xl">
                <p class="mb-2 font-extrabold">${inputAmnt} Taka is Donated for ${heading}.</p>
                <p> Date: ${currentDate}</p>
            </div>
        `
        document.getElementById('history').appendChild(div);

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
        donateMoney(event,"nkh-amount",amount,"nk-head");
    }

})


document.getElementById("feni-btn").addEventListener('click', function(event){
    const amount = getInputVal(event,"flood-feni");
    if(amount!=-1)
        {
            donateMoney(event,"feni-amount",amount,"feni-head");
        }
})

document.getElementById("quota-btn").addEventListener('click', function(event){
    const amount = getInputVal(event,"quota-all");
    if(amount!=-1)
        {
            donateMoney(event,"quota-amount",amount,"quota-head");
        }
})


document.getElementById("hist-btn").addEventListener('click', function(event){
    document.getElementById("donation-btn").classList.remove("bg-[#B4F461]")
    document.getElementById("donation-btn").classList.add("bg-white")
    document.getElementById("hist-btn").classList.remove("bg-white")
    document.getElementById("hist-btn").classList.add("bg-[#B4F461]")
    document.getElementById("content-card").classList.add("hidden")
    document.getElementById("history").classList.add("hidden")
    document.getElementById("history").classList.remove("hidden")
})

document.getElementById("donation-btn").addEventListener('click', function(event){
    document.getElementById("hist-btn").classList.remove("bg-[#B4F461]")
    document.getElementById("hist-btn").classList.add("bg-white")
    document.getElementById("donation-btn").classList.remove("bg-white")
    document.getElementById("donation-btn").classList.add("bg-[#B4F461]")
    document.getElementById("content-card").classList.add("hidden")
    document.getElementById("history").classList.add("hidden")
    document.getElementById("content-card").classList.remove("hidden")
})


document.getElementById("blog-id").addEventListener("click",function(){
    window.location.href="./faq.html";
})