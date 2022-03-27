$(document).ready(function(){

    $("td").click(function(event){                              //click to edit
        if($(this).children("input").length > 0) 
         return false; 
        var tdObj = $(this); 
        var preText = tdObj.html();
        var inputObj = $("<input type='text' />");
        tdObj.html("");
        inputObj 
         .width(tdObj.width())
         .height(tdObj.height()) 
         .val(preText) 
         .appendTo(tdObj)
         .trigger("focus")
         .trigger("select"); 
        inputObj.keyup(function(event){ 
         if(13 == event.which)
         { 
          var text = $(this).val(); 
          tdObj.html(text); 
         } 
         else if(27 == event.which)
         { 
          tdObj.html(preText); 
         } 
        }); 
        inputObj.click(function(){ 
         return false; 
        }); 
       }); 


    $(".edit").click(function() {
        $(this).closest('tr').find('input').prop('disabled', false);
      });
      
    $('input').blur(function(){
        $(this).prop('disabled', true);
    })

    let row = $('.row');
    row.click(selectRow)

    let col = $('tr:first-child th')
    col.click(selectColumn)

    function selectColumn(){
        del()
        let index = $(this).index()
        let s = $('tr td:nth-child(' + (index+1) + ')')
        s.addClass('selected')
    }

    function selectRow(){
        del()
        let index = $('tr th:first-child').index(this)
        let s = $('tr:nth-child(' + (index+1) + ') td')
        s.addClass('selected')
    }

    function del(){
        var sel = document.getElementsByClassName('selected')
        for (var i=sel.length-1; i>=0; --i) {
            sel[i].classList.remove('selected')
        }
    }

    
})