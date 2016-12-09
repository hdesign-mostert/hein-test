/* =================================
SAME HEIGHT
===================================  */
equalheight = function (container) {

    var currentTallest = 0,
         currentRowStart = 0,
         rowDivs = new Array(),
         $el,
         topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $el.height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);

        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function () {
    equalheight('.equal-height .same-height')
});


$(window).resize(function () {
    equalheight('.equal-height .same-height');
});

/* =================================
Parallax
=================================== */
$(document).ready(function(){
	// Parallax
    if (($(window).width() >= 1024)) {
        $(".parallax").parallax("50%", 0.3);
    }
	// Parallax Section BG
	var pageSection = $(".parallax-section, .section, .page-section, .small-section");
    pageSection.each(function(indx){

        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
});

