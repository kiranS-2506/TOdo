const data = document.getElementById("inp")
const tlist=document.getElementById('list')
const tc = document.getElementById("taskc")
const fc = document.getElementById("fc")
const todolist = []
let completedtasks = 0
function add(){
    if (data.value.trim() == ""){
        alert("Please Add valid Task")
    }
    else {
        todolist.push(data.value)

        displaydata()
        data.value=""

    }
}
function displaydata(){
    tlist.textContent=""
    tc.textContent=`${todolist.length}`
    fc.textContent = `${completedtasks}`
    todolist.forEach((li,i) => {
        const listitems = document.createElement('li')
        listitems.classList.add("listitem")
        const cb = document.createElement('input')
        cb.type='checkbox'
        cb.checked = false;
        

        cb.addEventListener('click', () => {
            if (cb.checked) {
                completedtasks++;
                cb.checked = true;
            }
            else{
                completedtasks--;
                cb.checked = false;
            }

            fc.textContent = `${completedtasks}`
            
        });
        const para = document.createElement('p')
        para.textContent=li
        const btn = document.createElement('button')
        btn.onclick = function (){
            let con = confirm("are you sure remove task.?")
            if (con){
                todolist.splice(i,1)
                completedtasks--;
                displaydata()
                fc.textContent = `${completedtasks}`
            }
            
        }
        btn.textContent = "❎"
        listitems.append(cb,para,btn)
        tlist.appendChild(listitems)
    })


}