const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('getting response ..!')
    resolve({userEmail: email})
  }, 3000)
})

}



const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2' , 'video3']);
        }, 2000)
    })
}


const videoDetails = (video) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
             resolve("tilte of video")
         }, 2000)
    })
}


loginUser("email", "123456")
.then(user => getUserVideos( user.email))
.then(videos => console.log(videos))
// .then(videos => videoDetails(videos[0]))
.then(detials => console.log(detials))

// Promise.all([p1, p2]).then(res => console.log(result))