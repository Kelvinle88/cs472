$(eventHandler);

function eventHandler(){
    $('#sub').click(doajax);
    testJSON();
}

function doajax(){
    /*const url = 'http://my-json-server.typicode.com/typicode/demo/posts';
    $.get(url,{'data': {},'timeout' : 200})
    .done(asuccess)
    .fail(afailure)
    .always(done);*/

    const url = 'http://my-json-server.typicode.com/typicode/demo/posts';
    fetch(url)
    .then((response) => response.json())
    .then((x) => asuccess(x)).catch(error => afailure(error));
}

function asuccess(response){
    console.log(JSON.stringify(response));
    let x = JSON.stringify(response);
    let paragraph = $('<a>', {text: x});
    $('#res').append(paragraph);
}
function afailure(xhr, status, exception){
    console.log("There's been an error");
}

function testJSON(){
    let text = '{"name": "joe","age" : 87}';
    let o = JSON.parse(text);
    //console.log(o.name);
}

function done(){
    console.log("done");
}