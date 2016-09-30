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
        <div>
        <div className="row padding-top-20">
            <div className="col-xs-2">
               <span><img src={property.image} className="property-image" /></span>
            </div>
            <div className="col-xs-offset-2 col-xs-6 text-left">
                <span className="col-xs-12 text-primary">Your property at a Glance</span>
                <span className="col-xs-12"><strong>{property.name}</strong></span>
                <span className="col-xs-12">{property.address}</span>
            </div>
        </div>
        <div>
            <div className="col-xs-2">&nbsp;</div>
            <div className="col-xs-2">&nbsp;</div>
            <div className="col-xs-8">

            </div>
        </div>
        </div>
    )}
});
