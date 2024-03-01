// Write your solution in this file!
const employee = {
    name:"lisa",
    address:"brooklyn",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyofemployee = {...employee}
    copyofemployee[key] = value; //Why are we using bracket notation here?
  
    return copyofemployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; //Why are we using bracket notation here?
  
    return obj;
  }
  function deleteFromEmployeeByKey(employee, key){
const copy = {...employee}
delete copy[key]
return copy;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee [key]
return employee;
  }
