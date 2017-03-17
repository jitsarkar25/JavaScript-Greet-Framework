(function (global,$)
 {
  
    var Greetr = function(firstname,lastname,language)
    {
        return new Greetr.init(firstname,lastname,language);
    };
    
    var supportedLanguages = ['en','hi'];
    
    var greetings = {
        en : "Hello",
        hi : "Namaste"
    };
    
    var formalgreetings = {
      en : "Greetings",
      hi : "Namaskar"
    };
    
    var logMessages = {
        en : "logged in",
        hi : "logg hua hai "
    };
    
    Greetr.prototype = {
        
        getfullname : function ()
        {
            return this.firstname + " " + this.lastname;
        },
        
        informalgreet : function ()
        {
            return greetings[this.language] + " " + this.firstname;
        },
        
        formalgreet :  function ()
        {
            return formalgreetings[this.language] + " " + this.getfullname();
        },
        
        validatelang : function ()
        {
            if(supportedLanguages.indexOf(this.language) === -1)
                {
                    throw {
                        name : "LanguageNotSupported",
                        message : this.language + " is not supported"
                    }
                }
        },
        
        greet : function(formal)
        {
            var msg;
            if(formal)
                {
                    msg = this.formalgreet();
                }
            else
                {
                    msg = this.informalgreet();
                }
            
            if(console)
                {
                    console.log(msg);
                }
            return this;
        },
        
        setLang : function(lang)
        {
            this.language = lang;
            this.validatelang();
            return this;
        }
        
    };
    
    Greetr.init = function (firstname , lastname , language)
    {
        var self = this;
        self.firstname = firstname || "Firstname";
        self.lastname = lastname || "Lastname";
        self.language = language || "en";
    };
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    
}(window , jQuery));