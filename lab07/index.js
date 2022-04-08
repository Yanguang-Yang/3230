$(document).ready(function(){

    let table = $('#spreadsheet')
    $.ajax({
        type: 'GET',
        url: 'grades.csv',
        datatype: 'text',
        success: function(response){
            let rows = response.split('\n')
            for (i=0; i<rows.length; i++){
                let tr = $('<tr>')
                let data = rows[i].split(',')
                for (j=0; j<data.length; j++){
                    let td = $('<td>')
                    td.text(data[j])
                    tr.append(td)
                }
                table.append(tr)
            }
        }
    })

    
})