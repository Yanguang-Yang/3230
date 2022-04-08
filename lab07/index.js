$(document).ready(function(){

    let table = $('#spreadsheet')
    $.ajax({
        type: 'GET',
        url: 'grades.csv',
        datatype: 'text',
        success: function(response){
            let rows = response.split('\n')
            let tr = $('<tr>')
                let data = rows[0].split(',')
                for (j=0; j<data.length; j++){
                    let th = $('<th>')
                    th.text(data[j])
                    tr.append(th)
                }
                table.append(tr)
                
            for (i=1; i<rows.length; i++){
                let tr = $('<tr>')
                let data = rows[i].split(',')
                let th = $('<th>')
                th.text(data[0])
                tr.append(th)
                for (j=1; j<data.length; j++){
                    let td = $('<td>')
                    td.text(data[j])
                    tr.append(td)
                }
                table.append(tr)
            }
        }
    })

    
})