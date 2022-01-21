require.context("../images/avatars/", false, /\.png$/)
import "../images/avatars/image-amyrobson.png";
import { Controller } from "./controllers/controller";
import "./sass/main.sass";
import { DataService } from "./services/data.services";
import { View } from "./views/view";

const app = new Controller(new View(), new DataService());
const test = new DataService