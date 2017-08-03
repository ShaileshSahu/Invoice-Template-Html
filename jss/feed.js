
   var http = new XMLHttpRequest();
    http.open("GET","json/feed.json",true);
    http.send();
    http.onreadystatechange = function()
    {
      if(http.readyState==4&&http.status==200)
          {
              var text =http.responseText;
        var data =  JSON.parse(text);
      
            var template =  $("#education_feed").html();
              
        var complete = Mustache.to_html(template,data);      
            $("#education_feed").html(complete);  
      $("#education_feed").cycle({
          fx:'blindX',
          speed:'slow',
          delay:1000,
          next:"#next",
          prev:"#prev",
          timeout:3000,
          sync:0,
          pause:1
          
      });
          }
        
      
    };
