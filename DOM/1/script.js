// Зная структуру html, с помощью изученных методов получить (в консоль):

// 1. head

// 2. body

// 3. все дочерние элементы body и вывести их в консоль.

// 4. первый div и все его дочерние узлы

// а) вывести все дочерние узлы в консоль

// б) вывести в консоль все дочерние узлы, кроме первого и последнего

// Для навигации по DOM использовать методы, которые возвращают только элементы

const head = document.head;
console.log(head);
 
const body = document.body;
console.log(body);
 
const bodyChild = body.children;
console.log(bodyChild);
 
const firstDiv = body.firstChild.nextSibling;
console.log(firstDiv);
 
const firsDivChild = firstDiv.children;
console.log(firstDiv.children);
 
const result  = Array.from(firsDivChild).slice(1, -1);
console.log(result);