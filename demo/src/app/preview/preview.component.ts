import { Component } from "@angular/core";
import { Screen } from "@nativescript/core";
import {
  VideoView,
  VideoRecording,
  VideoRecorder,
} from "nativescript-video-recorder";
import { ActivatedRoute } from "@angular/router";
import { RECORDING_STATE } from "nativescript-video-recorder";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "ns-video-preview",
  templateUrl: "./preview.component.html",
})
export class PreviewComponent {
  screenWidth = Screen.mainScreen.widthDIPs;
  screenHeight = Screen.mainScreen.heightDIPs;
  videoView: VideoView;
  cameraId: any;
  file: any;
  outputFormat: any;
  profile: any;
  recording: VideoRecording;

  constructor(
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.cameraId = params["cameraId"];
      this.outputFormat = params["outputFormat"];
      this.file = params["file"];
      this.profile = params["profile"];
    });
  }

  /**
   * View available handler
   * @param args
   */
  onVideoViewAvailable(args) {
    this.videoView = args.object.nativeView;
    this.createRecording();
  }

  ngOnDestroy() {
    console.log("on Destroy");

    if (this.recording) {
      console.log("Releasing Resources");
      this.recording.release();
    }
  }

  createRecording() {
    this.recording = VideoRecorder.createRecording({
      videoView: this.videoView, // Camera view - VideoView
      cameraId: this.cameraId, // Camera id
      file: this.file, // Output file path
      outputFormat: this.outputFormat, // Output file format
      profile: this.profile, // Video Profile,
      thumbnailCount: 3,
    });
  }

  toggleRecording() {
    if (this.recording.state === RECORDING_STATE.NOT_RECORDING) {
      this.recording.start();
    } else {
      this.recording.stop();

      console.log("Thumbnails : " + JSON.stringify(this.recording.thumbnails));
      this.routerExtensions.back();
    }
  }

  togglePause() {
    if (this.recording.state === RECORDING_STATE.PAUSED) {
      this.recording.resume();
    } else {
      this.recording.pause();
    }
  }

  switchCamera() {
    this.recording.switchCamera();
  }
}
