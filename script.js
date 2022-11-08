let entry = document.getElementById("task1"),
 counter = 0,
 res = document.getElementById("result"),
 img_arr = ["task1.png","rebus.png","rebus2.png"],
 img = document.getElementById("img")
document.getElementById("button").addEventListener("click",()=>
{
    if(entry.value == "github" && counter < 3){
        counter+=1
        res.innerHTML = "Ваш результат: "+counter
        img.src = img_arr[counter]
        //res.style.display ="none"
    }
    
    else if(counter < 1){
        alert("Неправильно")
    }

})