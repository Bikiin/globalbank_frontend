export const validFormatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString(); 
    let day = (date.getDate() + 1).toString();

    day = day.length < 2 ? '0' + day : day;
    month = month.length < 2 ? '0' + month : month;
  
    return `${day}/${month}/${year}`;
}

export const calculateAge = (birth: string) => {
    const birthDate = new Date(birth);
    const today = new Date();
    return today.getFullYear() - birthDate.getFullYear();
}