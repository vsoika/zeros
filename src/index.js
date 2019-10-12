module.exports = function zeros(expression) {

  let removeMult = expression.split('*');
  let zeros = [0, 0]; 
   for (let i = 0; i < removeMult.length; i++) {

    let item = removeMult[i];
    let integerItem = parseInt(item);
    
    let factorial = item.includes('!!') ? 2 : 1;

    while (integerItem > 0) {
      if (integerItem % 2 === 0) {
        zeros[0]++;
      }
      if (integerItem % 5 === 0) {
        zeros[1]++;
      }
      if (integerItem % 25 ===0) {
      zeros[1]++;
    }
      integerItem -= factorial;
    }
  }
  return Math.min(...zeros);
}
