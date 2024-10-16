export function setupProjectButtons() {
    const buttonContainer = document.querySelector("#project-buttons")
    
    const generalProject = document.createElement("button")
    generalProject.classList.add("project-button")
    generalProject.textContent = "General"
    buttonContainer.appendChild(generalProject)

    const addProject = document.createElement("button")
    addProject.id = "new-project"
    addProject.textContent = "+"
    buttonContainer.appendChild(addProject)

    return
}
