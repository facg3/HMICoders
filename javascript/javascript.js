//Button Burger sc
  var navButton = document.querySelector('#navbar .burger-btn');
  console.log("s");
  navButton.addEventListener("click",function(e){
      document.getElementById("navbar").classList.toggle('active');

  });

  var menu = document.getElementsByClassName('list-nav')[0];
  menu.addEventListener("click",function(){
    document.getElementById("navbar").classList.remove('active');
  })
