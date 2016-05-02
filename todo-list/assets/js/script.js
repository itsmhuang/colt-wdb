$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("ul").on("click", "i:first", function() {
	$(this).next().toggleClass("completed");
	$(this).toggleClass("fa-square-o fa-check-square-o");
});

$("input").on("keypress", function(event) {
	if(event.which === 13) {
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><i class='fa fa-square-o'></i><input class='todo' type='text' value='" +newTodo+ "'><span><i class='fa fa-times' aria-hidden='true'></i></span></li>");
	}
});




