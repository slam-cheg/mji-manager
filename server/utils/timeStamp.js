export const timeStamp = () => {
    const date = new Date();
    const day = setZeros(date.getDate());
    const month = setZeros(date.getMonth() + 1);
    const year = setZeros(date.getFullYear());
    const hour = setZeros(date.getHours());
    const minutes = setZeros(date.getMinutes());
    const seconds = setZeros(date.getSeconds());
  
    function setZeros(num) {
      if (num < 10) {
        return `0${num}`;
      }
      return `${num}`;
    }
  
    return `${day}.${month}.${year} at ${hour}:${minutes}:${seconds}`;
  }