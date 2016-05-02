$("ul").on("click", "li", function() {
	$(this).find("input:text").toggleClass("completed");
	$(this).find("i:last").toggleClass("fa-square-o fa-check-square-o");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut('500',function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input").on("keypress", function(event) {
	if(event.which === 13) {
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-times' aria-hidden='true'></i></span><i class='fa fa-square-o'></i><input class='todo' type='text' value='" +newTodo+ "'></li>");
	}
});




