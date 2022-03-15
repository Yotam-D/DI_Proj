let submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', saveData)
let taskId = 1;
class taskCard{
    constructor([name, description, startDate, endDate]){
        this.name = name
        this.description  = description
        this.startDate = startDate
        this.endDate = endDate
        this.isComplete = false
    }
} 



function saveData(event) {
    event.preventDefault()
    console.log(event);
    let inputs = [...document.querySelectorAll('input')]
    results = inputs.map(inp => inp.value)
    let newTask = new taskCard(results);
    console.log(taskId);
    localStorage.setItem(taskId , JSON.stringify(newTask));
    taskId++;
}

function crateTask(){
    let coint = document.querySelector('.cointainer')
    

}