var  ActionVisit= React.createClass({
    action: "visit",
    done: function() {
        var todoId = this.props.params.todoId;
        updateTodo(todoId, this.action, true);
        let next = getNextStep(todoId);
        window.location = "/#/" + next + "/" + todoId;
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
            icon="fa-map-marker" 
            text="Visit the property"
            description="Visiting the property will make sure all the information that provided by the agent is  fit to your need. Do not take rush to decide your property in one visit."
            todoId={todoId}
        ></HeaderCall>
        
        <AgentInfo property={property} />

        <div className="container padding-top-60">
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