window.addEventListener("DOMContentLoaded", showTime());
function showTime(){
    let date = new Date();
//date.setTime(800000000000000);
    let h = date.getHours();
    let m = date.getMinutes();
    let s  = date.getSeconds();
    let session = "AM";
    
    
    if(h==0){
        h = 12;
    }
    if(h>12){
        h = h-12;
        session = "PM"
    }
    if(h<10){
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    
    const time =  `${h}:${m}<small>.${s}|${session}</small>`;
//    console.log(time);
    let displaClock = document.getElementById("display-clock").innerHTML = time.toLocaleString("bn-BD");
    setTimeout(showTime, 1000);
    
    let bg;
    const userName = "বাংলাদেশ";
    const user = document.getElementById('user');
    if(h<5 && session ==="AM"){
            bg = `url(img/goodnight.jpg)`;
            user.innerHTML = `শুভ রাত্রি ${userName}`;
           }
    else if(h<=11 && session ==="AM"){
            bg = `url(img/goodmorning.jpg)`;
            user.innerHTML = `শুভ সকাল ${userName}`;
       }
        else if(h>11 && session ==="AM"){
            bg = `url(img/goodnoon.jpg)`;
            user.innerHTML = `শুভ দুপুর ${userName}`;
        }
        else if(h<=4 && session ==="PM"){
            bg = `url(img/goodafternoon.jpg)`;
            user.innerHTML = `শুভ বিকাল ${userName}`;
           }
        else if(h<=7 && session ==="PM"){
            bg = `url(img/goodevening.jpg)`;
            user.innerHTML = `শুভ সন্ধ্যা ${userName}`;
           }
        else if(h<8 && session ==="PM"){
            bg = `url(img/goodnight.jpg)`;
            user.innerHTML = `শুভ রাত্রি ${userName}`;
           }
    const body = document.querySelector("body");
    body.style.background = `${bg} center/cover`;
}
