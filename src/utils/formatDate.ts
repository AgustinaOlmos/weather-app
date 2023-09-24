export const formatDate = (num: number) => {
  const dateObject = new Date(num * 1000);

  const day = dateObject.getUTCDate();
  const month = dateObject.getUTCMonth() + 1;
  const year = dateObject.getUTCFullYear();

  // Función para formatear la hora con dos dígitos
  const formatHour = (hour: number) => (hour < 10 ? `0${hour}` : hour);
  const hour = formatHour(dateObject.getUTCHours());

  // devuelve la fecha en el formato "DD/MM/YYYY"
  const formattedDate = `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }`;
  //  const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`

  return {
    day,
    month,
    year,
    hour,
    formattedDate,
  };
};
