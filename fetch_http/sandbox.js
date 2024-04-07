window.addEventListener("load", async (e) => {
    e.preventDefault();
    console.log('sandbox.js is ready')

        try{
            const url = 'https://dog.ceo/api/breeds/image/random';
    
            const dog =  await fetch(url)
           
            const res = await dog.json(); 
            console.log(res)
            //check if the response was successfull
            if(res.status == 'success'){
                const dogImg = document.querySelector('img#dog')
                dogImg.src = res.message
                return
            }

        }catch(err){
            console.log(err)
        }


    
});



async function backendFetch(){
    try{

        console.log("backing is fetcing data ..1")
        const tcUrl = 'https://jsonplaceholder.typicode.com/posts'

        const webPosts = await fetch(`${tcUrl}`,
        {
            method: 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                    title: 'fetch api lesson',
                    body: 'http request learnt',
                    userId: 5
            })

        })
        const result = await webPosts.json();
        console.log('result from backend url')
        console.log(result) 

 }catch(err){
    console.log(err)
}

    
}

backendFetch();