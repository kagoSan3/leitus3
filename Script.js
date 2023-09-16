
/*  الاكواد في فوضى لست ملزومة بتشوه عينيك */



let main = document.getElementById('Show'); // هل مازلت بالفريق؟

let Yes = document.getElementById('Steel'); // نعم, اذا لماذا ستنضم لنا؟
let Nah = document.getElementById('notSteele'); //لا خرجت, اذا لماذا خرجت؟ 



// اخفي العناصر!
main.setAttribute('style', 'visibility: hidden');
Yes.setAttribute('style', 'visibility: hidden');
Nah.setAttribute('style', 'visibility: hidden');





// event!
// هل انت في فريق؟
document.getElementById('yes').addEventListener("click", InTeam);  // نعم
document.getElementById('no').addEventListener("click", NotInTeam); // لا

// event!
// هل مازلت به؟
document.getElementById('yes3').addEventListener("click", In); // نعم
document.getElementById('no3').addEventListener("click", Out); // لا,خرجت


function InTeam() { // انا في فريق!
    // اظهر سؤال:  هل مازلت به؟
    main.setAttribute('style', ' visibility: visible');  main.setAttribute('style', ' position: relative;');
   
}
 
function NotInTeam() { // انا منبوذ ولست في فريق, ههه
    
    // اخفي سؤال: هل مازلت به؟
      main.setAttribute('style', ' position: absolute;');   main.setAttribute('style', ' visibility: hidden');
   

    // هل سؤال: هل مازلت في الفريق؟ لا يساوي نل؟
   if (document.querySelector('input[name="entry.1533897753"]:checked')) {
    
     main.innerHTML = ' <p ">  هل مازلت به؟  </p> <input type="radio" id="yes3" value="نعم" name="a3"> <label for="yes3"> نعم </label>  <br><input type="radio" id="no3" value="لا"  name="a3"  > <label for="no3"> لا </label>';
    
     //  اخفي سؤال لماذا ستنضم لنا وانت في فريق اخر
      Yes.setAttribute('style', ' position: absolute;');   Yes.setAttribute('style', ' visibility: hidden');
   
      // اخفي سؤال لماذا خرجت
      Nah.setAttribute('style', ' position: absolute;');   Nah.setAttribute('style', ' visibility: hidden');    
  
     // اضف الايفنت علشان لا يركبهم عفريت وما يشتغلوا
     document.getElementById('yes3').addEventListener("click", In);
     document.getElementById('no3').addEventListener("click", Out);
 
  
    } // if
}


function In() { // لماذا ستنضم لنا وانت في فريق اخر؟

    // اظهر
    Yes.setAttribute('style', ' visibility: visible'); 
    Yes.setAttribute('style', ' position: relative;');
   
    // اخفي
    Nah.setAttribute('style', ' position: absolute;'); 
    Nah.setAttribute('style', ' visibility: hidden'); 
    
   
}

function Out() { // لماذا ايها المسكين خرجت من الفريق؟
   
    // اظهر
    Nah.setAttribute('style', ' visibility: visible'); 
    Nah.setAttribute('style', ' position: relative;');
   
    // اخفي
     Yes.setAttribute('style', ' position: absolute;');
     Yes.setAttribute('style', ' visibility: hidden'); 
}

// ارسال البيانات لقاعدة البيانات المسروقة من جوجل درايف
function SendData() {
    var data = new FormData();

     /* عنك */
     // اسم الحلو؟
    data.append("entry.2091778996", document.getElementById("name2").value);
 
     // عمرك؟
    data.append("entry.137269778", document.getElementById("Age").value);
   
    // جنس الحلو؟ اسف ما نقبل الجنس الثالث لانه غير موجود هه
    data.append("entry.295590525", document.querySelector('input[name="entry.295590525"]:checked').value);
   
  
   /* معلومات الحساب */
  // الحساب المختار للتواصل
  data.append("entry.236102575", document.querySelector('input[name="entry.236102575"]:checked').value);
  
  // اسم المستخدم
  data.append("entry.1423159187", document.getElementById("User").value);
  
  // الرابط
  data.append("entry.1494306142", document.getElementById("url").value);
  
  // تأكد ان حسابك ليس خاص
  data.append("entry.1281168481", document.getElementById("Ch").value);
  
  /* mbit */
  // نمطك؟
  data.append("entry.384824775", document.querySelector('input[name="entry.384824775"]:checked').value);

  /* عن نفسك */

  // اشياء نجيدها
  var ChBox = document.querySelectorAll('input[name="entry.1369727920"]:checked');
  if (ChBox){
      ChBox.forEach(function(ChBoxs) {
      data.append("entry.1369727920", ChBoxs.value);
  }); } //if

  // لا تجيدها
   var ChBoxe = document.querySelectorAll('input[name="entry.804722101"]:checked');
   if (ChBoxe){
   ChBoxe.forEach(function(ChBoxss) {
      data.append("entry.804722101", ChBoxss.value);
  }); } // if

  
  /* in team or not */
  
  var e3 = document.querySelector('input[name="entry.343467060"]:checked');
  if (e3) {
    data.append("entry.343467060", e3.value );
  }
    
  var e5 = document.querySelector('input[name="entry.1533897753"]:checked');
    if (e5){
   data.append("entry.1533897753", e5.value);
    }

  if (document.getElementById("Why1")){
    data.append("entry.1008338557", document.getElementById("Why1").value);
  }
  
  if ( document.getElementById("Why2")){
    data.append("entry.723362597", document.getElementById("Why2").value);
  }
  


  // تحدث عن نفسك, مو كأننا مهتمين الصراحة
  data.append("entry.668635125", document.getElementById("toke").value);


  /* قوانين */
  // الموافقة على القوانين
  data.append("entry.861987046", document.querySelector('input[name="entry.861987046"]:checked').value);

  /* note*/
   // ملاحظات
  if (document.getElementById("note"))
    data.append("entry.1091188565", document.getElementById("note").value);
  
  
    var Xhr = new XMLHttpRequest();
Xhr.open('POST','https://docs.google.com/forms/d/e/1FAIpQLSeYqTyNXaB4Jzk9nyWoGPDJUP5nUzw4veqwWGJlKDjlpmLwvg/formResponse', true);

window.open('SendDone.html');

Xhr.send(data);
return false;
}
/*
return false;
window.location.href = "SendDone.html"
let t = document.getElementById("yes3");
let te = document.getElementById("no3");
onsubmit="return SendData()"

document.getElementById('Go').addEventListener("click", SendData);


window.location.href = "SendDone.html"
onsubmit="return SendData()"
*/
