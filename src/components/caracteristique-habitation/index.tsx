import React, { useEffect, useState } from 'react';
import styles from '../../styles/Caracteristique.module.scss';
import Button from '../button';
import Link from 'next/link';
import Alexis from './../../assets/alexis.png';
import Image from 'next/image';

const Caracteristique = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (!isLoaded) return <></>;

    return (
        <div className={styles.containerPage}>
            <div className={styles.containerCaracteristique}>
                <div className={styles.title}>Caractéristiques techniques</div>
                <div className={styles.caracteristique}>
                    <div>
                        <div className={styles.containerTitleColor}>
                            <div className={styles.informations}>Surface</div>
                            <div className={styles.containerM}>468m²</div>
                        </div>

                        <div className={styles.containerTitle}>
                            <div className={styles.informations}>Pièces</div>
                            <div className={styles.containerPieces}>7</div>
                        </div>

                        <div className={styles.containerTitleColor}>
                            <div className={styles.informations}>Chambres</div>
                            <div className={styles.containerPieces}>4</div>
                        </div>

                        <div className={styles.containerTitle}>
                            <div className={styles.informations}>Salles de bains</div>
                            <div className={styles.containerPieces}>4</div>
                        </div>

                        <div className={styles.title}>Honoraires & Tarifs</div>

                        <div className={styles.containerTitleColor}>
                            <div className={styles.informations}>Honoraires à la charge</div>
                            <div className={styles.containerVendeur}>Vendeur</div>
                        </div>

                        <div className={styles.containerTitle}>
                            <div className={styles.informations}>Prix honoraires inclus</div>
                            <div className={styles.containerPrice}>2 170 000 €</div>
                        </div>
                    </div>

                    <div>
                        <div className={styles.containerTitleColor}>
                            <div className={styles.informations}>Exposition</div>
                            <div className={styles.containerExposition}>SUD</div>
                        </div>

                        <div className={styles.containerTitle}>
                            <div className={styles.informations}>Prestige</div>
                            <div className={styles.containerYes}>Oui</div>
                        </div>

                        <div className={styles.containerTitleColor}>
                            <div className={styles.informations}>Piscine</div>
                            <div className={styles.containerNo}>Non</div>
                        </div>

                        <div className={styles.containerTitle}>
                            <div className={styles.informations}>Terrasse</div>
                            <div className={styles.containerYes}>Oui</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerProfil}>
                <Image src={Alexis} alt="Alexis" width={64} height={64} />
                <div style={{ fontWeight: 'bold' }}>Alexis Dupré</div>
                <div className={styles.containerTextProfil}>
                    <div className={styles.textProfil}>Agent MeilleursBiens dans le secteur de</div>
                    <div className={styles.textProfilBold}>Le Soler - Saint Cyprien - Barcares - Canohes - Perpignan et tout le département des Pyrénées-Orientales.</div>
                </div>
                <div>
                    {/* <div className={styles.containerButtonTop}>
                        <Button label="Programmer un entretien téléphonique" onClick={() => {}} isWhite />
                    </div>
 */}
                    <div className={styles.containerButtonBottom}>
                        <Link href="/schedule">
                            <Button label="Programmer une visite" onClick={() => {}} isBigRed />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Caracteristique;
