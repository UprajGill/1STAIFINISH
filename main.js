Webcam.set({
    width:400,
    height:400,
    image_format:'png',
    png_quality:96
    });

    camera=document.getElementById("camera");
    Webcam.attach('#camera');

    function snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("capture").innerHTML='<img id="captureimage"src="'+data_uri+'"/>';
    });

    }
    console.log('ml5version',ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NV0ImxzEM/model.json",modelLoaded);
    function modelLoaded(){
        console.log('modelLoaded');
    }
    function identify(){
    img=document.getElementById("captureimage");
    classifier.classify(img,gotResult);
    }
    function gotResult(error,result){
        if(error){
            console.error(error);
        }
        else{
            console.log(result);
            document.getElementById("personname").innerHTML=result[0].label;
            document.getElementById("personaccuracy").innerHTML=result[0].confidence.toFixed(3);

        }
    }