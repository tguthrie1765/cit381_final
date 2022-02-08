export function searchByKeyword(data = [], keyword = "", value = "") {
  let finalArray = [];

  for (let i = 0; i < data.length; i++) {
    let obj1 = data[i];
    if (
      obj1[keyword] &&
      obj1[keyword].toLowerCase().indexOf(value.toLowerCase()) >= 0
    ) {
      console.log(true);
      console.log(obj1[keyword]);
      finalArray.push(obj1);
    }
  }
  return finalArray;
}
