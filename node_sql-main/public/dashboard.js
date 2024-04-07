

window.addEventListener('load', () => {

    console.log('dashboard.js is working');

    const switched = document.querySelector('.content .header .switch');
    
    switched.addEventListener('click', function(e) {
        e.preventDefault();

        document.body.classList.toggle('theme-dark');
    });

    setInterval(() => {
    const width = window.innerWidth;
    if(width <= 480) {
        console.log('width is less than 480');
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.add('sidebar-short');
    }
    }, 4000);

    const showBtn = document.querySelector('.show span');
    const sidebar = document.querySelector('.sidebar');

    showBtn.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.remove('sidebar-short');
        sidebar.classList.toggle('sidebar-full');
    });
});

  // logout
  const logout = document.querySelector(".logout");
  logout.addEventListener("click", async (e) => {
      e.preventDefault();
      const confirmed = confirm("are u sure u want to logout");


      //if true then logout user 
      if(confirmed == true){
          window.location.href = "index.html";
          /*
          let token = localStorage.getItem('tokenKey');
          console.log(token)
          if(token != ""){
              
              const result = await fetch('http://localhost:5151/api/logout', {
                  method: 'POST',
                  headers: {
                      "Content-Type": "application/json"
                  },
                  mode : 'cors'
               })

          if(result.status == 200){

              localStorage.removeItem('tokenKey');
              
          }
      } */
      
  }
      // return;
  });