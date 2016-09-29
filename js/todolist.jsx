var ListingComponent = React.createClass({
  render: function() {
    var todo = this.props.todo;
    console.log(todo);
    console.log(listings);
    console.log(todo.listingId);
    var listing = listings[todo.listingId];
    return (
      <li>
        <span><Link to="start" id="{todo.id}">{listing.name}</Link></span>
      </li>
    );
  }
});

var ListingsListComponent = React.createClass({
  render: function() {
    var rows = this.props.todos.filter(function(todo) {
      return !todo.done;
    }).map(function(todo) {
    console.log(todo);
      return (<ListingComponent key={todo.id} todo={todo}></ListingComponent>);
    });
    return (
      <div className="active-todos">
        <h2>Active</h2>
        <ul>{rows}</ul>
      </div>
    );
  }
});
