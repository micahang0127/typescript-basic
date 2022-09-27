// [type의 Alias 별칭]

type Person6 = {
  name: string,
  age?: number;
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐준다
type Developer6 = Person & {
  skills: string[];
};

const person6: Person6 = {
  name: '김사람'
};

const expert6: Developer6 = {
  name: '김재벌',
  skills: ['javascript', 'react']
};

// Person[] 를 이제 앞으로 People6 이라는 타입으로 사용 할 수 있다.
type People6 = Person6[];
const people6: People6 = [person6, expert6];

type Color = 'red' | 'yellow' | 'orange';
const color6: Color = 'red';
const colors6: Color[] = ['red', 'orange'];





