 
 /*
 *
 * 
 * It's used to send HTTP requests and receive responses, 
 * allowing you to interact with web services, APIs, and more
 *
 * 
 * The fetch() function returns a Promise that 
 * resolves to the Response object representing the response to the request
 * 
 * *
 * 
 *  */

 //behind the scence
 async function handleHttp(url,{ headers, method , data}){

    return new Promise((resolve, reject) => {
        //behind the scences fetch checkes ur method, ur headers, and ur data 
        foolproof(url).methodCheck().dataCheck()
        resolve(
            //code
        );
        reject(
               response = new Error('url doesnt ') 
        );
    })
}

    

 /*
  ** HTTP PROTOCAL 
  * GET
  * POST
  * PUT
  * DELETE
  * PATCH
  * 
  */
 
 fetch('https://api.example.com/data')
  .then(response => {
    // Handle the response here
  })
  .catch(error => {
    // Handle errors here
  });

  async function getFruits(){
        try{
            //code here
            const result = fetch('http://url')
            const response = await result.json();

        } catch{
            //err here

        }

      
    }


const getFruits = async () => {
 
    try{
        //code here
        const result = fetch('http://url')
        const response = await result.json();

    } catch{
        //err here

    }

}








// https://codjo-active-ae899f91ed44.herokuapp.com

/************************ 
 *
 *    post request
 *
/************************ */
  async function loginUser (userEmail, userPassword)  {
    const url = 'http://url';
    
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const postData = {
        email: userEmail,
        password: userPassword,
    }

    const user = fetch(url, { 
        method: 'POST',
        headers,
        body: JSON.stringify(postData)
    }).then( (res) =>  {
        console.log(res.json())
        10 * res.json()
    }).catch( (err) => {
        console.log(err)
    })

}


//async style

const loginUserd = async (userEmail, userPassword) => {
    const url = 'http://url';
    
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const postData = {
        email: userEmail,
        password: userPassword,
    }

    const user = await fetch(url, { 
        method: 'POST',
        headers,
        body: JSON.stringify(postData)
    })
    const res = await user.json();
    //code comes here
    console.log(res)
 

}



loginUser('somethingmail@mail.com', 123456)


(async () => {

    const rawResponse = await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await rawResponse.json();
  
    // console.log(content);

  })();


