window.addEventListener('load', async () =>{
 
    const login = document.querySelector('.login');
    login.addEventListener('click', async () => {
    
        const Usermail = document.querySelector('input#email');
        const Userpassword = document.querySelector('input#password');


        const result = await fetch('http://localhost:5151/api/auth',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: Usermail,
                passowrd: Userpassword
            })
        })
        if(result.status == 200){
            let response = await result.json();
            console.log(response)
            return 
        }
            let response = await result.json();
            console.log(response)
        

    })


})