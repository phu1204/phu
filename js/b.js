let table = document.querySelector('.table');
let tableRow = document.getElementById('table-data');
console.log(tableRow)
table.onclick = function(e){
    if(e.target.className == 'remove-button'){
        let row = e.target.parentElement.parentElement;
        let tabelRows = e.target.parentElement.parentElement.parentElement;
        var result = confirm('Bạn có muốn xóa không ?')
        
        if(result){
            tabelRows.removeChild(row);
        }
    }
   
}
let newRow = localStorage.getItem('newProduct');
console.log(newRow)
if(newRow){
    tableRow.insertAdjacentHTML('beforeend', newRow);
    localStorage.clear();
}
