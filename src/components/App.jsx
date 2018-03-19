import Nav from './Nav';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData,
      query: 'The Roots Live Performance'
    };
    // this.setVideos();
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
    this.props.searchYouTube(options, this.callback.bind(this));
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
    _.debounce(this.setVideos.bind(this), 500)();
    // this.setVideos();
  }
  render() {
    return (
      <div>
        <Nav query={this.search.bind(this)}/>

        <div className = "video-wrapper">

          <div className = "col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>

          <div className = "col-md-7">
            <VideoList playVideo={this.playVideo.bind(this)} videos={this.state.videos}/>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
