var  ActionVisit= React.createClass({
    step: 2,
    action: "visit",
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
        goToPrevStep(this.step, todoId);
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
            icon="fa-map-marker" 
            text="Visit the property"
            description="Visiting the property will make sure all the information that provided by the agent is  fit to your need. Do not take rush to decide your property in one visit."
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