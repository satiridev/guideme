
var listings = JSON.parse(localStorage.getItem('listings')) || {};
var todos = JSON.parse(localStorage.getItem('todos')) || [];

if (Object.keys(listings).length == 0) {
  listings = {
    "1234": {"id": 1234,
             "name": "A Very nice view house at bedok!",
             "address": "Jl. Bedok #56, Ayer - Singapore 11405",
             "agentName": "Cindy PropertyGuru",
             "phone": "081-234-5678",
            "image": "https://sg-rpfs.pgimgs.com/developer-listing/1810579/OUPHO.74852836.V350.jpg",
            "location": {"lat":100.109988, "lon": 65.10090}
          },
    "1235": {"id": 1235,
            "name": "Nice 2 bedrooms House nearby Russia Embassy",
            "address": "Crescent Rd. 45, 117788",
            "agentName": "Sarah Tan",
            "phone": "082-567-9999",
            "image": "https://sg1-cdn.pgimgs.com/developer-listing/1079571/OUPHO.69259080.V350.jpg",
            "location": {"lat":100.10889, "lon": 65.07889}
          },
    "1236": {"id": 1236,
            "name": "2 Bedrooms HDB 500m from Mullmein Road",
            "address": "Novena 1, 7788347",
            "agentName": "Angela Shu",
            "phone": "083-765-8989",
            "image": "https://sg2-cdn.pgimgs.com/cms/property-review/2016/07/Verandah-living-room-300x169.original.jpg",
            "location": {"lat":100.18870, "lon": 65.055}
          }
  };
}

if (todos.length == 0) {
  todos.push({
    "id": 1,
    listingId: 1234,
    call: false,
    visit: false,
    pay: false
  });
  todos.push({
    "id": 2,
    listingId: 1235,
    call: true,
    callNote: "Agent said it sold ...",
    visit: false,
    pay: false
  });
  todos.push({
    "id": 3,
    listingId: 1236,
    call: true,
    callNote: "Agent said can visit in next Monday ...",
    visit: true,
    visitNote: "Nice property new MRT ...",
    pay: false
  });
}

var todosText = [
  {name: "call", text: 'Call The Agent', "step": 1},
  {name: "visit", text: 'Visit the Property', "step": 2},
  {name: "signcontract", text: "Sign The Contract", "step": 3},
  {name: "pay", text: "Pay the Collateral", "step": 4}
];

function getTodoObject(todoId)
{
  for (let i in todos) {
    if (todos[i].id== todoId) {
      return todos[i];
    }
  }
}

function getTodoCompletion(todoId)
{
    let completeTodos = 0;
    for (let i=0; i<todosText.length; i++) {
        let todoText = todosText[i].name;
        if (todoText && true === getTodoObject(todoId)[todoText]) {
            completeTodos++;
        }
    }
    return completeTodos;
}

function goToNextStep(currentStep, todoId)
{
    var next = $.grep(todosText, function(e) {
      return e.step == currentStep + 1;
    });

    if (next[0]) {
        window.location = "/#/" + next[0].name + "/" + todoId;
    }
}

function goToPrevStep(currentStep, todoId)
{
    var next = $.grep(todosText, function(e) {
      return e.step == currentStep - 1;
    });

    if (next[0]) {
        window.location = "/#/" + next[0].name + "/" + todoId;
    }
}

function getStepNote(todoId, action)
{
  let todo = getTodoObject(todoId);
  let noteKey = action + "Note";
  let note = "";
  if (todo[noteKey] !== undefined) {
    note = todo[noteKey];
  }

  return note;
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

function getNextStep(todoId)
{
  let todo = getTodoObject(todoId);
  for (let taskId in todosText) {
    let name = todosText[taskId].name;
    if (!todo[name]) {
      return name;
    }
  }
}

var ActionNote = React.createClass({
    render: function(){
        let todo = this.props.todo;
        let note = this.props.note;

        return (
            <div className="container padding-top-20">
                <div className="row">
                    <div className="col-xs-4">
                        &nbsp;
                    </div>
                    <div className="col-xs-4">
                        <div className="row">
                            <div className="col-xs-12">
                              <textarea id="note" rows="4" className="col-xs-12">
                              {note}
                              </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        &nbsp;
                    </div>
                </div>
            </div>
        );
    }
});