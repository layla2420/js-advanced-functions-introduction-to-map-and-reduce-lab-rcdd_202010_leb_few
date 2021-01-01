// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(x => x * -1);
}
function mapToNoChange(sourceArray){
  return sourceArray.map(x=>x);
}
function mapToDouble(sourceArray){
  return sourceArray.map(x=>x*2)
}
function mapToSquare(sourceArray){
  return sourceArray.map(x=>x*x)

}
function reduceToTotal(sourceArray){
  return sourceArray.reduce((accumulator, currentValue) => accumulator + currentValue,0)
}
