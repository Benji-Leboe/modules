var list = [];

function storeInList(num){
  list.push(num);
}

function sortList(){
  return list.sort(function(a,b){
    return a - b;
  });
}

module.exports = {
  storeInList: storeInList,
  sortList: sortList
}

