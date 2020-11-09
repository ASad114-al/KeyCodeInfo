document.addEventListener('keydown',function(e){
    document.getElementById('key').innerHTML = e.key;
    document.getElementById('key_code').innerHTML = e.keyCode;
    document.getElementById('result').innerHTML =e.keyCode;
    document.getElementById('code').innerHTML = `Key ${e.key}`;
})