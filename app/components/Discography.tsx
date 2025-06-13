import AlbumsEPs from "./AlbumsEPs";
import SectionDivider from "./SectionDivider";
import SinglesFeatures from "./SinglesFeatures";

const Discography = () => (
  <section id="discography" className="scroll-mt-16">
    <SectionDivider title="Albums & EP's" ySeed={20} />
    <AlbumsEPs
      title="Ambient Studies"
      description="6 track passion project exploring ambient soundscapes and textures. Independently distributed and released, 2025."
      backgroundImage="/ambientstudies.jpg"
      spotifyEmbedUrl="https://open.spotify.com/embed/album/1sZ0RZNA9wOqwEvOS7cUpF?utm_source=generator"
    />
    <AlbumsEPs
      title="Exploration"
      description="Second lofi album, 9 tracks full of instrumentals and dark, minimal vibes. Label release via Sleep Tales, 2022"
      backgroundImage="/exploration.jpg"
      spotifyEmbedUrl="https://open.spotify.com/embed/album/69AAYBGbdmHwyHbLYL5i2I?utm_source=generator"
    />
    <AlbumsEPs
      title="Dreamscape"
      description="Debut lofi album, a collection of 7 tracks from my early ventures into the genre, some sleepy, yet warmer tracks. Label release via Sleep Tales, 2021"
      backgroundImage="/dreamscapemain.jpeg"
      spotifyEmbedUrl="https://open.spotify.com/embed/album/2NBE2hXvKjdFgyN9zfpP8t?utm_source=generator"
    />
    <SectionDivider title="Singles & Features" ySeed={0} />

    <SinglesFeatures
      title="Dreamweaver"
      spotifyEmbedUrl="https://open.spotify.com/embed/track/4wjmdrH0D9oGpIKxaKiygI?utm_source=generator"
      backgroundImage="/Dreamweaver-cap.jpg"
    />
    <SinglesFeatures
      title="Afterglow"
      spotifyEmbedUrl="https://open.spotify.com/embed/track/2sJSf1kGbPyJoUn2rXIKee?utm_source=generator"
      backgroundImage="/afterglow-main.jpg"
    />
    <SinglesFeatures
      title="Snowfall"
      spotifyEmbedUrl="https://open.spotify.com/embed/track/6jnDTLeYVNhJ4KWN2ByhvE?utm_source=generator"
      backgroundImage="/afterglow-main.jpg"
    />
    <SinglesFeatures
      title="Ghost Town"
      spotifyEmbedUrl="https://open.spotify.com/embed/track/0KOKnjV6E0DxG0xOlpBpej?utm_source=generator"
      backgroundImage="/ghosttown.jpg"
    />
    <SinglesFeatures
      title="Twilight"
      spotifyEmbedUrl="https://open.spotify.com/embed/track/6Wp1b26UHYOdUWfIgS3GNx?utm_source=generator"
      backgroundImage="/twilight.jpeg"
    />
    <SinglesFeatures
      title="Light"
      spotifyEmbedUrl="https://open.spotify.com/embed/track/0ddyX3gdFZcAVLqP7IQHXD?utm_source=generator"
      backgroundImage="/light.jpg"
    />

    <SinglesFeatures
      title="Never Enough"
      spotifyEmbedUrl="https://open.spotify.com/embed/track/6l4fFm0n8BDfzwtNh9cICJ?utm_source=generato"
      backgroundImage="/neverEnough.jpg"
    />

    <SinglesFeatures
      title="Iris"
      spotifyEmbedUrl="https://open.spotify.com/embed/track/7HNuHDeJ27f6hQmkgC1Tyi?utm_source=generator"
      backgroundImage="/iris.jpg"
    />

    <SinglesFeatures
      title="Rewind"
      spotifyEmbedUrl="https://open.spotify.com/embed/track/1ygSzPE3vX57XVNJ4X22H6?utm_source=generator"
      backgroundImage="/rewind.jpg"
    />
  </section>
);

export default Discography;
