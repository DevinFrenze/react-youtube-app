class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
  }
  playVideo(video) {
    this.setState({
      video: video
    });
    console.log('It Worked!', this);
  }
  // setVideos(videos) {
  //   this.setState({
  //     videos: videos
  //   });
  // }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList playVideo={this.playVideo.bind(this)} videos={this.state.videos}/>
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
