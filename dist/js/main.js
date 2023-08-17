 function nav(){
    if($('#nav_list_mobile_devices').hasClass("hidden")){
      $('#nav_list_mobile_devices').removeClass("hidden")
      $('#nav_icon').prop('src', 'assets/close.svg')
    }
    else{
      $('#nav_list_mobile_devices').addClass("hidden")
      $('#nav_icon').prop('src', 'assets/menu.svg')
    }
  
}
$('#dropdownNavbarLink').on("click", function(){
  if($('#dropdownNavbar').hasClass("hidden")){
    $('#dropdownNavbar').removeClass('hidden')
  }else{
    $('#dropdownNavbar').addClass('hidden')
  }
})

function loopClick(){
  if($("#loopSearch").hasClass("hidden")){
    $("#loopSearch").removeClass("hidden")
  }else{
    $("#loopSearch").addClass("hidden")
  }
}

import Masonry from 'masonry-layout';
window.onload = () => {
    const grid = document.getElementById('.grid-realizacja')
    console.log(grid)
    const masonry = new Masonry(grid);
};