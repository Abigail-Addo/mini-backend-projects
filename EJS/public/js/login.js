const btn = document.querySelector('.submit');
btn.addEventListener('click', async (e) => {
    e.preventDefault();

    const username = document.querySelector('.username');
    const email = document.querySelector('.email');
    const errorMessage = document.querySelector('.errorMessage');
    errorMessage.classList.add('message');

    if (username.value === "" || username.value === null || email.value === "" || email.value === null) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = "Please fill all fields";
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 1500);
        return;
    }
    else {

        //make fetch request
        const result = await fetch('http://localhost:2023/api/v1/loginUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                username: username.value
            })
        }) //fetch ends here

        //check http status
        if (result.status != 200) {
           
            const response = await result.json()
            errorMessage.style.display = 'block';
            errorMessage.textContent = response.message;
            
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 1500);

            return;
        }
        if (result.status == 200) {
            const response = await result.json();
            console.log(response);


            window.location.href = '/home?username=Abigail';
        }

    }


});
