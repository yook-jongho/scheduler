// import { todoListTemplate, buttonEvent } from "./components/TodoList.js";
import { weeklyTemplate } from "./components/weekly.js";
import { eventRegister } from "./core/eventRegister.js";

export function App() {
    const app = document.querySelector("#app");
    // app.innerHTML = todoListTemplate;
    app.insertAdjacentHTML("afterbegin", weeklyTemplate);
    eventRegister();
}
