const button = document.getElementById('button')
const tasks = []
const toDo = document.getElementById("list")
const today = new Date()
const hour = today.getHours()
const min = today.getMinutes()
const day = today.getDate()
const month = String(today.getMonth())
const year = today.getFullYear()


const date = document.getElementById('date')
date.innerHTML = `${day}-${(month.length == 1)?"0"+month:month}-${year}`


function formatTime () {

    const H = (hour>12) ? hour - 12 : hour
    const amPm = (hour > 12)? "pm" : "am"
    return (`${H}:${min} ${amPm}`)
}

console.log(hour)
function addTask () {
    const input = document.getElementById('input').value
    if(input){
        tasks.push(input)
        const listHtml = tasks.map((task) => `<li><span>${task}</span><span class="time">${formatTime()}</span></li>`).join('')
        toDo.innerHTML = listHtml
        document.getElementById('input').value = ""
    }


}

