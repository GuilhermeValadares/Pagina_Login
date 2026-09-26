type PropsAuthFooter = {
  title: string;
  lableLink: string;
  onRedirect: () => void;
};

export function AuthFooter({ title, lableLink, onRedirect }: PropsAuthFooter) {
  return (
    <div className="auth-footer text-center">
      <p onClick={onRedirect}>
        {title} <span className="link">{lableLink}</span>
      </p>
    </div>
  );
}
