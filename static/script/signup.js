var alphaExp = /^[a-zA-Z]+$/; //אלף בית 
var hebrew = "אבגדה םןץףוזחטיכלמנסעפצקרשת"//בדיקת עברית
var sign = "!@#$%^&*()_+=-|\/?';,..`~"
function checkall123() {
    var a = checkdate(); //כל הפונקציות
    var b = checkmylname(); //בדיקת שפ המשפחה
    var c = checkmyfname();//בדיקת שם פרטי
    var e = usrrnamecheck();// בדיקת שם משתמש
    var f = passcheck(); //בדיקת סיסמה
    var g = emailcheck();// בדיקת אי- מייל

    return a && b && c && e && f && g; //נחזיר את הפונקציות
}
function age2() {
    var date = new Date(); //התאריך היום
    var year = date.getFullYear(); //השנה היום
    var d = document.getElementById("date").value;
    var birthyear = d.substring(0, 4);
    document.getElementById("age1").innerHTML = year - birthyear; //גיל

}


function checkmyid() {
    var id = document.getElementById("id").value; //תעודץ הזהות
    if ((!isNaN(id)) && (id.length == 9)) {
        document.getElementById("idcheck").innerHTML = " ";
        return true;
    }
    else {
        document.getElementById("idcheck").innerHTML = "תעודת הזהות חייבת לכלול לפחות 9 ספרות";
        return false;

    }




}
function checkmyfname() {
    var fname = document.getElementById("fname").value; //שם פרטי
    if (fname.length == 0) {
        document.getElementById("fnamecheck").innerHTML = "אתה חייב לרשום את שמך";
        return false;
    }

    for (var i = 0; i < fname.length; i++) {
        if (!(hebrew.includes(fname[i]))) {
            document.getElementById("fnamecheck").innerHTML = "עליך לרשום רק אותיות בעברית";
            return false;
        }
    }

    {
        document.getElementById("fnamecheck").innerHTML = " ";

        return true;
    }
}



function checkmylname() {
    var lname = document.getElementById("lname").value;// שם משפחה
    if (lname.length == 0) {
        document.getElementById("lnamecheck").innerHTML = "אתה חייב לרשום את שמך";
        return false;
    }
    for (var i = 0; i < lname.length; i++) {// בדיקה שהכל בעברית
        if (!(hebrew.includes(lname[i]))) {
            document.getElementById("lnamecheck").innerHTML = "עליך לרשום רק אותיות בעברית";
            return false;
        }
    }

    {
        document.getElementById("lnamecheck").innerHTML = " ";

        return true;
    }
}

function checkdate() {

    var d = document.getElementById("date").value;// תאריך שהמשתש הזין
    var birthyear = d.substring(0, 4);// מקבל את השנה שהמששתמש הזין

    if (birthyear < 1960) {

        document.getElementById("bdaycheck").innerHTML = "טעות בתאריך";
        return false;

    }


    else {
        document.getElementById("bdaycheck").innerHTML = " ";
        return true;
    }


}

function usrrnamecheck() {
    var user = document.getElementById("user").value;  //מקבל סיסמה
    if (!(user.length > 5 && user.length < 11)) {//בדיקת אורך
        document.getElementById("usercheck").innerHTML = "שם המשתמש חייבת להכיל בין6 -10 תווים ";
        return false;

    }

    for (var i = 0; i < user.length; i++) {//בדיקת סוג תווים
        if (!((!isNaN(user[i])) || (user[i].match(alphaExp)) || (user[i] == "_"))) {
            document.getElementById("usercheck").innerHTML = "שם משתמש יכול להכיל רק תווים באנגלית ומספרים";
            return false;
        }

    }
    {
        document.getElementById("usercheck").innerHTML = " ";
        return true;
    }
}



function passcheck() {
    var pass = document.getElementById("pass").value;
    var sumlow = 0;//מונה אותיות קטנות
    var sumhigh = 0;//מונה אותיות גדולות
    if (!(pass.length > 5 && pass.length < 11)) {
        document.getElementById("passcheck").innerHTML = "סיסמה חייבת להיות בין 6-10 תווים";
        return false;

    }
    for (var i = 0; i < pass.length; i++) {//בדיקת סוגי תווים
        if (!((!isNaN(pass[i])) || (pass[i].match(alphaExp)) || (pass[i] == "_"))) {
            document.getElementById("passcheck").innerHTML = "סיסמה יכולה להכיל רק אותיות באנגלית מספרים וקו תחתון";
            return false;
        }

    }
    for (var i = 0; i < pass.length; i++) {//ספירת אותיות גדולות וקטנות
        if (pass[i].match(alphaExp)) {
            if (pass[i].toUpperCase() == pass[i])
                sumhigh = sumhigh + 1;
            else
                sumlow = sumlow + 1;
        }



    }
    if (sumhigh == 0) {//בדיקת אותיות קטנות 
        document.getElementById("passcheck").innerHTML = "סימסמה חייבת להכיל לפחות אות גדולה ואות קטנה אחת";
        return false;
    }
    if (sumlow == 0) {//בדיקת אותיות קטנות
        document.getElementById("passcheck").innerHTML = "סימסמה חייבת להכיל לפחות אות גדולה ואות קטנה אחת";
        return false;
    }
    {
        document.getElementById("passcheck").innerHTML = " ";
        return true;
    }

}

function emailcheck() {
    var email = document.getElementById("email").value;
    if ((email.indexOf('@') < 2) || (email.lastIndexOf('.') < email.indexOf('@') + 3)) {
        document.getElementById("emailcheck").innerHTML = "אי- מייל אינו תקין";
        return false;
    }
    var status = false;
    for (i = 0; i < email.length; i++) {

        if (email.charAt(i) == " ") {
            status = true;
        }
    }
    if (status == true) {

        document.getElementById("emailcheck").innerHTML = " אי אפשר להשאיר רווחים באי-מייל";
        return false;
    }
    for (var i = 0; i < email.length; i++) {
        if (!((!isNaN(email[i])) || (email[i].match(alphaExp)) || (sign.includes(email[i])))) {
            document.getElementById("emailcheck").innerHTML = "האימייל יכול לכלול רק אותריות באנגלית, סימנים, ומספרים";
            return false;
        }
    }
    {
        document.getElementById("emailcheck").innerHTML = " ";
        return true;
    }
}










