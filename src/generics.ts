// [Generics]
// 함수, 클래스, interface, type alias 를 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법이다.

// any
function merge(a: any, b: any): any {
  return {
    ...a,
    ...b
  };
}

const merged = merge({foo:1}, {bar:1});


// Generics
function merge2<A, B>(a: A, b: B): A & B {
  return {
    ...a, 
    ...b
  };
}

const merged2 = merge({foo:1}, {bar:1});


function  wrap<T>(param: T){
  return {
    param
  }
}

const wrapped = wrap(10);


// interface에서 Generics 
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c']
};


// type에서 Generics s
type  Items2<T> = {
  list: T[];
}

const items2: Items2<string> = {
  list: ['a', 'b', 'c']
};


// class에서 Generics 
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());


