// 1
function filterAndSortEvenNumbers(arr = []){
    arr = arr.filter(e => e % 2 === 0);
    arr.sort((a, b) => a - b);
    return arr;
}

// 2
function removeDuplicates(arr = []){
    arr.sort((a, b) => a -b);
    let num;
    arr = arr.filter(n => {if (n !== num){ num = n; return n;}});
    return arr;
}

// 3
function capitalizeFirstLetter(str){
    return str;
}

// 4
function saveTasks(){

}
function loadTasks(){

}
function addTask(){

}
function removeTask(){

}