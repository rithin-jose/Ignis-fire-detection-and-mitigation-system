// if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
//   console.log("enumerateDevices() not supported.");
// }

// var video = document.querySelector("#videoElement");
// //   var video = document.querySelector("#videoElement");

// var cam = [];
// navigator.mediaDevices.enumerateDevices()
// .then(function(devices) {
//   devices.forEach(function(device) {
//     console.log(device);
//     if(device.kind == 'videoinput')
//     {
//       if (navigator.mediaDevices.getUserMedia) {
//         navigator.mediaDevices.getUserMedia(
//           { video: { deviceId: { exact: device.deviceId  } } }
//         )
//           .then(function (stream) {
//             video.srcObject = stream;
//           })
//           .catch(function (error) {
//             console.log("Something went wrong!");
//           });
//       }
//     }
//   });
// })
// .catch(function(err) {
//   console.log(err.name + ": " + err.message);
// });

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

// Get the initial set of cameras connected
getConnectedDevices('videoinput')
.then((camera)=>{
    test.innerHTML=""
    camera.forEach((cam)=>{
        navigator.mediaDevices.getUserMedia({
            'video':{'deviceId':cam}
        })
        .then(stream => {
            videoElement.srcObject = stream;
        })
        test.innerHTML += '<div class="col-md-4">'+
                                '<div class="video-window" >'+
                                    '<video autoplay="true" id="videoElement"></video>'+
                                '</div>'
                            '</div>'
    })
})


// Listen for changes to media devices and update the list accordingly
navigator.mediaDevices.addEventListener('devicechange', event => {
    getConnectedDevices('videoinput')
    .then((camera)=>{
        test.innerHTML=""
        camera.forEach((cam)=>{
            test.innerHTML += '<div class="col-md-4">'+
                                    '<div class="video-window" >'+
                                        '<video autoplay="true" id="videoElement"></video>'+
                                    '</div>'
                                '</div>'
        })
    })
});