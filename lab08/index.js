$(document).ready(function(){

    $('#MovieForm').submit(function(event){
        event.preventDefault();
        let ML = $('#LocationSelect').val()
        let dt = $('#date').val()
        $.ajax({
            type: 'GET',
            url: 'showtimes.json',
            success: function(data){
                console.log(data)
                $('#result').html('')
                $.each(data, function(key, value){
                    if(value.location == ML && value.date == dt){
                        $('#result').append(value.title + ' ' + value.times + '<br>')
                    }
                })
            }
        })
    })








})