function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mEwgGyDSO/model.json",modelLoaded);
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("span_object").innerHTML=results[0].label;
        document.getElementById("span_accuracy").innerHTML=results[0].confidence.toFixed(1);
    }
}

function modelLoaded(){
    console.log("Model Is Loaded!");
}