$("ul").on("click", "#last", function() {
	$(this).find("input:text").toggleClass("completed");
	$(this).find("i:last").toggleClass("fa-square-o fa-check-square-o");
});

$("ul").on("click", "#first", function(event) {
	$(this).parent().fadeOut('500',function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input").on("keypress", function(event) {
	if(event.which === 13) {
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span id='first'><i class='fa fa-times' aria-hidden='true'></i></span><span id='last'><i class='fa fa-square-o'></i></span><input class='todo' type='text' value='" +newTodo+ "'></li>");
	}
});




