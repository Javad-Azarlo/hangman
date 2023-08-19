 let screet = ["never", "you", "that", "bullet", "break"];

 let select_item="";
 //متغییری که تمامی حرف های انتخاب شده را درون خود نگه میدارد
 let clicked = [];
 let result = "";
 let mistakes = 0
//تابعی که به صورت رندوم از آرایه مقدار میگیرد
 function selectRandomItem(){
select_item = screet[Math.floor(Math.random()*screet.length)]
console.log(select_item);
document.getElementById("letters").addEventListener("click" , buttonHandler);
//وقتی با کلیدهای صفحه کلید هم انتخاب میکنیم انجام شود
window.addEventListener("keydown" , keyHandler)
console.log(select_item) 
}
// تابعی جهت نمایش تعداد کاراکترهای آیتم رندوم
function setUnderScore(){
    let split_random = select_item.split("");
     //کاراکترهای آیتم رندوم را مپ میکند و به ازای هرکاراکتر یا کلمه خودش یا خط تیره میزارد
    let split_random_map = split_random.map
    (leteer => clicked.indexOf(leteer) >= 0 ? leteer : "_");
    // با ایم دستور تمامی کاراکترها را کنار هم میچینیم و بصورت رشته درمیاوریم
    result = split_random_map.join("");

    document.getElementById("clue").innerHTML= `<p>${result}</p>`
}
// تابعی برای اینکه چک کند ببین طرف برده است یا نه
function checkIfWind(){
    if(select_item === result){
        document.getElementById("gameover").querySelector("p").style.display="block";
        document.getElementById("image").querySelector("img").src = "assets/winner.png";
    }
}
//تابعی که مشخص کند کاربر باخته است 
function checkIfLost(){
    if(mistakes === 6){
        document.getElementById("gameover").querySelector("p").style.display="block";
        document.getElementById("clue").querySelector("span").innerText = `${select_item} : کلمه انتخاب شده `
        //document.getElementById("image").querySelector("img").src = "assets/hangman${mistakes}.png";
    }
}
// تابعی برای آپدیت عکس هنگمن با هربار وارد کردن کلید اشتباه
function hangManPic(){
    const imagePic = document.getElementById("image").querySelector("img");
    imagePic.src = `assets/hangman${mistakes}.png`;
}
 function letterHandler(leteer){
    // در ابتدا ورودی وارد شده رو حروف کوچک کن چون مقدارهای آرایه ما حروف کوچک هستن
leteer = leteer.toLowerCase(); 
// برو به متغییر کیکید نگاه ببین که خرفی که بعنوان ورودی کلیک شده درون آرایه هست یا نه اگه نبود اضافه کن اگه بود هیچ کاری نکن
clicked.indexOf(leteer) === -1 ? clicked.push(leteer) : null;
document.getElementById(leteer.toUpperCase()).className = "used";
if(select_item.indexOf(leteer) >= 0){
    setUnderScore();
    checkIfWind();  
}
else if(select_item.indexOf(leteer) === -1){
    mistakes++;
    checkIfLost();
    hangManPic();
}
}
 //تابع مربوط به کلیک های آیتم های درون باکس همون حروف
 function buttonHandler(e){
    letterHandler(e.target.id);
 }
 //تابعی جهت وارد کردن کلیدهای صفحه کلید
 function keyHandler(e){
    letterHandler(e.key)
 }
 selectRandomItem();
 setUnderScore()