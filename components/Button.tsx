interface ButtonProps {
  bgColor: string;
  textColor: string;
  line: string;
  lineWidth: string;
  width: string;
  children: any;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  bgColor,
  textColor,
  line,
  lineWidth,
  width,
  children,
  onClick,
}) => {
  return (
    <button
      className={`text-xs px-5 py-3 uppercase font-bold ${bgColor} ${textColor} ${line} ${lineWidth} ${width} hover:bg-opacity-70 focus:outline-none focus:bg-opacity-70 transition-colors duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
