//An IIFE
;(function (global,$)
 {
  
    //creates an object without direct requiring 'new' keyword
    var Greetr = function(firstname,lastname,language)
    {
        return new Greetr.init(firstname,lastname,language);
    };
    
    //hidden within the scope of the IIFE
    var supportedLanguages = ['en','hi'];
    
    
    //types of greetings based on language
    var greetings = {
        en : "Hello",
        hi : "Namaste"
    };
    
    //formal greetings
    var formalgreetings = {
      en : "Greetings",
      hi : "Namaskar"
    };

    //informal greetings
    var logMessages = {
        en : "logged in",
        hi : "logg hua hai "
    };
    
    //prototype holds method to save memory
    Greetr.prototype = {
        
        //method that returns the fullname
        getfullname : function ()
        {
            return this.firstname + " " + this.lastname;
        },
        
        //method that returns the informal greeting
        informalgreet : function ()
        {
            return greetings[this.language] + " " + this.firstname;
        },
        
        //method that returns the formal greeting
        formalgreet :  function ()
        {
            return formalgreetings[this.language] + " " + this.getfullname();
        },
        
        //validates if the language is valid by using the supportedLanguages array due to the property of closure
        validatelang : function ()
        {
            //if language not present index is -1
            if(supportedLanguages.indexOf(this.language) === -1)
                {
                    throw {
                        name : "LanguageNotSupported",
                        message : this.language + " is not supported"
                    }
                }
        },
        
        //a single method that encapsulates both the formal and infrom greetings
        // when formal is true formal greeting is done, and when formal is false informal greeting is done
        //returns this so that chaining of methods can be done
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
            //checking if console is present
            if(console)
                {
                    console.log(msg);
                }
            return this;
        },
        
        
        //sets a given laguage to the object
        //returns this so that chaining of methods can be done
        setLang : function(lang)
        {
            this.language = lang;
            //validating if tha language is supported
            this.validatelang();
            return this;
        },
        
        //method used to show the greet inside a HTML element
        HTMLgreet: function(selector,formal)
        {
            //checking if jQuery is loaded
         if(!$)
             {
                 throw 'jQuery not loaded';
             }
            //checking if selector is empty
         if(!selector)
             {
                 throw 'Selector not present';
             }
           var msg;
            if(formal)
                {
                    msg = this.formalgreet();
                }
            else
                {
                    msg = this.informalgreet();
                }
            
            //putting the msg in the selector html tag
            $(selector).html(msg);
            
            return this;
        }
        
    };
    
    //trick borrowed from jQuery for object creation
    Greetr.init = function (firstname , lastname , language)
    {
        var self = this;
        //setting default values
        self.firstname = firstname || "Firstname";
        self.lastname = lastname || "Lastname";
        self.language = language || "en";
    };
    
    //the prototype of Greetr.init and Greetr is same
    // so that both can access the same methods
    Greetr.init.prototype = Greetr.prototype;
    
    //creatin short variable names for Greetr
    global.Greetr = global.G$ = Greetr;
    
}(window , jQuery));