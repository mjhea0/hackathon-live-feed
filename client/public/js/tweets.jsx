// ** @jsx React.createElement */
// var React = require('react');

var Tweet = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col-md-2">
          <p></p>
        </div>
        <div className="col-md-10">
           <p>Tweet:</p>
           <p>{this.props.text}</p>
          </div>
     </div>
      );
  }
});

var Tweets = React.createClass({
  loadTweetsFromServer: function() {
     $.ajax({
       url: this.props.url,
       dataType: 'json',
       success: function(data) {
        console.log(data.response)
         this.setState({Tweets:data.response});
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(this.props.url, status, err.toString());
       }.bind(this)
     });
   },
   componentDidMount: function() {
       this.loadTweetsFromServer();
       setInterval(this.loadTweetsFromServer, this.props.pollInterval);
   },
   getInitialState: function() {
     return {
      Tweets: []
    };
   },
   render: function () {

    var TweetList = this.state.Tweets.map(function (tweet) {
        return (
          <Tweet text={tweet.text} key={tweet.text}>
          </Tweet>
        );
      });
      return (
        <div>
          {TweetList}
        </div>
      );
   }
})

React.render(<Tweets url="/twitter/fetchTweets" pollInterval={20000}></Tweets>, document.getElementById('tweets-component'));