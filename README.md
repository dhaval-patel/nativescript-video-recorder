# nativescript-video-recorder

## Installation

nativescript in app video recorder plugin for android and ios.

```javascript
tns plugin add <checkout_repository>/src
```

## Usage 

Register VideoView element

```
registerElement("VideoView", require('nativescript-video-recorder/video-recorder').VideoView);
```

Use VideoView element to create view for camera preview.

```
<VideoView></VideoView>
```

Create VideoRecording Object

```
VideoRecorder.createRecording({
    videoView: this.videoView,  // Camera video - ViewView
    cameraId: this.cameraId, // Camera id 
    file: this.file, // Output file path
    outputFormat: this.outputFormat,  // Output file format
    profile: this.profile // Video Profile 
});
```

## API

VideoRecording API
    
```
start() - start recording
stop() - stop recording
pause() - pause recording (only android)
resume() - resume recording (only android)
switchCamera() - switch camera between front and back (not while recording)
release() - to release all resources
```
