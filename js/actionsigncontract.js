var  ActionSignContract = React.createClass({
    step: 3,
    action: "signcontract",
    
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
      <div className="action-sign-contract" id="actionsigncontract">

        <HeaderCall 
            icon="fa-phone-square" 
            text="Sign the contract"
            description="Make sure your documents tidely prepared. Documents such as passport and visa is necessary for foreigner, We suggest you to make two bundle of it, with the other one as backup. "
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
                <button onClick={this.done} type="button" className="btn btn-success btn-lg btn-block" aria-label="Left Align">Mark as done</button>
            </div>
            <div className="col-xs-3">&nbsp;</div>
        </div>
        </div>
      </div>
    );
  }
});