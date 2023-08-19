
$('#nav_icon').on('click', function(){
  if($('#nav_list_mobile_devices').hasClass("hidden")){
    $('#nav_list_mobile_devices').removeClass("hidden")
    $('#nav_icon').prop('src', 'assets/close.svg')
  }
  else{
    $('#nav_list_mobile_devices').addClass("hidden")
    $('#nav_icon').prop('src', 'assets/menu.svg')
  }
})

$('.dropdownNavbarLink').on("click", function(){
  if($('#dropdownNavbar').hasClass("hidden")){
    $('#dropdownNavbar').removeClass('hidden')
  }else{
    $('#dropdownNavbar').addClass('hidden')
  }
})

$('.dropdownNavbarLinkMobile').on("click", function(){
  if($('#dropdownNavbarMobile').hasClass("hidden")){
    $('#dropdownNavbarMobile').removeClass('hidden')
  }else{
    $('#dropdownNavbarMobile').addClass('hidden')
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
    550: 2,
    1100: 3,
  },
  margin: {
    x: 20,
    y: 20,
  }
});
  $('.grid-item img').on('click', function(){
    console.log( $(this).prop('src'))
    $('#modal').removeClass('hidden');
    $('.modal-content').attr('src', $(this).prop('src'))
  });

  $('.modal-close').on("click", function() {
    $('#modal').addClass("hidden")
  })

  $('.Expand-btn').on('click', function() {
    $('.grid-item.hidden').removeClass('hidden');
    $('.Expand').addClass('hidden');
    const masonry = new Macy({
      container: '#grid-realizacja',
      mobileFirst: true,
      columns: 1,
      breakAt: {
        400: 1,
        550: 2,
        1100: 3,
      },
      margin: {
        x: 20,
        y: 20,
      }
    });
    $('.Hide').removeClass('hidden')
  })

  $('.Hide').on('click', function() {
    $('.grid-item.hidden').removeClass('hidden');
    $('.Hide').addClass('hidden');
    const masonry = new Macy({
      container: '#grid-realizacja',
      mobileFirst: true,
      columns: 1,
      breakAt: {
        400: 1,
        550: 2,
        1100: 3,
      },
      margin: {
        x: 20,
        y: 20,
      }
    });
    $('.Expand').removeClass('hidden')
  })