// init Isotope
var $grid = $(".collection-list").isotope({
    // options
  });
  // filter items on button click
  $(".filter-button-group").on("click", "button", function () {
    var filterValue           = $(this).attr("data-filter");
    resetFilterBtns();
    $(this).addClass("active-filter-btn");
    $grid.isotope({ filter    : filterValue });
  });
  
  var filterBtns              = $(".filter-button-group").find("button");
  function resetFilterBtns() {
    filterBtns.each(function () {
      $(this).removeClass("active-filter-btn");
    });
  }

  function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    
    // supaya negative tidak digunakan 
    if (sumvalue < 0) {
        totalClicks.innerText = 0;
    }
}
  


    