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
    console.log(cam);
    return cam;
}

let test = document.getElementById("test")

// Get the initial set of cameras connected
getConnectedDevices('videoinput')
.then((camera)=>{
    test.innerHTML=""
    camera.forEach((cam)=>{
        test.innerHTML += '<p>'+cam+'</p><br>'
    })
})


// Listen for changes to media devices and update the list accordingly
navigator.mediaDevices.addEventListener('devicechange', event => {
    getConnectedDevices('videoinput')
    .then((camera)=>{
        test.innerHTML=""
        camera.forEach((cam)=>{
            test.innerHTML += '<p>'+cam+'</p><br>'
        })
    })
});