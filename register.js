
window.onload = pageLoad;
function pageLoad(){
    var clickbutton = document.getElementById("myForm");
    clickbutton.onsubmit = validateForm;
    
}

function validateForm() {
    var p1 = document.forms["myForm"]["password1"].value;
    
    var p2 = document.forms["myForm"]["password2"].value;

    if (p1 == p2)
    {
        
        return true;
    }

    else
    {
        var no = document.getElementById("errormsg");
        no.innerHTML="Password is not correct";
        return false;
    }
}