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

const masonry = new Macy({
  container: '#grid-realizacja',
  mobileFirst: true,
  columns: 1,
  breakAt: {
    400: 1,
    700: 2,
    1100: 3,
  },
  margin: {
    x: 20,
    y: 20,
  }
});