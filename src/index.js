import "./styles.css"
import { CreateProject , CreateTask , createNewProject , findProjectIndex } from "./structure-logic.js"
import { setupProjectButtons , loadProject, loadNewProjectButtons, connectNewProjectButtons } from "./display-changes.js";

let myProjects
const storedProjects = localStorage.getItem('myProjects')

if (storedProjects) {
    try {
        myProjects = JSON.parse(storedProjects);
        console.log('STORED')
        console.log(myProjects[0])
        setupProjectButtons()
        loadProject(myProjects[0], myProjects)
        loadNewProjectButtons(myProjects)
        connectNewProjectButtons(myProjects)
    } catch (error) {
        console.error('Error parsing local storage data:', error);
        myProjects = [];
    }
}
else {
    myProjects = [];
    myProjects[0]= new CreateProject("General");
    setupProjectButtons();
    loadProject(myProjects[0], myProjects)
    loadNewProjectButtons(myProjects)
    connectNewProjectButtons(myProjects)
    localStorage.setItem('myProjects', JSON.stringify(myProjects))
}

console.log(myProjects)


let newTaskButton = document.querySelector("#new-task")
let newTaskForm = document.querySelector("#new-task-form")
let taskDialog = document.querySelector("#taskDialog")
let taskCancel = document.querySelector("#task-cancel-button")

newTaskButton.addEventListener('click', () => {
    newTaskForm.style.display = "block"
    taskDialog.showModal()
})

taskCancel.addEventListener('click', () => {
    taskDialog.close()
    newTaskForm.reset()
})

newTaskForm.addEventListener('submit', () => {
    event.preventDefault()
    let newTask = new CreateTask(myProjects)
    console.log(newTask)
    console.log(myProjects)
    let index = findProjectIndex(myProjects, newTask)
    myProjects[index].list.push(newTask)
    console.log(myProjects)
    loadProject(myProjects[index], myProjects)
    localStorage.setItem('myProjects', JSON.stringify(myProjects))
    newTaskForm.reset()
    document.querySelector("#task-title-input").focus()
})

let newProjectButton = document.querySelector("#new-project")
let newProjectForm = document.querySelector("#new-project-form")
let projectDialog = document.querySelector("#projectDialog")
let projectCancel = document.querySelector("#project-cancel-button")

newProjectButton.addEventListener('click', () => {
    newProjectForm.style.display = "block"
    projectDialog.showModal()
})

projectCancel.addEventListener('click', () => {
    projectDialog.close()
    newProjectForm.reset()
})

newProjectForm.addEventListener('submit', () => {
    event.preventDefault()
    createNewProject(myProjects)
    loadNewProjectButtons(myProjects)
    connectNewProjectButtons(myProjects)
    localStorage.setItem('myProjects', JSON.stringify(myProjects))
    newProjectForm.reset()
    document.querySelector("#project-title-input").focus()
})




