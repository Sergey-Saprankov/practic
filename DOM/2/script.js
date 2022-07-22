// Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:



// isParent(parent, child);

// isParent(document.body.children[0], document.querySelector('mark'));

// // true так как первый див является родительским элементом для mark



// isParent(document.querySelector('ul'), document.querySelector('mark'));

// // false так ul НЕ является родительским элементом для mark

// Функция принимает только DOM объекты. Обязательно проверяйте это.


function isChild(parent, child) {
  if (parent && child) {
    let current = child.parentNode;
    while (current) {
      console.log(current)
      if (current === parent)
        return true;
      current = current.parentNode;
    }
  }
  return false;
}