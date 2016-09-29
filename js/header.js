var  HeaderCall = React.createClass({
  render: function() {
    let todoId = this.props.todoId;
    if (todoId !== undefined) {
        var currentTodo = getTodoObject(todoId);
        var property = listings[currentTodo.listingId];
    }
    return (
      <div className="action-call" id="actioncall">
        <div className="jumbotron jumbotron-icon">  {/* ----- header  ----- */}
            <div className="container text-center">
                <h1>
                    <i className={"fa " + this.props.icon + " fa-5 text-primary"} aria-hidden="true"></i>
                    &nbsp;{this.props.text}
                </h1>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-xs-2">&nbsp;</div>
                    <div className="col-xs-8">
                        {this.props.description}
                    </div>
                    <div className="col-xs-2">&nbsp;</div>
                </div>
                {this.props.todoId !== undefined ? <ShowProperty property={property}/>:""}
            </div>
        </div>      
        </div>
    );
  }
});


var ShowProperty = React.createClass ({
    render: function() {
    let property = this.props.property;    
    return (
        <div className="row padding-top-20">
            <div className="col-xs-2">&nbsp;</div>
            <div className="col-xs-8">
                <span className="text-primary">Your property at a Glance</span>
            </div>
            <div className="col-xs-2">&nbsp;</div>                
            <div className="col-xs-2">&nbsp;</div>
            <div className="col-xs-8">
                <strong>{property.name}</strong><br/>
                {property.address}
            </div>
            <div className="col-xs-2">&nbsp;</div>
        </div>
    )}
});
