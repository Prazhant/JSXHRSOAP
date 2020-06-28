// Create x2js instance with default config


function convert(){
       var x2js = new X2JS();
       var xmlText = document.getElementById("inputArea").value;
   //    "<MyRoot><test>Success</test><test2><item>val1</item><item>val2</item></test2></MyRoot>";
       var jsonObj = x2js.xml_str2json( xmlText );
       console.log("json: "+JSON.stringify(jsonObj));
       document.getElementById("outputArea").value=JSON.stringify(jsonObj);

   }