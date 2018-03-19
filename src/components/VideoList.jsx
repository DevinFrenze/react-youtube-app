import VideoListEntry from './VideoListEntry';

var VideoList = (props) => (

  <div className="video-list-media">
    {props.videos.map((video) => <VideoListEntry video = {video} play={props.playVideo} />)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
