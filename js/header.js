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
            <div className="col-xs-2"></div>
            <div className="col-xs-8 text-left">
                <div className="property-img">
                <span className="col-xs-12"><img src={property.image} className="property-image" /></span>
                </div>
                <div className="property-info">
                <span className="col-xs-12 text-primary">Your property at a Glance</span>
                <span className="col-xs-12"><strong>{property.name}</strong></span>
                <span className="col-xs-12">{property.address}</span>
                </div>
            </div>
            <div className="col-xs-2"></div>
        </div>
        <div className="row">
            <div className="col-xs-2">&nbsp;</div>
            <div className="col-xs-2">&nbsp;</div>
            <div className="col-xs-8">&nbsp;</div>
        </div>
        </div>
    )}
});

var ButtonControl = React.createClass ({
    render: function() {
        var button;

        if (this.props.done) {
            button = (
            <div className="row">
                <div className="col-xs-3">&nbsp;</div>
                <div className="col-xs-3 text-center">
                    <button onClick={this.props.onPrev.bind(this, this.props.todoId)} type="button" className="btn btn-primary btn-lg btn-block" aria-label="Left Align">Back</button>
                </div>
                <div className="col-xs-3 text-center">
                    <button onClick={this.props.onNext.bind(this, this.props.todoId)} ype="button" className="btn btn-success btn-lg btn-block" aria-label="Left Align">Next</button>
                </div>
                <div className="col-xs-3">&nbsp;</div>
            </div>
            );
        } else {
            button = (
            <div className="row">
                <div className="col-xs-3">&nbsp;</div>
                <div className="col-xs-3 text-center">
                    <button onClick={this.props.onLater.bind(this, this.props.todoId)} type="button" className="btn btn-primary btn-lg btn-block" aria-label="Left Align">Do it later</button>
                </div>
                <div className="col-xs-3 text-center">
                    <button onClick={this.props.onDone.bind(this, this.props.todoId)} ype="button" className="btn btn-success btn-lg btn-block" aria-label="Left Align">Mark as done</button>
                </div>
                <div className="col-xs-3">&nbsp;</div>
            </div>
            );
        }

        return (
            <div className="container padding-top-20">
            {button}
            </div>
        )
    }
});
