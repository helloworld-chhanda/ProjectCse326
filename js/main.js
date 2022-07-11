function onFormSubmit(e){
    e.preventDefault();
    console.log(e);
    const previousBookings = getItemFromLocalStorage("booking")
    const allBookings = previousBookings || []
    const currentBookings = {
        name: e.target.elements.name?.value,
        phone: e.target.elements.phone?.value,
        boardingStation: e.target.elements.boardingStation?.value,
        date: e.target.elements.date?.value,
        destinationStation: e.target.elements.destinationStation?.value,
        classes: e.target.elements.classes?.value,
        category: e.target.elements.category?.value,
    }
    allBookings.push(currentBookings)
    setItemToLocalStorage("booking",allBookings)
    swal({
        title: "Good job!",
        text: "Your ticket has been booked successfully!",
        icon: "success",
        button: "Ok",
      }).then(function(){
          location.reload()
      })
}


