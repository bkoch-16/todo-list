export function setupProjectButtons() {
    const buttonContainer = document.querySelector("#project-buttons")
    
    const generalProject = document.createElement("button")
    generalProject.classList.add("project-button")
    generalProject.id = "projectOne"
    generalProject.textContent = "General"
    buttonContainer.appendChild(generalProject)

    const addProject = document.createElement("button")
    addProject.id = "new-project"
    addProject.textContent = "+"
    buttonContainer.appendChild(addProject)

    return
}

export function loadProject(projectObject) {
    const contentContainer = document.querySelector("#project-content")
    
    const projectTitle = document.querySelector("#active-title")
    projectTitle.textContent = "Title: " + projectObject.title

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