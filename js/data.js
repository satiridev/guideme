
var listings = JSON.parse(localStorage.getItem('listings')) || {};
var todos = JSON.parse(localStorage.getItem('todos')) || [];
if (Object.keys(listings).length == 0) {
  listings = {
    "1234": {"id": 1234, "name": "listing name 1234", "agentName": "agent name of 1234", "phone": "081-234-5678"},
    "1235": {"id": 1235, "name": "listing name 1235", "agentName": "agent name of 1235", "phone": "082-567-9999"},
    "1236": {"id": 1236, "name": "listing name 1236", "agentName": "agent name of 1236", "phone": "083-765-8989"}
  };
}

if (todos.length == 0) {
  todos.push({"id": 1, listingId: 1234, call: false, visit: false, pay: false});
  todos.push({"id": 2, listingId: 1235, call: true, visit: false, pay: false});
  todos.push({"id": 3, listingId: 1236, call: true, visit: true, pay: false});
}

function getTodoObject(todoId)
{
  for (let i in todos) {
    if (todos[i].id== todoId) {
      return todos[i];
    }
  }
}

var todosText = {
  call: 'Call The Agent',
  visit: 'Visit the Property',
  singContact: "Sign The Contract",
  pay: "Pay the Collateral",
};