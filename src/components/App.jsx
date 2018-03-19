class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData,
      query: 'The Roots Live Performance'
    };
    this._playVideo = this.playVideo.bind(this);
    this._search = this.search.bind(this);
    this._setVideos = this.setVideos.bind(this);
    this._callback = this.callback.bind(this);
  }
  componentDidMount() {
    this.setVideos();
  }
  playVideo(video) {
    this.setState({
      video: video
    });
  }
  setVideos() {
    var options = {
      query: this.state.query,
      max: 10,
      key: window.YOUTUBE_API_KEY,
    };
    this.props.searchYouTube(options, this._callback);
  }
  callback(data) {
    this.setState({
      videos: data,
      video: data[0]
    });
  }
  search(e) { 
    this.setState({
      query: e.target.value
    });

    _.debounce(this._setVideos, 500)();
    // this.setVideos();
  }
  render() {
    return (
      <div>
        <Nav query={this._search}/>

        <div className = "video-wrapper">

          <div className = "col-md-7">
            <VideoPlayer video={this.state.video}/>
  
          <div className = "col-md-7">
            <VideoList playVideo={this._playVideo} videos={this.state.videos}/>
          </div>

        </div>

      </div>
    );
  }
}

window.App = App;
