

const loginUser = (email, password, callback) => {

    setTimeout(() => {
    console.log('getting response ..!')
    callback({userEmail: email})
  }, 3000)


}

const getUserVideos = (email, callback) => {

    setTimeout(() => {
        callback(['video1', 'video2' , 'video3'])
    }, 2000)

}

const videoDetails = (video, callback) => {

    setTimeout(() => {
    callback("tilte of video")
}, 1000)

}



const user = loginUser("email@mail.com", "123345", user => {
console.log(user)
getUserVideos(user.userEmail, videos => {
console.log(videos)
videoDetails(videos[0], title => {
    console.log(title)
})
})

});