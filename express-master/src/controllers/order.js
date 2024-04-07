//db connection

const knex = require('../../config/database');

const OrderController = {
    getOrders: async(req, res) => {
        let user = req.body.username;

        //select orders from table where username = user left join meals on meals.id = orders.meal_id
        const orders = await knex('orders')
                                 .select('*')
                                 .where('username', user)
                                 .leftJoin('meals', 'meals.id', 'orders.meal_id');

        if(!orders){
            res.status(409).json({message: "No orders found"})
        }
        res.status(200).json({orders: orders})

    },

    deleteOrder: async(req, res) => {
        let id = req.query.id;

        //delete order from table where id = id
        const order = await knex('orders')
                                .where('id', id)
                                .del();
    if(!order){
        res.status(409).json({message: "Order not found"})
    }

    res.status(200).json({message: "Order deleted successfully"})
        
    },

    createOrder: async(req, res) => { 
        // const {meal_id, username} = req.body;

        return res.status(200).json({body: req.body});

        //insert into table meal_id, username
        const order = await knex('orders')
                           .insert({meal_id, username});
        if(!order){
            res.status(409).json({message: "Order not created"})
        }
        res.status(200).json({message: "Order created successfully"})
    }
}


module.exports = OrderController;