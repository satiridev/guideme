
var { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link } = ReactRouter;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1></h1>
        <ListingsListComponent todos={todos}/>
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
    <Route path="start/:todoId" component={Start} />
    <Route path="actioncall" component={ActionCall}></Route>
    <Route path="actionvisit" component={ActionVisit}></Route>
</Router>,
document.getElementById('app-container')    
);