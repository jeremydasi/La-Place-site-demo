import React from "react";
import styles from "../../styles/Button.module.scss";

interface ButtonProps {
  label?: string;
  onClick: () => void;
  isRed?: boolean;
  isWhite?: boolean;
  isBigRed?: boolean;
  isSmallRed?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  onClick,
  isRed = false,
  isBigRed = false,
  isWhite = false,
  isSmallRed = false,
}) => {
  return (
    <div
      className={
        isSmallRed
          ? styles.smallButtonRed
          : isBigRed
          ? styles.bigButtonRed
          : isWhite
          ? styles.buttonWhite
          : isRed
          ? styles.buttonRed
          : styles.button
      }
      onClick={onClick}
    >
      <a>{label}</a>
    </div>
  );
};

export default Button;
