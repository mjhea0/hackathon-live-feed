// ** @jsx React.createElement */
// var React = require('react');

var Commit = React.createClass({
  render: function () {
    return (
      <div>
       <p>Avatar<img></img></p>
       <p>Name{this.props.name}</p>
       <p>Date:</p>
       <p>url</p><p>sha</p>
       <p>message</p>
     </div>
      )
  }
})

var Commits = React.createClass({
  loadCommitsFromServer: function() {
     $.ajax({
       url: this.props.url,
       // dataType: 'json',
       success: function(data) {
         console.log(data.response)
         this.setState(data.response);
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
     return {commits: []};
   },
   render: function () {
     return (
        <div>
          {this.state.commits.map(function (commit){
            return (
              <div>
                <Commit name={commit.name}/>
              </div>
              )
          })}
        </div>
     );
   },
})

React.render(<Commits url="/git/fetchcommits" pollInterval={9000}></Commits>, document.getElementById('test'));
// React.render(<Commits data={response} pollInterval={2000}></Commits>, document.getElementById('test'));


// var HelloMessage = React.createClass({displayName: "HelloMessage",
//   render: function() {
//     return React.createElement("div", null, "Commit: ", this.props.__);
//   }
// });


// console.log('ran')
// React.render(React.createElement(HelloMessage), document.getElementById('test2'));