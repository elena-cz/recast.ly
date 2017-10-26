
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      allVideos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[3],
      query: 'cutecats'
    };
  }
  updateCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchYouTube={this.props.searchYouTube} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} onVideoClick={this.updateCurrentVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );    
  }
  
}










// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={window.exampleVideoData[0]} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={window.exampleVideoData} />
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
