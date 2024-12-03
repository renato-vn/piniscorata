interface Props {
  text: string;
}

const Paragraph = ({ text }: Props) => {
  return <div className="font-poppins text-white text-2xl mb-5">{text}</div>;
};

export default Paragraph;
