function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username == "sabarinathan.ct19@bitsathy.ac.in" && password == "ragav")
    {
        window.location.href = 'preg.html';
    }
    else 
    {
        alert("login failed");
    }
}  
  