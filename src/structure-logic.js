export class CreateProject {
    constructor(title) {
        this.title = title;
        this.list = [];
    }
}

export class CreateTask {
    constructor(title, desc, dueDate, priority, projectName) {
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
