import React from 'react';
// import styles from "../../styles/NavigationBar.module.scss";
import Button from '../button';
import Image from 'next/image';
import Logo from '../../assets/logo.svg';

const NavigationBar = () => {
    return (
        <div /*className={styles.navigationBar}*/>
            {/* <div className={styles.containerLogo}>
        <Image src={Logo} alt="logo" />
      </div>

      <div className={styles.liens}>
        <a>Estimer</a>
        <a>Acheter</a>
        <a>Louer</a>
        <a>Prix de l'immobilier</a>
        <a>Trouvez un conseiller</a>
        <a>Réseau immobilier</a>
      </div>

      <div className={styles.containerButton}>
        <Button
          label="Devenir Conseiller Immobilier"
          onClick={() => alert("page")}
          isRed
        />
      </div> */}
        </div>
    );
};

export default NavigationBar;
