type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="result">
      <h2 className="h2-title">{title}</h2>
      <div className="result__text-wrapper">{children}</div>
    </div>
  );
}
