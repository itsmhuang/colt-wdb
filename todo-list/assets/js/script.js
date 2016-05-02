$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("ul").on("click", "input:checkbox", function() {
	if($(this).checked) {
		$(this).next().toggleClass("completed");
	}
	else { 
		$(this).next().toggleClass("completed");
	}
});

$("input").on("keypress", function(event) {
	if(event.which === 13) {
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><input type='checkbox'><input class='todo' type='text' value='" +newTodo+ "'><span><i class='fa fa-times' aria-hidden='true'></i></span></li>");
	}
});





