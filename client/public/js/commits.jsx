// ** @jsx React.createElement */
// var React = require('react');

var Commit = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col-md-2">
          <p><img className="github-avatars" src={this.props.avatar}></img></p>
        </div>
        <div className="col-md-10">
           <p>{this.props.name}</p>
           <p>{this.props.date}</p>
           <p>{this.props.message}</p>
           <p>{this.props.url}</p>
            <p>{this.props.sha}</p>
          </div>
     </div>
      );
  }
});

var Commits = React.createClass({
  loadCommitsFromServer: function() {
     $.ajax({
       url: this.props.url,
       dataType: 'json',
       success: function(data) {
         console.log(data.response)
         this.setState({commits:data.response});
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(this.props.url, status, err.toString());
       }.bind(this)
     });
   },
   componentDidMount: function() {
       this.loadCommitsFromServer();
       setInterval(this.loadCommitsFromServer, this.props.pollInterval);
   },
   getInitialState: function() {
     return {
      commits: []
    };
   },
   render: function () {

    var commitList = this.state.commits.map(function (commit) {
        return (
          <Commit name={commit.name} message={commit.message} date={commit.date} avatar={commit.avatar} sha={commit.sha} url={commit.url}></Commit>
        );
      });
      return (
        <div>
          {commitList}
        </div>
      );
   }
})

React.render(<Commits url="/git/fetchcommits" pollInterval={20000}></Commits>, document.getElementById('test'));