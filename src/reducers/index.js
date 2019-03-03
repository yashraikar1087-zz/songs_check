const songsReducers = () => {
  return [
    {
      title: "Barbie Girl",
      duration: "4.05"
    },
    {
      title: "Backstreet Boys",
      duration: "2.05"
    },
    {
      title: "All Star",
      duration: "3.17"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
