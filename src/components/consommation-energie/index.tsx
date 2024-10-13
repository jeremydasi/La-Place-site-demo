import React from "react";
import styles from "../../styles/Consommation.module.scss";
import Image from "next/image";
import dpeClasseB from "../../assets/DPE_NEW_ClasseB.svg";
import gesClasseB from "../../assets/GES_NEW_ClasseB.svg";

const Consommation = () => {
  return (
    <div className={styles.containerPage}>
      <div className={styles.consommation}>
        <div className={styles.dpe}>
          <div className={styles.title}>DPE</div>
          <div className={styles.dpeImage}>
            <Image src={dpeClasseB} alt="DPE de classe B" />
          </div>
          <div>
            <div className={styles.kwh}>79 kWh/m².an</div>
            <div className={styles.text}>
              Consommations énergétiques (en énergie primaire) pour le
              chauffage, la production d’eau chaude sanitaire et le
              refroidissement (indice de mesure : kWhEP/m2.an)
            </div>
          </div>
        </div>

        <div className={styles.ges}>
          <div className={styles.title}>GES</div>
          <div className={styles.gesImage}>
            <Image src={gesClasseB} alt="GES de classe B" />
          </div>
          <div>
            <div className={styles.kwh}>7 kgC02/m².an</div>
            <div className={styles.text}>
              Émissions de gaz à effet de serre (GES) pour le chauffage, la
              production d’eau chaude sanitaire et le refroidissement (Indice de
              mesure : kgeqCO2/m2.an)
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divVide}></div>
    </div>
  );
};

export default Consommation;
