var  Congratulation = React.createClass({
    
    goHome : function() {
        window.location = "/";
    },

    render : function () {
        return (
             <div className="congratulation" id="congratulation">

                <div className="container text-center">
                <div className="row padding-top-20">
                    <div className="col-xs-4">&nbsp;</div>
                    <div className="col-xs-4">
                        <img src="images/congrats.png" className="img-responsive"/>
                    </div>
                    <div className="col-xs-4">&nbsp;</div>
                </div>

                <div className="row padding-top-20 text-center">
                    <div className="col-xs-2">&nbsp;</div>
                    <div className="col-xs-8">
                        <h1 className="text-primary">Congratulations</h1>
                        Congratulations for your new home, we hope you are enjoy the progress with our guide.
                        If you dont mind, please tell us the missing steps and gotchas. 
                    </div>
                    <div className="col-xs-2">&nbsp;</div>
                </div>

                <div className="row padding-top-40 ">
                    <div className="col-xs-4">&nbsp;</div>
                    <div className="col-xs-4 text-center">
                        <button onClick={this.goHome} type="button" className="btn btn-success btn-lg btn-block" aria-label="Left Align">Well done!!</button>
                    </div>
                    <div className="col-xs-4 text-center">
                        &nbsp;
                    </div>
                </div>  

                </div>
            </div>
        )
    }
});