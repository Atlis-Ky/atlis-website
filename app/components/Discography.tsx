import AlbumsEPs from "./AlbumsEPs";
// import SinglesFeatures from "./SinglesFeatures";

const Discography = () => (
  <>
    <AlbumsEPs
      title="Ambient Studies"
      description="6 track passion project exploring ambient soundscapes and textures. Independently distributed and released, 2025."
      backgroundImage="/ambientstudies.jpg"
      spotifyEmbedUrl="https://open.spotify.com/embed/album/1sZ0RZNA9wOqwEvOS7cUpF?utm_source=generator"
    />
    <AlbumsEPs
      title="Exploration"
      description="Second lofi album, 9 tracks full of instrumentals and dark, minimal vibes. Label release via Sleept Tales, 2022"
      backgroundImage="/exploration.jpg"
      spotifyEmbedUrl="https://open.spotify.com/embed/album/69AAYBGbdmHwyHbLYL5i2I?utm_source=generator"

  
    />
    <AlbumsEPs
      title="Dreamscape"
      description="Debut lofi album, a collection of 7 tracks from my early ventures into the genre, some sleepy, yet warmer tracks. Label release via Sleep Tales, 2021"
      backgroundImage="/dreamscapemain.jpeg"
      spotifyEmbedUrl="https://open.spotify.com/embed/album/2NBE2hXvKjdFgyN9zfpP8t?utm_source=generator"
    />
    {/* <SinglesFeatures content to go in here whenever after /> */}
  </>
);

export default Discography;
