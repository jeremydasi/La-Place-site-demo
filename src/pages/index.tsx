import React from 'react';
import styles from '../styles/Index.module.scss';
import NavigationBar from '../components/navigation-bar';
import DefaultLayout from '../layout/default-layout';
import PreviewScreen from '../components/preview-screen';
import Caracteristique from '../components/caracteristique-habitation';
import Description from '../components/description';
import Consommation from '../components/consommation-energie';
import Footer from '../components/footer';
import Head from 'next/head';

const Home: React.FunctionComponent = () => {
    return (
        <DefaultLayout>
            <Head>
                <title>Demo La Place</title>
            </Head>
            <NavigationBar />
            <div className={styles.body}>
                <PreviewScreen />
                <Caracteristique />
                <Description />
                <Consommation />
                <Footer />
            </div>
        </DefaultLayout>
    );
};

export default Home;
