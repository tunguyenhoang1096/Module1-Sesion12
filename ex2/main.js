//  Bài 1: Chuyển từ độ C sang độ F.
//  Công thức: °F = (°C × 9 / 5​) + 32
// let doC = Number(prompt("Nhập độ C:"));
// let doF = (doC * 9) / 5 + 32;
// if (!isNaN(doC)) {
//   console.log(`${doC} độ C = ${doF} độ F`);
// } else {
//   console.log("Dữ liệu nhập vào không đúng");
// }

// Bài 2: Chuyển từ mét sang feet
// 1m = 3.28084feet
// let met = Number(prompt("Nhập m:"));
// let feet = 3.28084 * met;
// if (!isNaN(met)) {
//   console.log(`${met} Mét = ${feet} Feet`);
// } else {
//   console.log("Dữ liệu nhập vào không đúng");
// }
// Bài 3: Tính diện tích hình vuông khi biết cạnh a.
// let canhA = Number(prompt("Nhập cạnh a:"));
// let dienTich = canhA * canhA;
// if (canhA >= 0 && !isNaN(canhA)) {
//   console.log(`Diện tích hình vuông có cạnh ${canhA} là: ${dienTich}`);
// } else {
//   console.log("Dữ liệu nhập vào không đúng");
// }
// Bài 7: Giải phương trình bậc 2.
// pt bậc 2 có dạng: ax^2 + bx + c = 0
// delta = b^2 -4ac
let a = Number(prompt("Nhập a"));
let b = Number(prompt("Nhập b"));
let c = Number(prompt("Nhập c"));
// debugger;
if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  // tính delta
  let delta = b * b - 4 * a * c;
  // delta > 0 => PT có 2 nghiệm phân biệt
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`PT có 2 nghiệm`);
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
    /* delta = 0 pt có nghiệm kép*/
  } else if (delta === 0) {
    let nghiemKep = -b / (2 * a);
    console.log(`PT có nghiệm kép`);
    console.log(`x1 = x2 = ${nghiemKep}`);
  } else {
    console.log(`PT vô nghiệm`);
  }
} else {
  console.log("Dữ liệu nhập vào không đúng");
}
