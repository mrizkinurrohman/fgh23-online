const janjian = new Promise((resolve, reject) => {
  setTimeout(function () {
    const cuaca = "cerah";
    if (cuaca == "cerah") {
      resolve({
        status: 300,
        msg: "Sukses",
      });
      return;
    }
    return reject(new Error("Gagal"));
  }, 1000);
});

janjian
  .then(function (res) {
    // console.log(res);
    // if (res.status != 200) {
    //   throw new Error("Forbidden");
    // }
    // console.log(res.msg)
    return res.msg;
    // hasil return akan menjadi input then berikutnya
  })
  .then(function (inputFromThen) {
    console.log(inputFromThen);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// IIFE => Immediately Invoked Function Expression
// (async function () {
//   try {
//     const janjianResult = await janjian;
//     if (janjianResult === "Sukses") console.log(1);
//     console.log(janjianResult);
//   } catch (err) {
//     console.log(err);
//   }
// })();
