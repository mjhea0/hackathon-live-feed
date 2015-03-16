** @jsx React.createElement */
// var React = require('react');

var Commits = React.createClass({

 render: function () {
   return (
     <div>
       <p>Avatar<img></img></p>
       <p>Name</p>
       <p>Date:</p>
       <p>url</p><p>sha</p>
       <p>message</p>
     </div>
   );
 },
 loadCommentsFromServer: function() {
     $.ajax({
       url: this.props.url,
       // dataType: 'json',
       success: function(data) {
         console.log(data)
         this.setState({data: data});
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(this.props.url, status, err.toString());
       }.bind(this)
     });
   },
 componentDidMount: function() {
     this.loadCommentsFromServer();
     setInterval(this.loadCommentsFromServer, this.props.pollInterval);
 },
   getInitialState: function() {
     return {data: []};
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