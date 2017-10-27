class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
    this.updateAutoplay = this.updateAutoplay.bind(this);
    this.buildVideoURL = this.buildVideoURL.bind(this);
  }
  updateAutoplay() {
    console.log('ive been updated'),
    this.setState({
      autoplay: !this.state.autoplay
    });
  }
  
  buildVideoURL() {
    
    var url = 'https://www.youtube.com/embed/' + this.props.video.id.videoId;
    
    if (this.state.autoplay) {
      url = url + '?autoplay=1';
    }
    
    return url;
    
  }  

  render() {
    if (this.props.video.id) {
      return (
        <div className="video-player">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={this.buildVideoURL()} allowFullScreen></iframe>
          </div>
          <div className="video-player-details">
            <h3>{this.props.video.snippet.title}</h3>
            <div>{this.props.video.snippet.description}</div>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" onChange={this.updateAutoplay} /> 
            <span className="form-check-label">
              Autoplay
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="video-player"><p>Loading...</p></div>
      );
    }
  }
  
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
