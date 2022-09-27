const message: string = "hello";
console.log(message);

let c = 0;
c += 1;
//  c = "hh";  // error

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열
// messages.push(1); // error

let mightBeUndefined: string | undefined = undefined; // string, undefined 가능
let nullableNumber: number | null = null; // number, null 가능

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나의 값
// color = 'green';  // error



