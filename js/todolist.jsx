var ListingComponent = React.createClass({
  render: function() {
    var todo = this.props.todo;
    //console.log(todo);
    //console.log(listings);
    //console.log(todo.listingId);
    var listing = listings[todo.listingId];

    var completeTodos = getTodoCompletion(todo.id);

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
    //console.log(todo);
      return (<ListingComponent key={todo.id} todo={todo}></ListingComponent>);
    });
    return (
      <div className="active-todos text-center">
        <h2>Active</h2>
        <ul className="list-no-style">{rows}</ul>
      </div>
    );
  }
});
