var StartTodoItem = React.createClass({
  render: function() {
    var key = this.props.text.name;
    var text = this.props.text.text;

    var icon = (true === getTodoObject(this.props.todoId)[key]) ? 'fa fa-check-square-o' : 'fa fa-square-o';

    return (<li><Link to={key}><i className={icon} aria-hidden="true"></i> {text}</Link></li>);
  }
});

var StartTodoList = React.createClass({
  render: function() {
    var todoText = this.props.todosText;
    var todoId = this.props.todoId;
    var rows = todoText.map(function(text) {
      return (<StartTodoItem text={text} todoId={todoId}/>);
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
        <StartTodoList todosText={todosText} todoId={todoId}/>
      </div>
    );
  }
});