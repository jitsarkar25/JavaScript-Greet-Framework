$("#loginBtn").click(function (){
    
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    
   var person =G$(firstname,lastname);
    
    var language = $("#Langselect").val();
    
    person.setLang(language);
    
    $("#maindiv").hide(true);
    
    person.HTMLgreet("#greeting",true);
});






