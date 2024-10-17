import "./styles.css"
import { CreateProject , CreateTask , placeTaskInProject } from "./structure-logic.js"
import { setupProjectButtons , loadProject } from "./display-changes.js";


setupProjectButtons()
let projectDefault= new CreateProject("General");
console.log(projectDefault)
let taskTest = new CreateTask("Finish project", "Wrap up display", "Tomorrow", "HIGH", projectDefault)
placeTaskInProject(taskTest)
loadProject(projectDefault)

