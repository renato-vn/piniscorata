interface Props {
  img: string;
}

const ImageFromGallery = ({ img }: Props) => {
  return (
    <img
      className="object-cover rounded-lg h-96 object-center px-5 md:px-0"
      alt="piñisco"
      src={img}
      width={400}
      height={200}
    />
  );
};

export default ImageFromGallery;
