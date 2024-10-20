export function setupProjectButtons() {
    const buttonContainer = document.querySelector("#project-buttons")
    
    const generalProject = document.createElement("button")
    generalProject.classList.add("project-button")
    generalProject.id = "project-1"
    generalProject.textContent = "General"
    buttonContainer.appendChild(generalProject)

    const projectDropdown = document.querySelector("#task-project-dropdown")
    
    const projectOne = document.createElement("option")
    projectOne.value = generalProject.textContent
    projectOne.textContent = generalProject.textContent
    projectDropdown.appendChild(projectOne)

    const addProject = document.createElement("button")
    addProject.id = "new-project"
    addProject.textContent = "+"
    buttonContainer.appendChild(addProject)

    return
}

export function loadNewProjectButtons(myProjects) {
    const buttonContainer = document.querySelector("#project-buttons")
    const referenceButton = document.querySelector("#new-project")
    const projectDropdown = document.querySelector("#task-project-dropdown")

    for (let i = 0; i < myProjects.length; i++) {
        if (document.querySelector(`#project-${i+1}`) === null) {
            console.log(`test-${i}`)
            const newProjectButton = document.createElement("button")
            newProjectButton.id=`project-${i+1}`
            newProjectButton.classList.add("project-button")
            console.log(myProjects[i].title)
            newProjectButton.textContent = myProjects[i].title
            buttonContainer.insertBefore(newProjectButton, referenceButton)

            const newProjectOption = document.createElement("option")
            newProjectOption.value = newProjectButton.textContent
            newProjectOption.textContent = newProjectButton.textContent
            projectDropdown.appendChild(newProjectOption)
        }
    }
}

export function connectNewProjectButtons(myProjects) {

    for (let i = 0; i < myProjects.length; i++) {
        console.log(myProjects)
        let projectButtonId = `#project-${i+1}`
        console.log(projectButtonId)
        const activateProject = document.querySelector(projectButtonId)
        console.log(activateProject)
        activateProject.addEventListener('click', () => {
            loadProject(myProjects[i])
        })


    }
}

export function connectTaskElements(projectObject) {
    const projectTitle = document.querySelector("#active-title")
    for (let i = 0; i < projectObject.list.length; i++) {
        const taskContent = document.getElementById(i)
        const checkBox = taskContent.querySelector(".taskCheckBox")
        checkBox.addEventListener('change', () => {
            projectObject.list[i].checklist = 
                (projectObject.list[i].checklist === true) ? 
                projectObject.list[i].checklist = false : 
                projectObject.list[i].checklist = true
        })

        const viewButton = taskContent.querySelector(".viewTask")
        viewButton.addEventListener('click', () => {
            createViewDialog(projectObject.list[i])
            connectTaskElements(projectObject)
        })

        const deleteButton = taskContent.querySelector(".deleteTask")
        deleteButton.addEventListener('click', () => {
            projectObject.list.splice(i,1)
            loadProject(projectObject)
        })

        if (document.querySelector("#closeDialog")) {
            const closeButton = document.querySelector("#closeDialog")
            closeButton.addEventListener('click', () => {
                viewDialog.close()
            })
        }
        
    }
}

export function createViewDialog(taskObject) {
    const viewDialog = document.querySelector("#viewDialog")
    const dialogContent = document.querySelector("#dialogContent")

    const dialogTitle = document.createElement("span")
    dialogTitle.id = "dialogName"
    dialogTitle.textContent = taskObject.title
    dialogContent.appendChild(dialogTitle)

    const dialogDesc = document.createElement("span")
    dialogDesc.id = "dialogDesc"
    dialogDesc.textContent = taskObject.desc
    dialogContent.appendChild(dialogDesc)

    const dialogDueDate = document.createElement("span")
    dialogDueDate.id = "dialogDueDate"
    dialogDueDate.textContent = taskObject.dueDate
    dialogContent.appendChild(dialogDueDate)

    const dialogPriority = document.createElement("span")
    dialogPriority.id = "dialogPriority"
    dialogPriority.textContent = taskObject.priority
    dialogContent.appendChild(dialogPriority)

    const closeDialog = document.createElement("button")
    closeDialog.id = "closeDialog"
    closeDialog.textContent = "x"
    dialogContent.appendChild(closeDialog)

    viewDialog.showModal()
}

export function loadProject(projectObject) {
    const contentContainer = document.querySelector("#project-content")
    const projectTitle = document.querySelector("#active-title")
    projectTitle.textContent = projectObject.title

    const oldContentToRemove = document.querySelector("#activeProjectContent")

    if (oldContentToRemove) {
        contentContainer.removeChild(oldContentToRemove)
    }

    const projectContent = document.createElement("div")
    projectContent.id = "activeProjectContent"

    

    let i = 0
    while (i < projectObject.list.length) {
        const taskContent = document.createElement("div")
        taskContent.classList.add("taskContent")
        taskContent.id = i

        const taskCheckBox = document.createElement("input")
        taskCheckBox.type = "checkbox"
        taskCheckBox.classList.add("taskCheckBox")
        taskContent.appendChild(taskCheckBox)

        const taskTitle = document.createElement("span")
        taskTitle.classList.add("taskTitle")
        taskTitle.textContent = projectObject.list[i].title
        taskContent.appendChild(taskTitle)
        
        /*
        const taskDesc = document.createElement("span")
        taskDesc.classList.add("taskDesc")
        taskDesc.textContent = projectObject.list[i].desc
        taskContent.appendChild(taskDesc)
        */

        const taskDueDate = document.createElement("span")
        taskDueDate.classList.add("taskDueDate")
        taskDueDate.textContent = projectObject.list[i].dueDate
        taskContent.appendChild(taskDueDate)

        const deleteTask = document.createElement("button")
        deleteTask.classList.add("deleteTask")
        deleteTask.textContent = "Del"
        taskContent.appendChild(deleteTask)

        const viewTask = document.createElement("button")
        viewTask.classList.add("viewTask")
        viewTask.textContent = "View"
        taskContent.appendChild(viewTask)

        projectContent.appendChild(taskContent)
        i++
    }
    contentContainer.appendChild(projectContent)
    connectTaskElements(projectObject)
}

