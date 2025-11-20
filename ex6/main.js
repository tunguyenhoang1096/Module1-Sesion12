// - Tạo một menu đơn giản cho phép người dùng chọn các tính năng khác nhau bằng cách nhập lựa chọn từ bàn phím.
// - Chương trình sẽ thực hiện các hành động khác nhau dựa trên sự lựa chọn của người dùng và tiếp tục hiển thị menu cho đến khi người dùng chọn thoát.
// Lựa chọn 1: Nhập tên của người dùng.
// Lựa chọn 2: Nhập tuổi của người dùng.
// Lựa chọn 3: In tên và tuổi của người dùng.
// Lựa chọn 4: In bảng cửu chương của một số.
// Lựa chọn 5: Kiểm tra số nhập vào là số chẵn hay lẻ.
// Lựa chọn 6: Tính tổng các số từ 1 đến N (N do người dùng nhập).
// Lựa chọn 7: In các số trong một dãy (người dùng nhập dãy số).
// Lựa chọn 8: Kiểm tra số nhập vào có phải là số nguyên tố hay không.
// Lựa chọn 9: In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
// Lựa chọn 10: Thoát khỏi chương trình.
// ------------------------------------------------
// Tạo 1 vòng lặp while để luôn hiển thị các lựa chọn, chỉ thoát vòng lặp khi ng dùng chọn thoát
let name = "";
let age = 0;
while (true) {
  let choice = Number(
    prompt(`Mời chọn các tính năng:
Lựa chọn 1: Nhập tên của người dùng.
Lựa chọn 2: Nhập tuổi của người dùng.
Lựa chọn 3: In tên và tuổi của người dùng.
Lựa chọn 4: In bảng cửu chương của một số.
Lựa chọn 5: Kiểm tra số nhập vào là số chẵn hay lẻ.
Lựa chọn 6: Tính tổng các số từ 1 đến N (N do người dùng nhập).
Lựa chọn 7: In các số trong một dãy (người dùng nhập dãy số).
Lựa chọn 8: Kiểm tra số nhập vào có phải là số nguyên tố hay không.
Lựa chọn 9: In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
Lựa chọn 10: Thoát khỏi chương trình. `)
  );
  // Lựa chọn 1: Nhập tên của người dùng
  if (choice === 1) {
    name = prompt("Mời nhập tên: ");
  } //Lựa chọn 2: Nhập tuổi của người dùng
  else if (choice === 2) {
    age = Number(prompt("Mời nhập tuổi: "));
    while (!Number.isInteger(age) || age < 0) {
      age = Number(prompt("dữ liệu k đúng, mời nhập lại tuổi"));
    }
    //Lựa chọn 3: In tên và tuổi của người dùng
  } else if (choice === 3) {
    console.log(`Tên: ${name}`);
    console.log(`Tuổi: ${age}`);
  }
  // Lựa chọn 4: In bảng cửu chương của một số.
  else if (choice === 4) {
    let n = Number(prompt("Muốn in bảng cửu chương số mấy?"));
    while (!Number.isInteger(n) || n < 1 || n > 9) {
      n = Number(prompt("Nhập lại. Bảng cửu chương từ 1-9 thôi"));
    }
    let result = 1;
    console.log(`Bảng cửu chương của ${n}`);
    for (let i = 1; i <= 9; i++) {
      result = n * i;
      console.log(`${n}*${i}=${result}`);
    }
  }
  // Lựa chọn 5: Kiểm tra số nhập vào là số chẵn hay lẻ.
  else if (choice === 5) {
    let n = Number(prompt("Nhập vào 1 số nguyên"));
    while (!Number.isInteger(n)) {
      n = Number(prompt("Nhập lại là số nguyên:"));
    }
    if (n % 2 === 0) {
      console.log(`${n} là số chẵn`);
    } else {
      console.log(`${n} là số lẻ`);
    }
  }
  // Lựa chọn 6: Tính tổng các số từ 1 đến N (N do người dùng nhập).
  else if (choice === 6) {
    let n = Number(prompt("Nhập vào 1 số nguyên"));
    while (!Number.isInteger(n) || n < 0) {
      n = Number(prompt("Nhập lại là số nguyên:"));
    }
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    console.log(`Tổng là: ${sum}`);
  }
  // Lựa chọn 7: In các số trong một dãy (người dùng nhập dãy số).
  else if (choice === 7) {
    let str = prompt("Nhập 1 dãy số(phân cách bằng khoảng trắng)");
    console.log(str);
    let temp = ""; //biến tạm dùng để chứa số
    for (let i = 0; i < str.length; i++) {
      c = str[i];
      if ((c >= "0" && c <= "9") || c === "-") {
        temp += c;
      } else if (c === " ") {
        if (temp !== "" && temp !== "-") {
          console.log(temp);
          temp = "";
        }
      }
    }
  }
  // Lựa chọn 8: Kiểm tra số nhập vào có phải là số nguyên tố hay không.
  else if (choice === 8) {
    let isPrime = true;
    let num = Number(prompt("Nhập 1 số nguyên dương bất kỳ"));
    while (isNaN(num) || num < 0 || num % 1 !== 0) {
      num = Number(prompt("Dữ liệu k đúng, mời nhập lại số nguyên dương"));
    }

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      console.log(`${num} là số nguyên tố`);
    } else {
      console.log(`${num} không phải số nguyên tố`);
    }
  }
  // Lựa chọn 9: In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
  else if (choice === 9) {
    let str = prompt("Mời nhập 1 chuỗi bất kỳ");
    let strRevert = "";
    for (let i = str.length - 1; i >= 0; i--) {
      strRevert += str[i];
    }
    console.log(`Chuỗi ban đầu: ${str}`);
    console.log(`Chuỗi đảo ngược: ${strRevert}`);
  }
  // Lựa chọn 10: Thoát khỏi chương trình.
  else if (choice === 10) {
    break;
  } else {
    alert("K có chức năng bạn chọn");
  }
}
