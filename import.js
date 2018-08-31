var listModule = require("./module");


function numGen(count){
  for(var i = 0; i < count; i++){
    listModule.storeInList(Math.ceil(Math.random()*10));
  }
}

numGen(5);


console.log(listModule.sortList());