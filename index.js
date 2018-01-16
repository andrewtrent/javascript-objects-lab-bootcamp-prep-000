var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({},recipes,{[key]:value})
  return newObject
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  Object.assign({object,[key]:value})
}
function deleteFromObjectByKey(object, key){
  var newObject = object
  delete newObject[key]
  return newObject
}