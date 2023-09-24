export const formatDate = (num: number) => {
  const dateObject = new Date(num * 1000);

  const day = dateObject.getUTCDate();
  const month = dateObject.getUTCMonth() + 1;
  const year = dateObject.getUTCFullYear();

  const formatHour = (hour: number) => (hour < 10 ? `0${hour}` : hour);
  const hour = formatHour(dateObject.getUTCHours());

  const formattedDate = `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }`;

  return {
    day,
    month,
    year,
    hour,
    formattedDate,
  };
};
