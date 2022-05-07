import React, { useState, useEffect } from 'react';
import { channelName, config, useClient, useMicrophoneAndCameraTracks, channelName } from '../settings';
import { Grid } from "@material-ui/core";

const VideoCall = (props) => {
    const { setInCall } = props;
    const [users,setUsers] = useState([]);
    //This start state tells us whether user has started video call or not
    const [start,setStart] = useState(false);

    //Setup client for video
    const client = useClient();
    const {ready, tracks} = useMicrophoneAndCameraTracks();

    //UseEffect will run when either one of the channelName, client, ready, tracks states will be changed
    useEffect(()=>{
        let init = async(name)=>{
            //User is publishing either video or audio using ON event defined in Argora
            client.on("user-published", async(user,mediaType)=>{
                //mediaType tells which is being published audio or video
                await client.subscribe(user,mediaType);
                if(mediaType === "video"){
                    //Adding new users to previous users list using spread operator
                    setUsers((prevUsers)=>{
                        return [...prevUsers, user];
                    });
                }
                if(mediaType === "audio"){
                    user.audioTrack.play();
                }
            });

            //if user want to stop publishing his or her video
            client.on("user-unpublished", (user,mediaType)=>{
                if(mediaType === "audio"){
                    if(user.audioTrack) user.audioTrack.stop();
                }
                if(mediaType === "video"){
                    /*
                    User who have stopped their video will be removed from list 
                    using filter function which only returns true values
                    */
                    setUsers((prevUsers)=>{
                        return prevUsers.filter((User) => User.uid !== user.uid);
                    });
                }
            });

            /*
            user left means when an user quits the video call
            then he or she unpublishes so it is same thing 
            but we have to write different events for it
            */
            client.on("user-left", (user) => {
                setUsers((prevUsers)=>{
                    return prevUsers.filter((User) => User.uid !== user.uid);
                });
            });

            try {
                /*
                name is passed to line No 17 init Asynchronous function
                unique identifier is left null so it will be automatically generated
                */
                await client.join(config.appId, name, config.token, null);
            } catch (error) {
                console.log(error);
            }

            /*
            If we have any tracks 
            then our video will be able to get published 
            */ 
            if(tracks) await client.publish([tracks[0], tracks[1]]);
            //Now user will be ready to make video call that is why setStart is true
            setStart(true);
        };

        /*
        We are waiting for user to give
        access of his or her video and audio 
        that is why we have written asynchronous function init()
        */
        if(ready && tracks){
            try {
                init(channelName);
            } catch (error){
                console.log(error);
            }
        }
    },[channelName, client, ready, tracks]);

    return ( 
        <Grid container direction="column" style={{height: "100%"}}>
            {/* <Grid item style={{height:"5%"}}
            { ready && tracks && (
                    <Controls tracks={tracks} setStart={start} setInCall={setInCall}></Controls>
                )}
            ></Grid> */}
            <Grid item style={{height: "95%"}}>
                {
                    start && tracks && <Videos tracks={tracks} users={users}/>
                }
            </Grid>
        </Grid>
     );
}
export default VideoCall;


