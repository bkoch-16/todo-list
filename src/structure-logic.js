export class CreateProject {
    constructor(title) {
        this.title = title;
        this.list = [];
    }
}

export class CreateTask {
    
    
    constructor(myProjects) {
        const title = document.querySelector("#task-title-input").value
        const desc = document.querySelector("#task-desc-input").value
        const dueDate = document.querySelector("#task-due-date-input").value
        const priority = document.querySelector("#task-priority-dropdown").value

        let projectName
        for (let i = 0; i < myProjects.length; i++) {
            if (document.querySelector("#task-project-dropdown").value === myProjects[i].title) {
                projectName = myProjects[i]
                break
            }
        }

        this.title = title
        this.desc = desc
        this.dueDate = dueDate
        this.priority = priority
        this.checklist = false
        this.projectName = projectName
        
    }
}

export function placeTaskInProject(taskObject) {
    taskObject.projectName.list.push(taskObject)
    console.log(taskObject.projectName.list)
}

export function createNewProject(myProjects) {
    let title = document.querySelector("#project-title-input").value
    let newProject = new CreateProject(title)
    myProjects.push(newProject)
    console.log(myProjects)
    return myProjects
}