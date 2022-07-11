function getItemFromLocalStorage(key){
    const result = localStorage.getItem(key)
    const newResult = JSON.parse(result)
    return newResult
}
function setItemToLocalStorage(key,value){
    const newValue = JSON.stringify(value)
    localStorage.setItem(key,newValue) 
    return newValue
}
