// add solution here
function theBeatlesPlay(musicians,instruments){
  var myVariable = []
  for(i=0;i<musicians.length;i++){
    myVariable.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myVariable
}

function johnLennonFacts(facts){
  var factList = []
  for(i=0;i<facts.length;i++){
    factList.push(`${facts[i]}!!!`)
  }
  return factList
}