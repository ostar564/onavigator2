var alphaExp = /^[a-zA-Z]+$/; //אלף בית 
var hebrew = "אבגדה םןץףוזחטיכלמנסעפצקרשת"//בדיקת עברית
var sign = "!@#$%^&*()_+=-|\/?';,..`~"
function checkall() {
    console.log("1")
    var e = emailcheck1();// בדיקת שם משתמש
    var f = passcheck1(); //בדיקת סיסמה
    console.log("2")
    console.log("3")

    return  e && f ; //נחזיר את הפונקציות
}
function emailcheck1() {
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

function passcheck1() {
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