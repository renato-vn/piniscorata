interface Props {
  img: string;
}

const ImageFromGallery = ({ img }: Props) => {
  return (
    <img
      className="w-80 md:w-96 object-fill rounded-lg h-96 object-center mx-5 md:mx-0 md:px-0"
      alt="piñisco"
      src={img}
      width={400}
      height={200}
    />
  );
};

export default ImageFromGallery;
