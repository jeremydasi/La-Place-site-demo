import React from "react";
import styles from "../../../styles/Annonce.module.scss";

interface AnnonceTitleProps {
  text: string;
}

const AnnonceTitle: React.FunctionComponent<AnnonceTitleProps> = ({ text }) => {
  return (
    <div className={styles.annonceTitle}>
      <div>Annonces /</div>
      <div>{text}</div>
    </div>
  );
};

export default AnnonceTitle;
