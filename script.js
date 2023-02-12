// Variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event Listener for + Button
 
addTask.addEventListener("click", function(){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === "") {
        alert('Please enter a task!');
    } 
    else {
        taskContainer.appendChild(task);
    }
    
    inputTask.value = "";

    checkButton.addEventListener('click', function() {
        checkButton.parentElement.style.textDecoration = "line-through"
    });

    // deleteButton.addEventListener('click', function(e){
    //     let target = e.target;
    //     target.parentElement.remove();
    //     console.log(target);
    // });

    deleteButton.addEventListener('click', function(e){
        let target = e.target;
        //Note that the trash-can icon is child element of the delete button. 
        //Delete button is child element of "task"
        //task is child element of task container
        //Our goal is to delete the "task" ONLY, not the whole task container (every task will be gone)
        //Thus, check if we clicked on the trash-can or the delete button (there is a diff)
        //If we clicked on trash-can (tagname = i but capitalized in tagName), then go parentElement -> parentElement twice.
        //If we clicked on the delete button, then just parentElement once
        if(target.tagName === 'I'){
            target.parentElement.parentElement.remove();
        }else{
            target.parentElement.remove();
        }
    })
});