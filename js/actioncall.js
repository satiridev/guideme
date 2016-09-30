var  ActionCall = React.createClass({
    action: "call",
    done: function() {
        var todoId = this.props.params.todoId;
        updateTodo(todoId, this.action, true);
        window.location = "/#/start/"+todoId;
    },
    later: function() {
        var todoId = this.props.params.todoId;
        updateTodo(todoId, this.action, false);
        window.location = "/#/start/"+todoId;
    },

  render: function() {
    let todoId = this.props.params.todoId;

    return (
      <div className="action-call" id="actioncall">

        <HeaderCall 
            icon="fa-phone-square" 
            text="Call the Agent"
            description="Calling is the fastest way to deal with agents.By getting the faster response, your property will come closer."
            todoId={todoId}
        ></HeaderCall>

        {/* ----- agent info or content  ----- */} 
        <div className="container min-height-200">
            <div className="row">
                <div className="col-xs-4">
                    &nbsp;
                </div>
                <div className="col-xs-4">
                    <div className="row">
                        <div className="col-xs-4">
                            Agent
                        </div>
                        <div className="col-xs-8">
                            <strong>Cyndi PropertyGuru</strong>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4">
                            Phone 
                        </div>
                        <div className="col-xs-8">
                            <strong>0816 7788 89990</strong>
                        </div>
                    </div>                    
                </div>
                <div className="col-xs-4">
                    &nbsp;
                </div>
            </div>    
        </div>
        {/* ----- agent info or content  ----- */} 

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