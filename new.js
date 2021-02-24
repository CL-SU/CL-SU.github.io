// function tryapitest(){
//     $.ajax({
//         url:"ar_predict",
//         type:"get",
//         dataType:"json",
//         success: function(data) {
// 	        console.log(data);    
//         },
//         error: function(XMLHttpRequest, textStatus, errorThrown) {
//             alert(XMLHttpRequest.status);
//             alert(XMLHttpRequest.readyState);
//             alert(textStatus);
//         },
//     })
// }

// var requestURL="E:\\codes\\html\\ar_predict.json";
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
//     var ar_predict = request.response;
//     populateHeader(ar_predict);
//     showHeroes(ar_predict);
//     print(ar_predict)
//   }


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("ar_predict.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    console.log(0);
    // print(data)
});