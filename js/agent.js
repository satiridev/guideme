var AgentInfo = React.createClass({
    render: function(){
        let property = this.props.property;
        return (
            <div className="container min-height-100">
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
                                <strong>{property.agentName}</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4">
                                Phone 
                            </div>
                            <div className="col-xs-8">
                                <strong>{property.phone}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        &nbsp;
                    </div>
                </div>
            </div>
        );
    }
});