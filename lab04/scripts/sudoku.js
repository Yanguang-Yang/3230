$(document).ready(function(){


   //alert("Hello World")


   var boardData = [
      -1,  1, -1, -1, -1, -1, -1,  9, -1,
      -1, -1,  4, -1, -1, -1,  2, -1, -1,
      -1, -1,  8, -1, -1,  5, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1,  3, -1,
       2, -1, -1, -1,  4, -1,  1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1,  1,  8, -1, -1,  6, -1, -1,
      -1,  3, -1, -1, -1, -1, -1,  8, -1,
      -1, -1,  6, -1, -1, -1, -1, -1, -1
   ];

   //let board = $('#board');

   let board = $('#board');
   for(z=0; z<3; z++){
      let tbody = $('<tbody>');
      for(y=0; y<3; y++){

         let tr = $('<tr>');
         
         for(x=0; x<9; x++){
            let td = $('<td>');
            td.text(boardData[x+9*y+27*z]);
            if(boardData[x+9*y+27*z] == -1){
               td.text(' ')
               td.click(boardClick)
            }
            td.attr("name", x+9*y+27*z)
            //td.text(boardData[x+9*y+27*z]);
            //td.click(boardClick)
            tr.append(td)
         }  
         tbody.append(tr)         
      }
      board.append(tbody)
   }

   //alert($('#board').find("[ord='7']").text())
    
   var undostep = ''

   function boardClick(){
         if(!check($(this).attr('name'))){
            boardData[$(this).attr('name')] = paletteValue;
            $(this).text(paletteValue);
            undostep = $(this)
            //alert($("td[name='7']").text())
            //alert(undostep)
         }
         else{
            $(this).addClass("error")
            //$(this).css("background-color", "red")
            //undostep = $(this)
         }
         
         //alert('error')
   }

   function check(z){                           //check conflict
      var conflict = ''
      var err= ''
      for(x=0; x<81; x++){
         if(boardData[x] == paletteValue){
            x1 = z % 9;
            y1 = Math.floor(z / 9)
            x2 = x % 9
            y2 = Math.floor(x/9)
            //alert(y2)
            
            if(sameBlock(x1, y1, x2, y2) || sameRow(x1, y1, x2, y2) || sameColumn(x1, y1, x2, y2)){
               err=$('#board').find('td').eq(x);
               err.addClass('error')

               //alert(err)
               //err.addClass('error')
               //alert(z)
               
               //$('#board').find("[ord='x']").addClass('error')
               //alert('error')
               
            }
         }
      }
      if(err == ''){
         return false;
      }
      else{
         return true
      }
   }

   let palette = $('#palette');
   for(y=0; y<1; y++){
      let tr = $('<tr>');
      for(x=0; x<9; x++){
         let td = $('<td>');
         td.text(x+1);
         td.click(paletteClick)
         tr.append(td)
      }
      let td = $('<td>');
      td.append("<img src= 'images/undo.png'>")
      td.click(undo)
      tr.append(td)
      palette.append(tr)
   }

   function undo(){
      //alert('1')
      var errorstep = document.getElementsByClassName('error')
      //alert(undostep.length)
      for (var i=errorstep.length-1; i>=0; --i) {
         errorstep[i].classList.remove('error')
      }

      undostep.text(' ')
      boardData[undostep.attr('name')] = -1


      //for(i=0; i<undostep.length; ++i){
         //undostep[i].classList.remove('error')
         //undostep[1].classList.remove('error')
      //}
      //alert(undostep.text())
      //for(i=0; i<undostep.length; i++){
      //   undostep[i].removeClass('error')
      //}
      //undostep.removeClass('error')
   }
      
   var paletteValue = ''
   function paletteClick(){
      paletteValue = $(this).text()
      //alert($(this).text())
   }

   function sameBlock(x1, y1, x2, y2) {
      let firstRow = Math.floor(y1 / 3) * 3;
      let firstCol = Math.floor(x1 / 3) * 3;
      return (y2 >= firstRow && y2 <= (firstRow + 2) && x2 >= firstCol && x2 <= (firstCol + 2));
   }
   
   function sameRow(x1, y1, x2, y2) {
      return y1 == y2;
   }
   
   function sameColumn(x1, y1, x2, y2) {
      return x1 == x2;
   }

})