import SoundCloudWidget from "react-simple-soundcloud-widget";

interface Props {
  url: string;
}

const SoundCloudSong = ({ url }: Props) => {
  return (
    <div className="md:w-10/12 bg-orange-500 p-5 md:p-10 rounded-lg mb-5">
      <SoundCloudWidget
        url={url}
        // config={{
        // 	auto_play: true,
        // }}
      />
    </div>
  );
};

export default SoundCloudSong;
