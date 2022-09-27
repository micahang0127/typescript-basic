// [interface를 이용해 타입지정 ]

interface Person {
  name: string, 
  age?: number; // 물은표는 설정을 해도 되고 안해도 되는 값이라는 뜻.
}

// 동일한 함수 사용 
// -> 다른 interface를 extends 로 상속
// interface Developer {
//   name: string,
//   age?: number;
//   skills: string[];
// }
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: '김사람',
  age: 20
};

const expert: Developer = {
  name: '김재벌',
  skills: ['javasccript', 'react']
};

const people: Person[] = [person, expert];



