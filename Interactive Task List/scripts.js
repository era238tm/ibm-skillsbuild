const taskInput = document.querySelector('#input-block input')
const taskSection = document.getElementById('task-list')

taskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    createTask()
  }
})

document.getElementById('add-task').onclick = createTask

function createTask() {
  if (taskInput.value.length === 0) {
    alert('The task field is blank.')
  }
  else {
    taskSection.innerHTML += `
      <div class="task-item">
        <label class="content">
          <input type="checkbox" onclick="updateTask(this)">
          <p>${taskInput.value}</p>
        </label>

        <div class="delete">
          <i class="uil uil-trash"></i>
        </div>
      </div>
    `

    const deleteIcons = document.getElementsByClassName('delete')

    for (let i = 0; i < deleteIcons.length; i++) {
      deleteIcons[i].onclick = function () {
        this.parentNode.remove()
      }
    }
  }
}

function updateTask(taskInput) {
  const taskContent = taskInput.nextElementSibling

  if (taskInput.checked) {
    taskContent.classList.add('checked')
  }
  else {
    taskContent.classList.remove('checked')
  }
}
