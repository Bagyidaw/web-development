
 $(document).ready(function(){
    $('.add_more').click(function(e){
        e.preventDefault();
        $(this).before("<input name='file[]' type='file'/>");
    });
});
