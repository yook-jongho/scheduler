import { addEventList } from "../core/eventRegister.js";
import { buttonTemplate, buttonClick } from "./Button.js";

const button = buttonTemplate("추가하기");

export const sideBarTemplate = `
    <div class="sidebar hidden">
        <input id="todo" type="text" placeholder="할일을 입력하세요"> 
        <input type="time" placeholder="할일을 입력하세요"> 
        ${button}
    </div>
`;

const clickHandle = () => {
    // 버튼 클릭시 timezone에 추가
    const text = document.querySelector("#todo");
    console.log(text.value);
    const timezone = document.querySelector(".timezone");
    timezone.insertAdjacentHTML(
        "beforeend",
        `<span class="text-cyan-700">${text.value}</span>`
    );
};

const buttonEvent = () => {
    buttonClick(clickHandle);
};
addEventList(buttonEvent);
