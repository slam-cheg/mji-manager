import styles from "../styles/login-page/index.module.css"
type ButtonProps = {
  children: string;
  type?: 'button' | 'submit';
  buttonId: string;
};

export default function Button({ children, type = 'button', buttonId }: ButtonProps) {
  return (
    <button className={styles.button} id={buttonId} type={type}>
      {children}
    </button>
  );
}
