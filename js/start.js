var StartTodoItem = React.createClass({
  render: function() {
    var text = todosText[this.props.text];
    //if (listings['id']) {

    //}
    console.log(listings);
    return (<li><i className="fa fa-square-o" aria-hidden="true"></i> {text}</li>);
  }
});

var StartTodoList = React.createClass({
  render: function() {
    var todoText = this.props.todosText;
    var rows = Object.keys(todoText).map(function(text) {
      return (<StartTodoItem text={text} />);
    });
    return (
      <div className="active-todos">
        <ul>{rows}</ul>
      </div>
    );
  }
});

var Start = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Start</h1>
        <StartTodoList todosText={todosText}/>
      </div>
    );
  }
});