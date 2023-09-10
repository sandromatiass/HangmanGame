interface ButtonProps {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick, ...rest }: ButtonProps ) => (
  <button onClick={onClick} {...rest}>
    {text}
  </button>
);

export default Button;
