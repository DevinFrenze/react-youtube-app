class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData,
      query: 'The Roots Live Performance'
    };
    // this.setVideos();
    this._playVideo = this.playVideo.bind(this);
    this._search = this.search.bind(this);
    this._setVideos = this.setVideos.bind(this);
    this._callback = this.callback.bind(this);
  }
  componentDidMount() {
    console.log('this should log before the other one');
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
    // console.log(this);
    this.setState({video: data[0] });
    this.setState({'videos': data});
  }
  search(e) { 
    // console.log(e.target.value);
    // console.log(Object.keys(e));
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
          </div>

          <div className = "col-md-7">
            <VideoList playVideo={this._playVideo} videos={this.state.videos}/>
          </div>

        </div>

      </div>
    );
  }
}

// var App = (props) => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={props.videos}/>
//     </div>
//   </div>
// );


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
