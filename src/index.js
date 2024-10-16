import "./styles.css"
import { CreateProject , CreateTask , placeTaskInProject } from "./structure-logic.js"
import { setupProjectButtons } from "./display-changes.js";


setupProjectButtons()
let projectDefault= new CreateProject("General");
let taskTest = new CreateTask("Finish project", "Wrap up display", "Tomorrow", "HIGH", projectDefault)
placeTaskInProject(taskTest)

