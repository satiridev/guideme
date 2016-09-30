var  ActionVisit= React.createClass({
    action: "visit",
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
    return (
      <div className="action-call" id="actioncall">
        <div className="jumbotron jumbotron-icon">  {/* ----- header  ----- */}
            <div className="container text-center">
                <h1>
                    <i className="fa fa-map-marker fa-5 text-primary" aria-hidden="true"></i>
                    &nbsp;Visit the property
                </h1>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-xs-2">&nbsp;</div>
                    <div className="col-xs-8">
                        Visiting the property will make sure all the information that provided 
                        by the agent is  fit to your need. Do not take rush to decide your property in one visit.                        
                    </div>
                    <div className="col-xs-2">&nbsp;</div>
                </div>
                <div className="row padding-top-20">
                    <div className="col-xs-2">&nbsp;</div>
                    <div className="col-xs-8">
                        <span className="text-primary">Your property at a Glance</span>
                    </div>
                    <div className="col-xs-2">&nbsp;</div>                
                    <div className="col-xs-2">&nbsp;</div>
                    <div className="col-xs-8">
                        <strong>A nice condo located near bedok</strong><br/>
                        Jl. Bedok #23, Ayer Rajah 178890
                    </div>
                    <div className="col-xs-2">&nbsp;</div>
                </div>

            </div>
        </div>                                     {/* ----- end header  ----- */}

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
        </div>                                      {/* ----- agent info or content  ----- */} 


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