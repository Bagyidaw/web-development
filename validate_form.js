/* global $ */

	
function validate() {
	var first_name = $("#firstname").val();
	var last_name = $("#lastname").val();
	$(':text,textarea').each( function() {
		if($(this).val().length==0) {
			$(this).css('border,2px solid red');
			
		}
		
		
	})
	if(first_name == "" || last_name =="") {
		return false;
	}
		
	return true;
		
}