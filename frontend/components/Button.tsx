type ButtonProps = {
  children: string;
  type?: 'button' | 'submit';
  buttonId: string;
};

export default function Button({ children, type = 'button', buttonId }: ButtonProps) {
  return (
    <button className="button" id={buttonId} type={type}>
      {children}
    </button>
  );
}
