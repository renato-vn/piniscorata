interface Props {
  ico: JSX.Element;
  link: string;
}

const SocialIcoLink = ({ ico, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-purple-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      {ico}
    </a>
  );
};

export default SocialIcoLink;
