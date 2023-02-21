function oisda()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BHxT1jZMj/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}