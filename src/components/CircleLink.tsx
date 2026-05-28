interface Props {
  url: string;
  icon: string;
}

function CircleLink({ url, icon }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="button-link"
    >
      <i className={"fa-brands " + icon}></i>
    </a>
  );
}
export default CircleLink;
