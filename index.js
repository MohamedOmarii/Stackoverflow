
// requests module
var requestModule = (function(){
  document.querySelector('button').addEventListener('click', function(event){
    event.preventDefault();

    var search = document.querySelector('input').value;
    makeRequest(search, requestModule.renderQuestions);
  });

  function makeRequest(search, callbackFunction){
    console.log(callbackFunction);
    var url = 'http://api.stackexchange.com/2.2/questions/unanswered?order=desc&sort=activity&site=stackoverflow&tagged='+search;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
        callbackFunction(JSON.parse(xhr.responseText));
      }
    }
    xhr.open('GET',url);
    xhr.send();
  }

  function renderQuestions(result){
    var list = document.getElementById('questionsList');
    console.log(result);
    list.innerHTML = result.items[0].link;
  }

  return {
    renderQuestions: renderQuestions
  }

})();
