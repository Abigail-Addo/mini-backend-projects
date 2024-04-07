exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('products')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('products').insert([
          { 
            name : 'headset', 
            price : 120,
            description : 'music player',
            stocks: 34, 
           image: 'http://localhost:9222/uploads/headset.jpg'
         },
         { 
            name : 'phone', 
            price : 2230,
            description : 'cell phone',
            stocks: 4, 
           image: 'http://localhost:9222/uploads/phone.png'
         },
         { 
            name : 'timberlands', 
            price : 420,
            description : 'shoe',
            stocks: 14, 
           image: 'http://localhost:9222/uploads/tims.jpg'
         },
         { 
            name : 'waver', 
            price : 600,
            description : 'hair product',
            stocks: 34, 
           image: 'http://localhost:9222/uploads/waver.jpg'
         },
         { 
            name : 'wig', 
            price : 700,
            description : 'hair product',
            stocks: 10, 
           image: 'http://localhost:9222/uploads/wig.jpg'
         },
         { 
            name : 'watch', 
            price : 1700,
            description : 'wrist watch',
            stocks: 10, 
           image: 'http://localhost:9222/uploads/watch.webp'
         },
    
        ]);
      });
  };

