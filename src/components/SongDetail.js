import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (song) {
    return (
      <div>
        <h3>Details For</h3>
        <p>
          Title: {song.title}
          <br />
          Duration: {song.duration}
        </p>
      </div>
    );
  } else {
    return <div>Select A Song</div>;
  }
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
