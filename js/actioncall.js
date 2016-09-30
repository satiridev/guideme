var  ActionCall = React.createClass({
    step: 1,
    action: "call",

    done: function() {
        var todoId = this.props.params.todoId;
        updateTodo(todoId, this.action, true);
        goToNextStep(this.step, todoId);
    },

    later: function() {
        var todoId = this.props.params.todoId;
        updateTodo(todoId, this.action, false);
        window.location = "/#/start/"+todoId;
    },

  render: function() {
    let todoId = this.props.params.todoId;

    if (todoId !== undefined) {
        var currentTodo = getTodoObject(todoId);
        var property = listings[currentTodo.listingId];
    }

    return (
      <div className="action-call" id="actioncall">

        <HeaderCall
            icon="fa-phone-square"
            text="Call the Agent"
            description="Calling is the fastest way to deal with agents.By getting the faster response, your property will come closer."
            todoId={todoId}
        ></HeaderCall>

        <AgentInfo property={property} />

        <div className="container padding-top-20">
        <div className="row">
            <div className="col-xs-3">&nbsp;</div>
            <div className="col-xs-3 text-center">
                <button onClick={this.later} type="button" className="btn btn-primary btn-lg btn-block" aria-label="Left Align">Do it later</button>
            </div>
            <div className="col-xs-3 text-center">
                <button onClick={this.done} ype="button" className="btn btn-success btn-lg btn-block" aria-label="Left Align">Mark as done</button>
            </div>
            <div className="col-xs-3">&nbsp;</div>
        </div>
        </div>
      </div>
    );
  }
});