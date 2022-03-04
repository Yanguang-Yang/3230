$(document).ready(function(){
    //alert('1')

    var arr = [{"date": "2021/03/02", "duration": "2:51"}, {"date": "2021/03/02", "duration": "2:51"}, {"date": "2021/03/02", "duration": "2:51"}];

    //alert(arr.length)

    let top = $('#top');
    //for(z=0; z<1; z++){
        let tbody = $('<tbody>');
        for(y=0; y<arr.length; y++){
            let tr = $('<tr>');
            //for(x=0; x<1; x++){
                let td1 = $('<td>');
                td1.text(arr[y].date);
                tr.append(td1)
                let td2 = $('<td>');
                td2.text(arr[y].duration);
                tr.append(td2)
                tbody.append(tr)
            //}   
            tbody.append(tr)
        }
        top.append(tbody) 
   // }   
    
})