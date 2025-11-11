// Bài 2: Tính giai thừa của một số nguyên dương
// CHo ng dùng nhập vào 1 số nguyên dương
let giaiThua = 1;
let soNguyen = Number(prompt("Nhập vào 1 số nguyên dương"));
while (isNaN(soNguyen) || soNguyen < 0 || soNguyen % 1 !== 0) {
  soNguyen = Number(prompt("Dữ liệu nhập k đúng> mời nhập lại số nguyên dương"));
}
for (let i = 1; i <= soNguyen; i++) {
  giaiThua *= i;
}
console.log(`${soNguyen}! bằng ${giaiThua}`);

//Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau
// Bài 4: In hình chữ nhật rỗng
