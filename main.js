//link:https://storage.googleapis.com/tm-model/MMLIliYkl/model.json
function Iniciar(){
    navigator.mediaDevices.getUserMedia({audio:true})

    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/MMLIliYkl/model.json", modelReady)
}
function modelReady(){
    console.log("modelo pronto!!!! :D")
    classifier.classify(gotResults)
}
function gotResults(erro, result)
    if(erro){
        console.log(erro)
    }else{

        resultado = result[0].label;
        document.getElementById("som").innerHTML = result[0].label;}