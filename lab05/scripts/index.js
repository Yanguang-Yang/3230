$(document).ready(function(){

    let row = $('tr');
    row.click(selectRow)

    let col = $('tr:first-child th')
    col.click(selectColumn)

    let one = $('tr:first-child th:first-child')
    one.click(del)

    function selectColumn(){
        let index = $(this).index()
        //alert(index)
        let s = $('tr td:nth-child(' + (index+1) + ')')
        //$('tr:nth-child(2) td').addClass('selected')
        s.addClass('selected')
    }

    function selectRow(){
        let index = $(this).index()
        //alert(index)
        let s = $('tr:nth-child(' + (index+1) + ') td')
        s.addClass('selected')
    }

    function del(){
        var sel = document.getElementsByClassName('selected')
        //alert(sel.length)
        for (var i=sel.length-1; i>=0; --i) {
            sel[i].classList.remove('selected')
        }
    }

})