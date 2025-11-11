// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// for (let i = 1; i < 100; i++) {
//   console.log(i);
//   if (i === 99) {
//     console.log(`Đã hoàn thành`);
//   }
// }

// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
// debugger;
// let nhietDo = Number(prompt("Nhập nhiệt độ hiện tại(20-100)"));
// while (20 > nhietDo || nhietDo > 100 || isNaN(nhietDo)) {
//   if (nhietDo < 20) {
//     nhietDo = Number(prompt("Nhiệt độ thấp, mời tăng nhiệt độ lên"));
//   }
//   if (nhietDo > 100) {
//     nhietDo = Number(prompt("Nhiệt độ cao, mời giảm nhiệt độ xuống"));
//   }
//   if (isNaN(nhietDo)) {
//     nhietDo = Number(prompt("Dữ liệu không đúng, mời nhập lại"));
//   }
// }
// console.log(`Nhieetj độ hiện tại là ${nhietDo}`);

// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// dãy fibonacci là dãy mà số đứng sau bằng tổng 2 số đứng trước
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,...
// let n = 20;
// let a = 0,
//   b = 1,
//   c;
// for (let i = 2; i <= n; i++) {
//   c = a + b;
//   console.log(c + " ");
//   a = b;
//   b = c;
// }

// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
// let n = 20;
// let a = 0,
//   b = 1,
//   c;
// for (let i = 2; i <= n; i++) {
//   c = a + b;
//   console.log(c + " ");
//   a = b;
//   b = c;
//   if (c % 5 === 0) {
//     console.log(`So đầu tiên trong dãy fibonacci chia hết cho 5 là ${c}`);
//     break;
//   }
// }

// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
// let n = 20;
// let a = 0,
//   b = 1,
//   sum = 0,
//   c;
// for (let i = 2; i <= n; i++) {
//   c = a + b;
//   console.log(c + " ");
//   a = b;
//   b = c;
//   sum += c;
// }
// console.log(`Tổng của 20 số đầu tiên trong dãy fibonacci là ${sum}`);

// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên

// let sum = 0,
//   count = 0,
//   n = 1;
// while (count < 30) {
//   if (n % 7 === 0) {
//     sum += n;
//     count++;
//     console.log(n);
//   }
//   n++;
// }
// console.log(`Tổng của 30 số chia hết cho 7 đầu tiên là ${sum}`);

// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ “FizzBuzz”
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
