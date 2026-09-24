type PropsAuthFooter = {
  title: string;
  lableLink: string;
};

export function AuthFooter({ title, lableLink }: PropsAuthFooter) {
  return (
    <div className="auth-footer text-center">
      <p>
        {title} <span className="link">{lableLink}</span>
      </p>
    </div>
  );
}
