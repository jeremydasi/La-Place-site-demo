import React from 'react';
import styles from '../../styles/PreviewScreen.module.scss';
import AnnonceTitle from './annonce/annonce-title';
import Image from 'next/image';
import villa from '../../assets/villa.svg';
import locationLogo from '../../assets/location-logo.svg';

const PreviewScreen = () => {
    return (
        <div className={styles.containerPage}>
            <div className={styles.previewScreen}>
                <div className={styles.annonce}>
                    <AnnonceTitle text="Maison de 468m² à Perpignan (66000)" />
                    <Image src={villa} alt="Photos extérieur du bien immobilier" />
                </div>

                <div className={styles.containerTicket}>
                    <div className={styles.vente}>VENTE</div>
                    <div className={styles.maison}>Maison</div>
                </div>

                <div className={styles.containerDescription}>
                    <div className={styles.location}>Maison de 468m² à Perpignan (66000)</div>

                    <div className={styles.containerPrice}>
                        <div className={styles.price}>2170000€</div>
                        <div className={styles.fai}>FAI</div>
                    </div>
                </div>

                <div className={styles.locationPoint}>
                    <Image src={locationLogo} alt="logo de geolocalisation" />
                    <div>Perpignan (66000)</div>
                </div>

                <div className={styles.containerPieces}>
                    <div className={styles.pieces}>7 pièces</div>
                    <div className={styles.chambre}>4 chambres</div>
                    <div className={styles.sdb}>4 salles de bains</div>
                    <div className={styles.wc}>7 WC</div>
                </div>
            </div>
        </div>
    );
};

export default PreviewScreen;
