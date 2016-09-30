
var { Router,
      Route,
      IndexRoute,
      IndexLink,
      IndexRoute,
      browserHistory,
      Link } = ReactRouter;

var ReactTransitionGroup = React.addons.CSSTransitionGroup;

var App = React.createClass({
  render: function() {
    return (
        <ReactTransitionGroup component="div" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, {
              key: this.location.pathname,
            })}
        </ReactTransitionGroup>
    );
  }
});


React.render(
<Router history={browserHistory}>
    <Route path="/" handler={App}>
        <IndexRoute component={ListingsListComponent} />
        <Route path="start/:todoId" component={Start} />
        <Route path="call/:todoId" component={ActionCall}></Route>
        <Route path="visit/:todoId" component={ActionVisit}></Route>
        <Route path="pay/:todoId" component={ActionPay}></Route>
        <Route path="signcontract/:todoId" component={ActionSignContract}></Route>
        <Route path="congratulation/:todoId" component={Congratulation}></Route>
    </Route>
</Router>,
document.getElementById('app-container')
);
