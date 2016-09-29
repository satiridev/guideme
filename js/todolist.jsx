var ListingComponent = React.createClass({
  render: function() {
    var todo = this.props.todo;
    var listing = listings[todo.listingId];

    var completeTodos = 0;
    for (var i=0; i<todosText.length; i++) {
        var todoText = todosText[i].name;
        if (todoText && true === getTodoObject(todo.id)[todoText]) {
            completeTodos++;
        }
    }
    return (
      <li>
        <div className="col-sm-6">
            <span><Link to={"start/" + todo.id} todoId={todo.id}>{listing.name}</Link></span>
        </div>
        <div className="col-sm-4">
            <ProgressBar valuenow={completeTodos} />
        </div>
        <div className="col-sm-2"></div>
      </li>
    );
  }
});

var ListingsListComponent = React.createClass({
  render: function() {
    var rows = this.props.todos.filter(function(todo) {
      return !todo.done;
    }).map(function(todo) {

      return (<ListingComponent key={todo.id} todo={todo}></ListingComponent>);
    });
    return (
      <div className="active-todos text-center">
        <h2>My Favorite listing</h2>
        <ul className="list-no-style">{rows}</ul>
      </div>
    );
  }
});
