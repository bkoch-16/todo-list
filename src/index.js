import "./styles.css"
import { CreateProject , CreateTask , placeTaskInProject } from "./structure-logic.js"



let projectDefault= new CreateProject("General");
let taskTest = new CreateTask("Finish project", "Wrap up display", "Tomorrow", "HIGH", projectDefault)
placeTaskInProject(taskTest)

