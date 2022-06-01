function startClassification(){

    navigator.mediaDevices.getUserMedia({ audio : true });
    classifier = ml5.soundclassifier('', modelReady)

}

function modelReady(){

    classifier.classify(gotResults);

}