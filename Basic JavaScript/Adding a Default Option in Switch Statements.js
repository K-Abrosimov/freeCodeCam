function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case 'a':
        return answer = 'apple';
        break;
      case 'b':
        return answer = 'bird';
        break;
      case 'c':
        return answer = 'cat';
        break;
      default:
        answer = 'stuff';
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);