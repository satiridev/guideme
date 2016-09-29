
var { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link } = ReactRouter;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <HeaderCall
            icon="fa-home"
            text="Home"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
            todoId="1"
        ></HeaderCall>
        <ListingsListComponent todos={todos}/>
      </div>
    );
  }
});


React.render(
<Router>
    <Route path="/" component={App}></Route>
    <Route path="start/:todoId" component={Start} />
    <Route path="call/:todoId" component={ActionCall}></Route>
    <Route path="visit" component={ActionVisit}></Route>
</Router>,
document.getElementById('app-container')
);