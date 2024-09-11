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
    let words = str.split(' ');
    words = words.map(w => {
        if (w.at(w.length - 1) !== '.') return w.replace(w[0], w[0].toUpperCase());
        return w;
    });
    return words.join(' ');
}

// 4
function saveTasks(missions){
    localStorage.missions = JSON.stringify(missions);
}
function loadTasks(){
    return JSON.parse(localStorage.missions || '[]');
}
function addTask(miss){
    let missionsList = loadTasks();
    missionsList.push(miss);
    saveTasks(missionsList);
}
function removeTask(miss){
    let missionsList = loadTasks();
    missionsList.split(missionsList.indexOf(missionsList.find(e => e.id === miss.id)),1);
    saveTasks(missionsList);
}