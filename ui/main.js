var button=document.getElementById('counter');
 button.onclick = function(){
     console.log("function start");
    var request = new XMLHttpRequest();
    console.log("function start1");
    
    request.onreadystatechange = function(){
        console.log("function start2");
      if(request.readystate === XMLHttpRequest.DONE){
          console.log("function start3");
          if(request.status === 200){
              console.log("function start4");
              var counter = request.responseText;
          var span = document.getElementById('count');
    span.innerHTML = counter.toString();
              
          }
      }
    };
request.open('GET','http://anuritz80.imad.hasura-app.io/counter',true);
request.send(null);
    
};