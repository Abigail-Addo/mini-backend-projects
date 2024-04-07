
let user = (new URLSearchParams(window.location.search)).get('username');

if (!user) {
    window.location.href = '/login';
}

window.addEventListener('load', async () => {

    const result = await fetch('http://localhost:2023/api/v1/getMeals');
    const response = await result.json();
    console.log(response);

    const row = document.querySelector('div.content');

    let contents = '';
    response.meal.forEach(meal => {
        contents += `
            <div class="card" id=${meal.id}>
                <div class="image">
                <img src="${meal.image}" alt="hot deals">
                </div>
              
                <div class="card-body">
                    <div class="card-text">
                        <h5>${meal.name}</h5>
                        <p>GH &cent; ${meal.price} </p>
                        <p>${meal.description}</p>
                    </div>
                    <button type="button" class="button" aria-hidden="true" id=${meal.id}>Order</button>

                </div>
            </div>
        `;
        row.innerHTML = contents;
    });

    const OrderBtns = document.querySelectorAll('.button');
    // deleteOrder();

    OrderBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            // get url params
            const searchParams = new URLSearchParams(window.location.search);
            const usr = searchParams.get('username');

            let meal_id = e.target.id;

            if (!meal_id) {
                return;
            }

            fetch('http://localhost:2023/api/v1/createOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ meal_id, username: usr })
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    showOrderList();

                })
                .catch(err => console.log(err));
        });
    });

    const showOrderList = async () => {
        const orderList = document.querySelector('.container_order');


        // get url params
        const searchParams = new URLSearchParams(window.location.search);
        const usr = searchParams.get('username');
        let result = await fetch(`http://localhost:2023/api/v1/getOrders/${usr}`)

        if (result.status == 200) {
            const results = await result.json();
            console.log(results)
            const { orders } = results;

            let outputHTML = '';
            orders.map(order => {
                outputHTML += `
            <div class="checkout">
                <h4>Item <span>${order.name}</span></h4>
                <h4>Quantity <span>1</span></h4>
                <h4 class="Itemprice">Price <span>&cent; ${order.price}</span></h4>
                <span class="material-symbols-outlined" id=${order.id}>delete</span>

            </div>
                `
            })

            orderList.innerHTML = outputHTML;
            deleteOrder();

            totalPriceCal();


        }

    }

    showOrderList();



    const deleteOrder = async () => {
        const deleteBtns = document.querySelectorAll('div.checkout span');

        deleteBtns.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault();
                let id = e.target.id;
                let confirmed = confirm(`Are you sure you want to delete order ${id}`);

                if (confirmed === true) {
                    let result = await fetch(`http://localhost:2023/api/v1/deleteOrder/${id}`, {
                        method: 'DELETE'
                    })
                    if (result.status == 200) {
                        const results = await result.json();

                        const user = e.target.parentElement;
                        user.classList.add('remove-deleted');
                        user.addEventListener('transitionend', () => {
                            user.remove();
                        })

                        window.location.href = window.location.href;

                        console.log("order deleted successfully");

                    }
                }
            })
        })
    }



    // total price
    const totalPriceCal = () => {
        const totalPrices = document.querySelectorAll('.totalPrice');
        const Itemprices = document.querySelectorAll('.Itemprice');

        // Initialize an array to store the prices
        const prices = [];

        // Loop through each price element and extract the price
        Itemprices.forEach(priceEach => {
            const priceText = priceEach.textContent;
            const numericPart = parseFloat(priceText.replace(/\D+/g, '')); // Extract numeric part as a number
            prices.push(numericPart);
        });

        // Calculate the total price using reduce
        const totalPrice = prices.reduce((sum, price) => sum + price, 0);

        // Format the total price with commas for thousands
        const formattedTotalPrice = 'GH¢ ' + totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        console.log(formattedTotalPrice); // This will give you the formatted total price as a string

        // Now, update each totalPrice element with the calculated and formatted total
        totalPrices.forEach(totalPriceElement => {
            totalPriceElement.textContent = formattedTotalPrice;
        });

    
    }


    const submit = document.querySelector('.saved');
    submit.addEventListener('click', async (e) => {
        e.preventDefault();

        const confirmed = confirm("Are you sure you want to save your order?");

        if (confirmed) {


            if (result.status === 200) {
                // If orders were fetched successfully, proceed with bulk deletion
                let deleteResponse = await fetch('http://localhost:2023/api/v1/deleteAllOrders', {
                    method: 'DELETE',
                    headers: {
                        "content-type": "application/json"
                    }
                });

                if (deleteResponse.status === 200) {
                    alert("Order has been saved successfully");

                    // Redirect to another page
                    window.location.href = window.location.href;
                }

                console.log("Failed to save orders");

            }

        }



    })

    const cancel = document.querySelector('.cancel');
    cancel.addEventListener('click', async (e) => {
        e.preventDefault();

        const confirmed = confirm("Are you sure you want to cancel your order?");


        if (confirmed) {


            if (result.status === 200) {
                // If orders were fetched successfully, proceed with bulk deletion
                let deleteResponse = await fetch('http://localhost:2023/api/v1/deleteAllOrders', {
                    method: 'DELETE',
                    headers: {
                        "content-type": "application/json"
                    }
                });

                if (deleteResponse.status === 200) {
                    alert("Order has been cancelled successfully");

                    // Redirect to another page
                    window.location.href = window.location.href;
                }

                console.log("Failed to cancel orders");

            }

        }



    })
});