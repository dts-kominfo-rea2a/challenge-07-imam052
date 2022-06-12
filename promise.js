const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

//TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let xxi = await promiseTheaterIXX();
  let cgv = await promiseTheaterVGC();

  // tampung semua array di variable cgv
  xxi.forEach(element => {
    cgv.push(element);
  });
  
  const total = cgv.filter(a => a.hasil === emosi).length;
  return total;
}
module.exports = {
  promiseOutput,
};
