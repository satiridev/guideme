var currentTodoId = '2';

var StartTodoItem = React.createClass({
  render: function() {
    var key = this.props.text;
    var text = todosText[this.props.text];
    var icon = (true === todos[currentTodoId][key]) ? 'fa fa-check-square-o' : 'fa fa-square-o';

    return (<li><Link to={key}><i className={icon} aria-hidden="true"></i> {text}</Link></li>);
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
    var todoId = this.props.params.todoId;
    return (
      <div>
        <h1>Start </h1>
        <StartTodoList todosText={todosText}/>
      </div>
    );
  }
});