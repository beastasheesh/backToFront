window.onload = function(){
  var myDiv = document.getElementById('myDiv');

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
    if(xhr.readyState == XMLHttpRequest.DONE){
      if(xhr.status == 200){
        myDiv.innerHTML = xhr.responseText;
      }
      else if(xhr.status == 400){
        alert('There was an error 400');
      }
      else {
        alert('There was some other error ');
      }
    }
  };

  xhr.open('GET', '/api/jsonData', true);
  xhr.send();

}

function onSubmitForm(formData){
  var http = new XMLHttpRequest();
  var url = '/api/insertForm';

  var data = new FormData(formData);

  http.open('POST', url, true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.onload = function () {
    console.log(this.responseText);
  };
  http.send(data);
}
