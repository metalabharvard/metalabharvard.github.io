//for projects page current / past nav
/*
$(".short.2016").removeClass("hidden");

$(".nav a").on("click",function() {
	$(".short").addClass("hidden");
	var switchField = $(this).attr("data-switch");
	if($(this).attr("data-type") == "on") {
		$(".short."+switchField).removeClass("hidden");
	} else {
		$(".short:not(."+switchField+")").removeClass("hidden");
	}
	
});
*/
$(".nav_filter .filter_sel").on("click",function() {
	var get_type = $(this).attr('id');
	console.log(get_type);
	if(get_type == '*'){
		get_type = '*';
	}else{
		get_type = '.'+$(this).attr('id');	
	}
	$grid.isotope({ filter: get_type })
	

	if(get_type == '*'){
		$grid.on( 'arrangeComplete', function( event, filteredItems ) {
		  	$('.view_all').hide();
		});
	}else{
		$('.view_all').show();
	}
});


$grid.on( 'arrangeComplete', function( event, filteredItems ) {
  //run_continuous_scroll();
});

$grid.on( 'layoutComplete', function( event, filteredItems ) {
  //run_continuous_scroll();
});