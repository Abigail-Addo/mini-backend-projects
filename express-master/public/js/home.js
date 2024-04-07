let usr = URLSearchParams.get('username');

if(!usr){
    window.location.href = '/login';
}

const Orderbtn = document.getElementById('div.main_content > div > div.meals > div > div > button');

Orderbtn.addEventListener('click', (e) => {
    e.preventDefault();

    // let meal_id = e.target.getAttribute('data-id')
    let meal_id = e.target.id;
    if(!meal_id){
        return;
    }

    fetch('/api/v1/createOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({meal_id, username: usr})
    }).then(res => res.json())
      .then(data => {
          console.log(data);
      })
      .catch(err => console.log(err));
});