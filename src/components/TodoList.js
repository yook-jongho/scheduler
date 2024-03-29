import { addEventList } from "../core/eventRegister.js";
import { buttonTemplate, buttonClick } from "./Button.js";

let todo = ["item1", "item2"];

const button = buttonTemplate("추가");
export const buttonEvent = () => {
    buttonClick(clickHandle);
};
addEventList(buttonEvent);

export const todoListTemplate = `
        <ul class="todolist">
            ${todo.map((item) => `<li> ${item}</li>`).join("")}
        </ul>
        ${button}
`;

const render = (newItem) => {
    const target = document.querySelector(".todolist");
    const newElement = document.createElement("li");
    newElement.textContent = newItem;
    target.appendChild(newElement);
};

const clickHandle = () => {
    const newItem = `item${todo.length + 1}`;
    todo = [...todo, newItem];
    render(newItem);
};
