window.onload = function(e){
    const allBookings = getItemFromLocalStorage("booking")  
    const tableBody = document.querySelector("#myTickets")
    let html = "";
    allBookings.forEach(function(value,key){
        html += "<tr>"+
        "<td>"+value.name+"</td>"+
        "<td>"+value.boardingStation+"</td>"+
        "<td>"+value.destinationStation+"</td>"+
        "<td>"+value.phone+"</td>"+
        "<td>"+value.date+"</td>"+
        "<td>"+value.classes+"</td>"+
        "<td>"+value.category+"</td>"+
    "</tr>" 
    })
    tableBody.innerHTML = html;
}