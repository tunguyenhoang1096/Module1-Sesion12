// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không và hiển thị ra thông báo bằng console hoặc alert
// let a = Number(prompt("Nhập số a"));
// let b = Number(prompt("Nhập số b"));
// // --kiểm tra a và b có phải số hay không
// if (!isNaN(a) && !isNaN(b)) {
//   // kiểm tra a chia cho b
//   if (a % b === 0) {
//     console.log(`${a} chia hết cho ${b}`);
//   } else {
//     console.log(`${a} không chia hết cho ${b}`);
//   }
// } else {
//   console.log("Dữ liệu nhập vào không đúng");
// }
// // Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10 và hiển thị ra thông báo bằng console hoặc alert.
// let age = Number(prompt("Nhập tuổi(15t trở lên thì đủ tuổi vào lớp 10)"));
// if (!isNaN(age)) {
//   if (age >= 15) {
//     console.log("Đủ tuổi vào lớp 10");
//   } else {
//     console.log("Không đủ tuổi vào lớp 10");
//   }
// } else {
//   console.log("Dữ liệu không đúng");
// }
// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0

// let soNguyen = parseInt(prompt("Nhập vào 1 số nguyên"));
// if (!isNaN(soNguyen)) {
//   if (soNguyen < 0) {
//     console.log(`Số ${soNguyen} là số âm`);
//   } else if (soNguyen > 0) {
//     console.log(`Số ${soNguyen} là số dương`);
//   } else {
//     console.log(`Số ${soNguyen} không là số âm và cũng không là số dương`);
//   }
// } else {
//   console.log("Dữ liệu không đúng");
// }
// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// Cách 1: dùng hàm Math.max() để tìm số lớn nhất trong 3 số
// let soNguyen1 = parseInt(prompt("Nhập vào số nguyên 1"));
// let soNguyen2 = parseInt(prompt("Nhập vào số nguyên 2"));
// let soNguyen3 = parseInt(prompt("Nhập vào số nguyên 3"));
// let max = Math.max(soNguyen1, soNguyen2, soNguyen3);
// if (!isNaN(soNguyen1) && !isNaN(soNguyen2) && !isNaN(soNguyen3)) {
//   console.log(`Số lớn nhất là ${max}`);
// } else {
//   console.log("Dữ liệu không đúng!");
// }
//Cách 2: dùng if.. else : gắn gt max cho a, so sánh max với lần lượt b và c, nếu b > max thì gán lại gt max=b và tiếp tục so sánh max với c

// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ (Xuất Sắc, Giỏi, Khá, Trung Bình, Yếu)
// Xuất sắc: 9-10
// giỏi: 8-9
// khá: 6.5-8
// TB: 5-6.5
// Yếu: <5

let diemKT = Number(prompt("Nhập điểm kiểm tra"));
let diemGiuaKy = Number(prompt("Nhập điểm giữa kỳ"));
let diemCuoiKy = Number(prompt("Nhập điểm cuối kỳ"));
let diemTB = ((diemKT + diemGiuaKy + diemCuoiKy) / 3).toFixed(1);

// debugger;
if (!isNaN(diemTB) && 0 <= diemTB && diemTB <= 10) {
  if (0 <= diemKT && diemKT <= 10 && 0 <= diemGiuaKy && diemGiuaKy <= 10 && 0 <= diemCuoiKy && diemCuoiKy <= 10) {
    if (9 <= diemTB && diemTB <= 10) {
      console.log(`Điểm trung bình là: ${diemTB}`);
      console.log("Xuất sắc");
    } else if (8 <= diemTB && diemTB < 9) {
      console.log(`Điểm trung bình là: ${diemTB}`);
      console.log("Giỏi");
    } else if (6.5 <= diemTB && diemTB < 8) {
      console.log(`Điểm trung bình là: ${diemTB}`);
      console.log("Khá");
    } else if (5 <= diemTB && diemTB < 6.5) {
      console.log(`Điểm trung bình là: ${diemTB}`);
      console.log("TB");
    } else if (diemTB < 5) {
      console.log(`Điểm trung bình là: ${diemTB}`);
      console.log("Yếu");
    }
  } else {
    console.log("Mời nhập lại điểm(từ 0-10)");
  }
} else {
  console.log("Dữ liệu không đúng");
}
