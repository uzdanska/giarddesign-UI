function hide_show_menu(){
  if($('#nav_list_mobile_devices').hasClass("hidden")){
    $('#nav_list_mobile_devices').removeClass("hidden")
    $('#nav_icon').prop('src', 'dist/assets/close.svg')
  }
  else{
    $('#nav_list_mobile_devices').addClass("hidden")
    $('#nav_icon').prop('src', 'assets/menu.svg')
  }
}
$('#nav_icon').on('click', function(){
  hide_show_menu()
})

$('.dropdownNavbarLink').on("click", function(){
  if($('#dropdownNavbar').hasClass("hidden")){
    $('#dropdownNavbar').removeClass('hidden')
  }else{
    $('#dropdownNavbar').addClass('hidden')
  }
})

$('#dropdownNavbar').on('click', "a", function(){
  $('#dropdownNavbar').addClass('hidden')
})


$('.dropdownNavbarLinkMobile').on("click", function(){
  if($('#dropdownNavbarMobile').hasClass("hidden")){
    $('#dropdownNavbarMobile').removeClass('hidden')
  }else{
    $('#dropdownNavbarMobile').addClass('hidden')

  }
})

$('#dropdownNavbarMobile').on('click', "a", function(){
  $('#dropdownNavbarMobile').addClass('hidden')
  hide_show_menu()
})

$('.nav_links_mobile').on('click', 'a', function(){
  hide_show_menu()
})

$('#Sumbit').on('click', function(){
  $('#loopSearch').addClass('hidden')
})

$('.Loop').on('click', function(){
  if($("#loopSearch").hasClass("hidden")){
    $("#loopSearch").removeClass("hidden")
  }else{
    $("#loopSearch").addClass("hidden")
  }
})
let slideIndex = 1;
showSlides(slideIndex)
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  let i;
  let slides = $(".hero-section");
  let dots = $(".dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides.addClass('hidden');
  }
  
  slides.eq(slideIndex - 1).removeClass('hidden');
}

$('.prev').on('click', function(){
  plusSlides(-1)
})

$('.next').on('click', function(){
  plusSlides(1)
})

$('.LoopMobile').on('click', function(){
  if($("#loopSearch").hasClass("hidden")){
    $("#loopSearch").removeClass("hidden")
  }else{
    $("#loopSearch").addClass("hidden")
  }
})


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

  $(".Project_btn").hover(
    function () {
      $('#Project-title').removeClass("text-black-100 font-normal");
      $(this).addClass("border-green");
      $('#Project-title').addClass("text-green font-extrabold");
    }, 
    function () {
      $(this).removeClass("border-green");
      $('#Project-title').removeClass("text-green font-extrabold");
      $('#Project-title').addClass("text-black-100 font-normal");
    }
 );

 $('.Project_btn').on('click', function() {
    if($('#Project').hasClass('hidden')){
      $('#Project').removeClass('hidden');
      $('#Project_after').addClass('hidden')
    }
    else{
      $('#Project').addClass('hidden');
      $('#Project_after').removeClass('hidden')
    }
 });

 $('.Visualizations_btn').hover(
  function () {
    $('#Visualizations-title').removeClass("text-black-100 font-normal");
    $(this).addClass("border-green");
    $('#Visualizations-title').addClass("text-green font-extrabold");
  }, 
  function () {
    $(this).removeClass("border-green");
    $('#Visualizations-title').removeClass("text-green font-extrabold");
    $('#Visualizations-title').addClass("text-black-100 font-normal");
  }
);

 $('.Visualizations_btn').on('click', function() {
  if($('#Visualizations').hasClass('hidden')){
    $('#Visualizations').removeClass('hidden');
    $('#Visualizations_after').addClass('hidden')
  }
  else{
    $('#Visualizations').addClass('hidden');
    $('#Visualizations_after').removeClass('hidden')
  }
 });

 
 $('.Realizations_btn').hover(
  function () {
    $('#Realizations-title').removeClass("text-black-100 font-normal");
    $(this).addClass("border-green");
    $('#Realizations-title').addClass("text-green font-extrabold");
  }, 
  function () {
    $(this).removeClass("border-green");
    $('#Realizations-title').removeClass("text-green font-extrabold");
    $('#Realizations-title').addClass("text-black-100 font-normal");
  }
);

 $('.Realizations_btn').on('click', function() {
  if($('#Realizations').hasClass('hidden')){
    $('#Realizations').removeClass('hidden');
    $('#Realizations_after').addClass('hidden')
  }
  else{
    $('#Realizations').addClass('hidden');
    $('#Realizations_after').removeClass('hidden')
  }
 });
 
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
