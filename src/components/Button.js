export const buttonTemplate = (text) => {
    return `
        <div class="button bg-blue-500 text-white rounded-lg w-20 text-center">
            ${text}
        </div>
`;
};

export const buttonClick = (event) => {
    const btn = document.querySelector(".button");
    btn.addEventListener("click", event);
};
