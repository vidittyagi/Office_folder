/*
This file is for Agora software which helps us to setup Video Calls and Voice Calls
*/
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

// const App = () => {
//   const client = useClient();
//   const { ready, tracks } = useMicrophoneAndCameraTracks();

//   return (
//     ready && <AgoraVideoPlayer videoTrack={tracks[1]} style={{height: '100%', width: '100%'}} />
//   )
// }

const appId = "3024fedd3ac14550a09a5c068849fed8";
const token = "0063024fedd3ac14550a09a5c068849fed8IAAWRBzOQ9YyWYGU0Fx9jJJWPqomd51KHFvTbJcpjrODlGTNKL8AAAAAEACKbcvBZ5hfYgEAAQBnmF9i";


//Setup Client Services of Agora Software
export const config = {mode: "rtc", codec:"vp8", appId:appId,token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";

