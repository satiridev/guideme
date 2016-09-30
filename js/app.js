
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
            description="Here are your favorites home. Follow along the guides to get your dream home."
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
    <Route path="visit/:todoId" component={ActionVisit}></Route>
    <Route path="pay/:todoId" component={ActionPay}></Route>
    <Route path="signcontract/:todoId" component={ActionSignContract}></Route>
    <Route path="congratulation/:todoId" component={Congratulation}></Route>
</Router>,
document.getElementById('app-container')
);