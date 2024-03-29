import { addEventList } from "../core/eventRegister.js";
import { crntDate } from "../utils/getToday.js";
import { sideBarTemplate } from "./sidebar.js";

const timeList = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "06:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "00:00",
];

export const weeklyTemplate = `
    <div class="mb-10 text-4xl font-bold">${crntDate}</div>
    <div class="flex flex-row gap-10">
        <div class="flex flex-col w-[680px] h-[700px] overflow-y-scroll scrollbar-hide">
            ${timeList
                .map(
                    (time) => `
                    <div class="flex flex-row h-[200px]">
                        <span class="w-1/5"> <hr> ${time}  </span>
                        <div class="timezone w-4/5 h-[200px]"> 
                            <hr>
                        </div>
                    </div>`
                )
                .join("")}            
        </div>
        ${sideBarTemplate}
    </div>
`;

const clickHandle = () => {
    // 클릭하면 sidebar display 보이게 하기
    const sidebar = document.querySelector(".sidebar");
    const crntDisplay = sidebar.style.display;
    sidebar.style.display = crntDisplay === "none" ? "block" : "none";
};

const timeZoneClick = () => {
    const timeZoneElements = document.querySelectorAll(".timezone");
    timeZoneElements.forEach((element) => {
        element.addEventListener("click", clickHandle);
    });
};

addEventList(timeZoneClick);
