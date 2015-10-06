

$("#nyanupload").click( function() {
    alert('im called');
    var file_data = $("#sortpicture").prop("files")[0];   
    var form_data = new FormData();                  
    form_data.append("file", file_data)
    alert(form_data);                             
    $.ajax({
                url: "/uploads",
                dataType: 'script',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,                         
                type: 'post',
                success: function(){
                    alert("works"); 
                }
     });
});
