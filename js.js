// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

let views = document.querySelector(".views")
let slider = document.querySelector("#slider")
let  progress = document.querySelector(".progress")
let  val = document.querySelector(".value")
let  time = document.querySelector(".month")
let sw = document.querySelector(".sw")
let check = document.querySelector(".checkbox")

check.addEventListener("click", function() {
    check.classList.toggle("active")
    checkIt()
})

let checkIt = slider.oninput = function() {

    if(slider.value == 1 && check.className == 'checkbox active') {
        progress.style.width = 0 + "%"
        views.innerHTML= 10 + "k PAGEVIEWS"
        val.innerHTML = (8 - (8 * 0.25)) * 12
        time.innerHTML = "/ year"
    }else if(slider.value == 1){
        progress.style.width = 0 + "%"
        views.innerHTML= 10 + "k PAGEVIEWS"
        val.innerHTML = 8
        time.innerHTML = "/ month"
    }else if(slider.value == 2  && check.className == 'checkbox active'){
        progress.style.width = 25 + "%";
        views.innerHTML =  50 + "K PAGEVIEWS";
        val.innerHTML = (12 - (12 * 0.25)) * 12;
        time.innerHTML = "/year";
    }else if(slider.value == 2){
        progress.style.width = 25 + "%";
        views.innerHTML =  50 + "K PAGEVIEWS";
        val.innerHTML = 12;
        time.innerHTML = "/month";
    }else if(slider.value == 3  && check.className == 'checkbox active' ){
        progress.style.width = 50 + "%";
        views.innerHTML =  100 + "K PAGEVIEWS";
        val.innerHTML = (16 - (16 * 0.25)) * 12;
        time.innerHTML = "/year";
    }else if(slider.value == 3){
        progress.style.width = 50 + "%";
        views.innerHTML =  100 + "K PAGEVIEWS";
        val.innerHTML = 16;
        time.innerHTML = "/month";
    }else if(slider.value == 4  && check.className == 'checkbox active'){
        progress.style.width = 75 + "%";
        views.innerHTML =  500 + "K PAGEVIEWS";
        val.innerHTML = (24 - (24 * 0.25)) * 12;
        time.innerHTML = "/year";
    }else if(slider.value == 4){
        progress.style.width = 75 + "%";
        views.innerHTML =  500 + "k PAGEVIEWS";
        val.innerHTML = 24;
        time.innerHTML = "/month";
    }else if(slider.value == 5 && check.className == 'checkbox active'){
        progress.style.width = 100 + "%";
        views.innerHTML =  1 + "M PAGEVIEWS";
        val.innerHTML = (32 - (32 * 0.25)) * 12;
        time.innerHTML = "/year";
    }else if(slider.value == 5){
        val.innerHTML = 32;
        progress.style.width = 100 + "%";
        views.innerHTML =  1 + "M PAGEVIEWS";
        time.innerHTML = "/month";
    }  
}