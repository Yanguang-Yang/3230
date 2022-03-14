$(document).ready(function(){

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