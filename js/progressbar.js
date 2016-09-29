let ProgressBar = React.createClass({
  render: function() {
    let widthPercentage = 100 * (this.props.valuenow / 4);
    let styles = {width : widthPercentage + '%'};
    return (
        <div className="progress">
          <div className="progress-bar progress-bar-success" role="progressbar"
                aria-valuenow={this.props.valuenow}
                aria-valuemin="0"
                aria-valuemax="4"
                style={styles}>
                {widthPercentage}%
          </div>
        </div>
    );
  }
});