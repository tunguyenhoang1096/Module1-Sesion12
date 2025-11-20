// hiển thị 20 số nguyên tố đầu tiên
// số nguyên tố là số chia hết cho 1 và chính nó
/*  tạo 1 biến đếm đến 20 cho vòng lặp while
    tạo 1 biến num để kiểm tra có phải số nguyên tố không
    tạo 1 biến result để trả về kết quả */
// let count = 0;
// let num,
//   result = "";
// while (count < 20) {}

let count = 0;
let num = 2;
while (count < 20) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
    count++;
  }
  num++;
}
