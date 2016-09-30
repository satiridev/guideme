
var listings = JSON.parse(localStorage.getItem('listings')) || {};
var todos = JSON.parse(localStorage.getItem('todos')) || [];

if (Object.keys(listings).length == 0) {
var listings = {
    "1234": {"id": 1234, 
             "name": "A Very nice view house at bedok!",
             "address": "Jl. Bedok #56, Ayer - Singapore 11405", 
             "agentName": "Cindy PropertyGuru", 
             "phone": "081-234-5678"
          },
    "1235": {"id": 1235, 
            "name": "Nice 2 bedrooms House nearby Russia Embassy", 
            "address": "Crescent Rd. 45, 117788",
            "agentName": "Crescent Rd. 45, 117788",
            "phone": "082-567-9999"
          },
    "1236": {"id": 1236, 
            "name": "listing name 1236", 
            "address": "Some address",
            "agentName": "agent name of 1236", 
            "phone": "083-765-8989"
          }
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

function updateTodo(todoId, action, value)
{
  var todo = getTodoObject(todoId);
  todo[action] = value;
  saveTodos();
}

function saveTodos(_todos)
{
  localStorage.setItem('todos', JSON.stringify(todos));
}

var todosText = [
  {name: "call", text: 'Call The Agent', "step": 1},
  {name: "visit", text: 'Visit the Property', "step": 2},
  {name: "singContact", text: "Sign The Contract", "step": 3},
  {name: "pay", text: "Pay the Collateral", "step": 4}
];
