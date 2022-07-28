const obj = {
  html: [
    {user: 'ivan', point: 200},
    {user: 'sergey', point: 300}
  ],

  js: {
    basic: [
      {user: 'peter', point: 10},
    ],

    pro: [
      {user: 'gena', point: 1000},
    ]
  }
}


const recursion = (data) => {
 
  if (Array.isArray(data)) {
  let total = 0;
  total = data.reduce((acc, el) => acc + el.point, 0);
  return [total, data.length];

  } else {
    let total = [0, 0];

    Object.values(data).map(item => {
      const temp = recursion(item);
      console.log(temp);
      total[0] += temp[0];
      total[1] += temp[1];
    })
    return total;
  }
  
}

function factorial(x) {
  if (!Number.isInteger(x) || typeof x !== 'number') return `Введите число больше 1`;
  if (x <= 0) return 1;
  if (x === 1) {
    return x;
  }

  return x * factorial(x - 1);
}