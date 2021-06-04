async function getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    var videoDevice = devices.filter(device => device.kind === type);
    cam = [];
    videoDevice.forEach(device =>{
        if(device.deviceId === "")
        {
            cam.push(device.groupId)
        }
        else
        {
            cam.push(device.deviceId)
        }
        
    })
    return cam;
}

let test = document.getElementById("heretest")

function createElement(index)
{
    test.innerHTML += '<div class="col-md-4" id="videoBox'+index+'">'+
                            '<div class="video-window" >'+
                                '<video autoplay="true" class="test" id="videoElement'+index+'"></video>'+
                                '<p>'+"Camera "+ index+'</p>'+
                            '</div>'
                        '</div>'

}

function setStream(stream,index)
{
    video  = document.getElementById('videoElement'+index)
    video.srcObject  = stream;
}

function runCamera(id,index)
{
    navigator.mediaDevices.getUserMedia({
        'video':{'deviceId':id}
    })
    .then((stream)=>{
        setStream(stream,index)
    })
}

// Get the initial set of cameras connected
getConnectedDevices('videoinput')
.then((camera)=>{
    test.innerHTML=""
    camera.forEach(function(id,index){
        createElement(index);
        runCamera(id,index);
    })
})

// Listen for changes to media devices and update the list accordingly
navigator.mediaDevices.addEventListener('devicechange', event => {
    test.innerHTML=""    
    getConnectedDevices('videoinput')
    .then((camera)=>{

    camera.forEach(function(id,index){
        createElement(index);
        runCamera(id,index);
    })
})
});


var videoWindow = document.getElementById('videoBox0')
console.log(videoWindow);

videoWindow.addEventListener('click',function(){
    console.log("click");
})