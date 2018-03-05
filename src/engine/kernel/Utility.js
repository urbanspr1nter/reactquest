export default class Utility {
  concat(...arrays) {
    let data = [];

    arrays.forEach((el) => {
      data = data.concat(el);
    });

    return data;
  }
}
