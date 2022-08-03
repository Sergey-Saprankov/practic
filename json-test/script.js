const persone = {
  name: "Alex",
  tel: "+375293558603"
};

//Глубокое клонирование объектов
const newPersone = JSON.parse(JSON.stringify(persone));
console.log(newPersone === persone);