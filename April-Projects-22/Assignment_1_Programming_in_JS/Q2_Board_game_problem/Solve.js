const possible = (a, b) => {
    for (let i = 1; i <= 6; i++){
      a += 1;
      if (a === b){
        return true;
      }
    }
    return false;
  };
  console.log(possible(3, 7));
  console.log(possible(1, 9));
  console.log(possible(5, 3));