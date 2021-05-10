if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log("enumerateDevices() not supported.");
  }
  
  // List cameras and microphones.
  
  navigator.mediaDevices.enumerateDevices()
  .then(function(devices) {
    devices.forEach(function(device) {
      console.log(device.kind + ": " + device.label +
                  " id = " + device.deviceId);
    });
  })
  .catch(function(err) {
    console.log(err.name + ": " + err.message);
  });


  var video = document.querySelector("#videoElement");
  var video2 = document.querySelector("#videoElement2");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia(
    { video: { deviceId: { exact: '883b48ae8bca0ab5e53a1c209a658a959756faf4b304bb48fb41ddd4a932e29f' } } }
  )
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.log("Something went wrong!");
    });
}

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia(
    { video: { deviceId: { exact: '3c0fce7fb8ece3413fed1dfa5480cb7b169dfe80706805293bb9f5915d4c57ad' } } }
  )
    .then(function (stream) {
      video2.srcObject = stream;
    })
    .catch(function (error) {
      console.log("Something went wrong!");
    });
}