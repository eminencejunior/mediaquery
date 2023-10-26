function myButton() {
    document.getElementById("demo").style.display= 'block';
}
function myFunction() {
    var age, voteable;
    var age = document.getElementById("age").value;
     voteable = (age< 18) ? "Too young to leave home if you don't want to face sapa ." : "Old enough to relocate and live alone";
     document.getElementById("check").innerHTML = voteable;
}
function thanks() {
    window.alert('Oluwadamilola is saying a very big thanks to you for checking on my page');
}
