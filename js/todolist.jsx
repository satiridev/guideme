var ListingComponent = React.createClass({
  render: function() {
    var todo = this.props.todo;
    var listing = listings[todo.listingId];

    var completeTodos = getTodoCompletion(todo.id);

    return (
      <li className="row padding-top-20">
        <div className="col-xs-offset-2 col-xs-4 text-left">
            <div><Link to={"start/" + todo.id} todoId={todo.id}>{listing.name}</Link></div>
            <div>{listing.address}</div>
        </div>
        <div className="col-xs-4">
            <ProgressBar valuenow={completeTodos} />
        </div>
        <div className="col-xs-2"></div>
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
        <h2>My favorite listings</h2>
        <ul className="list-no-style">{rows}</ul>
      </div>
    );
  }
});
