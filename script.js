var inputTxt = document.querySelector("#input-txt");
var outputTxt = document.querySelector("#output-txt");
var btn = document.querySelector("#btn");

var url = "https://api.funtranslations.com/translate/roman-numerals.json"

function urlHandler(input) {
    return url + "?text=" + input;
}



btn.addEventListener("click", function(){
    var textInput = inputTxt.value;
    outputTxt.innerText = "It is translating..."
    fetch(urlHandler(textInput))
    .then(response => response.json())
    .then((json) => {
        var finalText = json.contents.translated;
        outputTxt.innerText = finalText
    })
})