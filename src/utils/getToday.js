const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = dayOfWeek[today.getDay()];

export const crntDate = `${year}년 ${month}월 ${date}일 ${day}요일`;
