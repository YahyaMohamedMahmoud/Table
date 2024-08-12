function searchTable() {
    const input = document.getElementById('search').value.toLowerCase();
    const rows = document.getElementById('domainTable').getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td');
        let match = false;
        
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].innerText.toLowerCase().indexOf(input) > -1) {
                match = true;
                break;
            }
        }
        
        rows[i].style.display = match ? '' : 'none';
    }
}