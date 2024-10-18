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
            newProjectButton.id=`project-${i}`
            newProjectButton.classList.add("project-button")
            newProjectButton.textContent = myProjects[i].title
            buttonContainer.insertBefore(newProjectButton, referenceButton)

            const newProjectOption = document.createElement("option")
            newProjectOption.value = newProjectButton.textContent
            newProjectOption.textContent = newProjectButton.textContent
            projectDropdown.appendChild(newProjectOption)
        }
    }
}

export function loadProject(projectObject) {
    const contentContainer = document.querySelector("#project-content")
    
    const projectTitle = document.querySelector("#active-title")
    projectTitle.textContent = "Project: " + projectObject.title

    const projectContent = document.createElement("div")
    projectContent.id = "activeProjectContent"


    let i = 0
    while (i < projectObject.list.length) {
        const taskContent = document.createElement("div")
        taskContent.classList.add("taskContent")

        const taskCheckBox = document.createElement("input")
        taskCheckBox.type = "checkbox"
        taskCheckBox.classList.add("taskCheckBox")
        taskContent.appendChild(taskCheckBox)

        const taskTitle = document.createElement("span")
        taskTitle.classList.add("taskTitle")
        taskTitle.textContent = projectObject.list[i].title
        taskContent.appendChild(taskTitle)
        
        const taskDesc = document.createElement("span")
        taskDesc.classList.add("taskDesc")
        taskDesc.textContent = projectObject.list[i].desc
        taskContent.appendChild(taskDesc)

        const taskDueDate = document.createElement("span")
        taskDueDate.classList.add("taskDueDate")
        taskDueDate.textContent = projectObject.list[i].dueDate
        taskContent.appendChild(taskDueDate)

        projectContent.appendChild(taskContent)
        i++
    }
    contentContainer.appendChild(projectContent)
}

