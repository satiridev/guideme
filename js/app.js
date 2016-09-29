var todos  = [{
  id: '1',
  name: 'Call The Agent',
  done: false
}, {
  id: '2',
  name: 'Visit the Property',
  done: false
},
{
  id: '3',
  name: 'Sign The Contract',
  done: false
},
{
  id: '2',
  name: 'Pay the Collateral',
  done: false
},
{
  id: '2',
  name: 'Pay the Collateral',
  done: false
},
];

var { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link } = ReactRouter;


var Todo = React.createClass({
  render: function() {
    var todo = this.props.todo;
    return (<li>{todo.name}<button>Done</button></li>);
  }
});

var TodoList = React.createClass({
  render: function() {
    var rows = this.props.todos.filter(function(todo) {
      return !todo.done;
    }).map(function(todo) {
      return (<Todo key={todo.id} todo={todo}></Todo>);
    });
    return (
      <div className="active-todos">
        <h2>Active</h2>
        <ul>{rows}</ul>
      </div>
    );
  }
});

var  ActionCall = React.createClass({
  render: function() {
    return (
      <div className="action-call">
        <h2>Action Call</h2>
        <ul></ul>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1></h1>
        <TodoList todos={todos}/>
        <ul>
            <li><Link to="actioncall">Call The Agent</Link></li>
        </ul>
      </div>
    );
  }
});


React.render(
<Router>
    <Route path="/" component={App}></Route>
    <Route path="actioncall" component={ActionCall}></Route>
</Router>,
document.getElementById('app-container')    
)