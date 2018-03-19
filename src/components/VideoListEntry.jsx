var VideoListEntry = (props) => (
  <div className="video-list-entry">

    <div className="media">

      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />

      <div className="media-body">
        <div className="video-list-entry-title" onClick={() => { props.play(props.video); } } >{props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>

    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default VideoListEntry;
