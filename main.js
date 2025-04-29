let client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

let config = {
    appid: "64b95e3140d74a5f81bd79605cf86ffe",
    token: "007eJxTYHiY6Ba8/ff5aIW3G5USlZjjeD83bMy9Y3myUY+dd9GiJ7sUGMxMkixNU40NTQxSzE0STdMsDJNSzC3NDEyT0yzM0tJS57LzZjQEMjJodC9jZWSAQBCfiyEnsyw1uKQoNTGXgQEA8i4g9g==",
    uid: null,
    channel: "liveStream",
};

let localtracks = {
    audioTrack: null,
    videoTrack: null,
};

let localTrackState = {
    audioTrackMuted: false,
    videoTrackMuted :false,
};

let remoteTracks = {};

document.getElementById("join-btn").addEventListener("click", async () => {
    console.log("Someone Joined Stream");
    await joinStreams();
});

    document.getElementById('mic-btn').addEventListener('click', async()=>{
            if(!localTrackState.audioTrackMuted){
                await localtracks.audioTrack.setMuted(true)
                localTrackState.audioTrackMuted = true
            }else{
                await localtracks.audioTrack.setMuted(false)
                localTrackState.audioTrackMuted = false
            }
    })

    document.getElementById('camera-btn').addEventListener('click', async()=>{
        if(!localTrackState.videoTrackMuted){
            await localtracks.videoTrack.setMuted(true)
            localTrackState.videoTrackMuted = true
            console.log("Camera Muted")
        }else{
            await localtracks.videoTrack.setMuted(false)
            localTrackState.videoTrackMuted = false
            console.log("Camera Unmuted")
        }
});


    document.getElementById('leave-btn').addEventListener('click',async()=>{
            for(trackName in localtracks){
                let track = localtracks[trackName]
                if(track){
                    //Stops the camera and mic
                    track.stop()

                    //Disconnects the camera and mic
                    track.close()
                    localtracks[trackName]= null
                }
            }
            await client.leave()
            document.getElementById('user-streams').innerHTML = ''
    })

let joinStreams = async () => {

    // client.on("user-published", handleUserJoined);
    // client.on("user-left",handleUserLeft)

    [config.uid,localtracks.audioTrack,localtracks.videoTrack] = await Promise.all([
     client.join(config.appid, config.channel, config.token||null, config.uid||null),
     AgoraRTC.createMicrophoneAudioTrack(),
     AgoraRTC.createCameraVideoTrack(),
    ])
    let videoPlayer = `
    <div class="video-containers" id="video-wrapper-${config.uid}">
        <div class="video-player player" id="stream-${config.uid}"></div> 
        <div class="user-uid">User ${config.uid}</div>
    </div>`;

    document.getElementById("user-streams").insertAdjacentHTML("beforeend", videoPlayer);

    localtracks.videoTrack.play(`stream-${config.uid}`);

    await client.publish([localtracks.audioTrack, localtracks.videoTrack]);
    client.on("user-published",handleUserJoined)
    };


    let handleUserLeft = async (user) => {
        delete remoteTracks[user.uid]
        document.getElementById(`video-wrapper-${user.uid}`)
        if (playerContainer) playerContainer.remove();
    }

let handleUserJoined = async(user,mediaType)=>{
    console.log('User has Join the stream')                    
    remoteTracks[user.uid] = user


    await client.subscribe(user,mediaType)

    let videoPlayer = document.getElementById(`video-wrapper-${user.uid}`)
    if(videoPlayer != null){
        videoPlayer.remove()
    }
    if(mediaType=='video'){
        let videoPlayer = `
        <div class="video-containers" id="video-wrapper-${user.uid}">
            <div class="video-player player" id="stream-${user.uid}"></div> 
            <div class="user-uid">User ${user.uid}</div>
        </div>`;
    

        document.getElementById("user-streams").insertAdjacentHTML("beforeend", videoPlayer);
        user.videoTrack.play(`stream-${user.uid}`)
    }

    if(mediaType=='audio'){
    user.audioTrack.play()       
    }
}