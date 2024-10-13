import React from "react";
import styles from "../../styles/Footer.module.scss";
import Button from "../button";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import champion from "../../assets/champion.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import youtube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <section>
      <div className={styles.containerPage}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src={Logo} alt="Logo" />
          </div>

          <div className={styles.containerText}>
            <div className={styles.text}>
              MeilleursBiens.com est une plateforme digitale dédiée aux
              conseillers
            </div>
            <div className={styles.text}>
              immobiliers. Présent dans plus de 80 départements en France et
            </div>
            <div className={styles.text}>
              dans les DROM. Nos agents mandataires seront à votre disposition
            </div>
            <div className={styles.text}>
              pour vous accompagner à concrétiser votre projet immobilier.
            </div>
          </div>

          <div>
            <Image src={champion} alt="titre de champion" />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.portail}>
            <div className={styles.title}>Le Portail</div>
            <div className={styles.grosText}>
              Acheter une maison ou un appartement
            </div>
            <div className={styles.grosText}>
              Louer une maison ou un appartement
            </div>
            <div className={styles.grosText}>
              Acheter une maison ou un appartement neuf
            </div>
            <div className={styles.grosText}>Estimer le prix de mon bien</div>
            <div className={styles.grosText}>
              Trouver un Conseiller immobilier
            </div>
            <div className={styles.grosText}>Prix de l'immobilier au m²</div>
          </div>

          <div className={styles.espace}>
            <div className={styles.title}>Espace Agent</div>
            <div className={styles.grosText}>Espace Agent</div>
            <div className={styles.grosText}>Logiciel Estimation</div>
            <div className={styles.grosText}>
              Condition générales d'utilisation
            </div>
            <div className={styles.grosText}>Barême d'Honoraires</div>

            <div className={styles.containerButton}>
              <Button
                label="Nous recrutons"
                onClick={() => alert("page")}
                isRed
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.informations}>
          <div className={styles.sas}>Meilleurs Biens Immobilier SAS</div>
          <div className={styles.adresse}>
            RCS Nanterre 528 970 635 - Carte professionnelle CPI 7501 2018 000
            029 692 CCI Paris IDF
          </div>
          <div className={styles.copyright}>
            © Copyright 2010-2023, tous droits réservés.
          </div>
        </div>

        <div className={styles.icons}>
          <div>
            <Image src={facebook} alt="facebook" />
          </div>
          <div>
            <Image src={instagram} alt="instagram" />
          </div>
          <div>
            <Image src={linkedin} alt="linkedin" />
          </div>
          <div>
            <Image src={youtube} alt="youtbe" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
