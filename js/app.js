
var { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link } = ReactRouter;

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
    <Route path="start" component={Start}></Route>
    <Route path="actioncall" component={ActionCall}></Route>
</Router>,
document.getElementById('app-container')    
);