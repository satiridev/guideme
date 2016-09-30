var  ActionCall = React.createClass({
    step: 1,
    action: "call",

    done: function(todoId) {
        updateTodo(todoId, this.action, true);
        goToNextStep(this.step, todoId);
    },

    later: function(todoId) {
        updateTodo(todoId, this.action, false);
        window.location = "/#/start/"+todoId;
    },

    next: function(todoId) {
        goToNextStep(this.step, todoId);
    },

    prev: function(todoId) {
        window.location = "/#/start/"+todoId;
    },

  render: function() {
    let todoId = this.props.params.todoId;
    let todo = getTodoObject(todoId);

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

        <ButtonControl
            done={todo[this.action]}
            onLater= {this.later}
            onDone={this.done}
            onNext={this.next}
            onPrev={this.prev}
            todoId={todoId}
        ></ButtonControl>
      </div>
    );
  }
});