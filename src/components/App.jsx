
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      allVideos: [],
      currentVideo: {},
      // query: 'cutecats'
    };
  }
  updateCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }
  updateAllVideos(videos) {
    
    this.setState({
      allVideos: videos,
      currentVideo: videos[0]
    }); 
  }
  
  getUpdatedVideos(query) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: query,
      max: 5
    };
    
    this.props.searchYouTube(options, this.updateAllVideos.bind(this));
  }
  
  componentDidMount() {
    this.getUpdatedVideos('cute cats');
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearch={this.getUpdatedVideos.bind(this)} />
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
