let eventList = [];
export const addEventList = (eventHandler) => {
    eventList.push(eventHandler);
};
export const eventRegister = () => {
    for (let i = eventList.length - 1; i >= 0; i--) {
        eventList[i]();
        eventList.pop();
    }
};
