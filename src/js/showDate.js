function convertDate(value) {
  return value < 10 ? `0${value}` : value;
}

export default function showDate(value) {
  const currentDate = new Date(value);
  const day = convertDate(currentDate.getDate());
  const month = convertDate(currentDate.getMonth() + 1);
  const year = convertDate(currentDate.getFullYear());
  const hour = convertDate(currentDate.getHours());
  const min = convertDate(currentDate.getMinutes());
  const sec = convertDate(currentDate.getSeconds());
  return `${hour}:${min}:${sec} ${day}.${month}.${year}`;
}
