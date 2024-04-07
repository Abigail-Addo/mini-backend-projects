const showOrderList = async () => {
    const orderList = document.querySelector('.right .item-list .container')
    console.log(orderList)

        // get url params
    const searchParams = new URLSearchParams(window.location.search);
    const usr = searchParams.get('username');
    let result = await fetch(`http://localhost:4004/api/v1/getOrders/${usr}`)

    if(result.status == 200){
        const results = await result.json();
        console.log(results)
        const { orders } = results;

    let outputHTML = '';
       orders.map(order => {
            outputHTML += `
            <div class="item">
            <h3 class="first">${order.name}</h3>
            <h3>1</h3>
            <h3>${order.price}</h3>
            <span class="material-symbols-outlined" id=${order.id}>delete</span>
            </div>
            `
        })

        orderList.innerHTML = outputHTML;
         deleteOrder();


    }

}

const deleteOrder = async () => {
    const deleteBtns = document.querySelectorAll('.right .item-list .container .item span')
    console.log('deleteBtns')   

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            let id = e.target.id;
            let confirmed = confirm(`Are you sure you want to delete order ${id}`);
          
            if (confirmed === true) {
            let result = await fetch(`http://localhost:4004/api/v1/deleteOrder/${id}`, {
                method: 'DELETE'
            })
            if(result.status == 200){
                const results = await result.json();
                console.log(results)
                const user = e.target.parentElement;
                user.classList.add('remove-deleted');
                user.addEventListener('transitionend', () => {
                    user.remove();
                })
            }
        }
        })
    })
}

showOrderList();
// window.addEventListener('load', () => {
//     deleteOrder();

// })

const OrderBtns = document.querySelectorAll('.meal button.order');
// deleteOrder();


OrderBtns.forEach(btn => {
btn.addEventListener('click', (e) => {
    e.preventDefault();

    // get url params
    const searchParams = new URLSearchParams(window.location.search);
    const usr = searchParams.get('username');

    let meal_id = e.target.id;
 
    alert(meal_id)
    if(!meal_id){
        return;
    }

    fetch('http://localhost:4004/api/v1/createOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({meal_id, username: usr})
    }).then(res => res.json())
      .then(data => {
          console.log(data);
         showOrderList();

      })
      .catch(err => console.log(err));
    });
});



   
  
    
