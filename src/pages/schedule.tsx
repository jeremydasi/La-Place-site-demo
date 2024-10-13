import React, { useEffect, useState } from 'react';
import styles from './../styles/Schedule.module.scss';
import Image from 'next/image';
import Alexis from './../assets/alexis.png';
import Frame from './../assets/Frame.svg';
import Calendar from './../assets/calendar-clock.svg';
import ArrowLeft from './../assets/arrow-circle-left.svg';

import moment from 'moment-timezone';
import { useRouter } from 'next/router';
import 'moment/locale/fr';
const Months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

const ScheduleSceen = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(0);
    const [currentYear, setCurrentYear] = useState(2023);

    const [selectedDay, setSelectedDay] = useState(new Date());
    const [availableHour, setAvailableHour] = useState([]);
    const today = new Date();

    const [beginAt, setBeginAt] = useState(0);
    const [days, setDays] = useState([]);

    const [selectedCreneau, setSelectedCreneau] = useState({});
    const [page, setPage] = useState(0);
    const { push } = useRouter();

    const getCurrentMonth = async () => {
        const month = moment().month();
        setCurrentMonth(month);
    };

    const onClickNextMonth = () => {
        setCurrentMonth((prev: any) => {
            if (prev === 11) {
                setCurrentYear((old) => old + 1);
                return 0;
            }
            return prev + 1;
        });
    };

    const onClickPrevMonth = () => {
        setCurrentMonth((prev: any) => {
            if (prev === 0) {
                setCurrentYear((old) => old - 1);
                return 11;
            }
            return prev - 1;
        });
    };

    const generateDayForCurrentMonth = () => {
        const numberOfDay = moment(`${currentYear}-${currentMonth + 1}-01`, 'YYYY-MM-DD').daysInMonth();
        const dayOfMonth = [];

        for (let i = 1; i <= numberOfDay; i++) {
            const date = moment(`${currentYear}-${currentMonth + 1}-${i}`, 'YYYY-MM-DD');
            dayOfMonth.push(date);
        }
        // Trouver la date d'aujourd'hui dans le tableau dayOfMonth
        const today = moment();
        const selectedDay = dayOfMonth.find((day) => day.isSame(today, 'day')) || dayOfMonth[0];

        setSelectedDay(selectedDay);
        setDays(dayOfMonth);
        setBeginAt(moment(dayOfMonth?.[0]).days() - 1);
    };

    const onClickDate = (date: Date) => {
        setSelectedDay(date);
    };

    useEffect(() => {
        generateDayForCurrentMonth();
    }, [currentMonth]);

    useEffect(() => {
        getCurrentMonth();
    }, []);

    const askAvailableHour = async () => {
        const startDate = moment(selectedDay).startOf('days').format();
        const endDate = moment(selectedDay).endOf('days').format();

        setIsLoaded(false);
        try {
            const request = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGZiZWU3MDFjOTMzYzY5NWJhYjgyZiIsImlhdCI6MTY3NjQ5ODUxNCwiZXhwIjoxNzA4MDM0NTE0fQ.7gpp4RWujzYtzEK8dAMWGnfrpWcqOuf7PVnvZfxKHyE`,
                },
            };
            const result = await fetch(
                `https://api-service-integration.la-place.io/calendar/${'6435832aa4eba3f45513feff'}/schedule?startDate=${startDate}&endDate=${endDate}`,
                request
            ).then((rsl) => rsl.json());

            const items = result.items;
            const tzLocal = moment.tz.guess();
            const debutJournee = moment(startDate).set({ hour: 8, minute: 0, second: 0, millisecond: 0 });
            const finJournee = moment(endDate).set({ hour: 19, minute: 0, second: 0, millisecond: 0 });

            let plageHoraireLibre = [];
            let plageHoraireOccupee = [];

            for (let i = debutJournee; i.isBefore(finJournee); i.add(60, 'minutes')) {
                const plage = {
                    debut: i.format(),
                    fin: i.clone().add(60, 'minutes').format(),
                };

                let isNotAvailable = false;

                for (let j = 0; j < items.length; j++) {
                    const item = items[j];
                    const debutEvent = moment.tz(item.startTime, tzLocal);
                    const finEvent = moment.tz(item.endTime, tzLocal);

                    if (debutEvent.isBefore(plage.fin) && finEvent.isAfter(plage.debut)) {
                        isNotAvailable = true;
                        break;
                    }
                }

                if (isNotAvailable) {
                    plageHoraireOccupee.push(plage);
                } else {
                    plageHoraireLibre.push(plage);
                }
            }

            setAvailableHour(plageHoraireLibre);
        } catch (err: any) {
            //
        } finally {
            setIsLoaded(true);
        }
    };

    useEffect(() => {
        if (selectedDay) {
            askAvailableHour();
        }
    }, [selectedDay]);

    const onClickCreneau = (item: any) => {
        setSelectedCreneau(item.debut);
    };

    const onSubmit = async () => {
        console.log('call onsubmit!');
        try {
            const request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGZiZWU3MDFjOTMzYzY5NWJhYjgyZiIsImlhdCI6MTY3NjQ5ODUxNCwiZXhwIjoxNzA4MDM0NTE0fQ.7gpp4RWujzYtzEK8dAMWGnfrpWcqOuf7PVnvZfxKHyE`,
                },
                body: JSON.stringify({
                    title: 'Rendez vous démo!',
                    description: `Description`,
                    startTime: moment(selectedCreneau).format(),
                    endTime: moment(selectedCreneau).add(60, 'minutes').format(),
                }),
            };

            const result = await fetch(`https://api-service-integration.la-place.io/calendar/${'6435832aa4eba3f45513feff'}/create-event`, request).then((rsl) => rsl.json());
            console.log('oui!');
            push('/#');
        } catch (err: any) {
            console.log('err', err);
        }
    };

    return (
        <div className={styles.ScheduleScreen}>
            <div className={styles.left}></div>

            <div className={styles.right}>
                <div className={styles.box}>
                    <div className={styles.boxLeft}>
                        {/* {page !== 0 && (
                            <div style={{ cursor: 'pointer' }} onClick={() => setPage(0)}>
                                <Image src={ArrowLeft} alt="TODO" />
                            </div>
                        )} */}
                        <div style={{ marginTop: 14 }} />
                        {/* <Image src={Alexis} alt="Alexis" width={64} height={64} /> */}
                        {/* <h1>Alexis Dupré</h1> */}
                        <h2 className={styles.h2}>Programmer une visite</h2>
                        <h3 className={styles.h3}>
                            {/* <Image src={Frame} alt="TODO" /> */}
                            60 minutes
                        </h3>

                        {page === 1 && (
                            <h3 style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                                <Image src={Calendar} alt="TODO" />
                                {moment(selectedCreneau).format('dddd DD MMMM - HH:mm')} à {moment(selectedCreneau).add(60, 'minutes').format('HH:mm')}
                            </h3>
                        )}

                        {page === 0 && <div style={{ textTransform: 'capitalize' }}>{moment(selectedDay).lang('fr').format('dddd DD MMMM')}</div>}

                        {isLoaded && page === 0 ? (
                            <div className={styles.containerHours}>
                                {availableHour.map((item) => {
                                    return (
                                        <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                            <div
                                                onClick={() => onClickCreneau(item)}
                                                className={`${styles.containerHour} ${selectedCreneau === item.debut ? styles.containerHourSelected : {}}`}
                                            >
                                                {moment(item.debut).format('HH:mm')} - {moment(item.fin).format('HH:mm')}
                                            </div>

                                            <div
                                                onClick={() => setPage(1)}
                                                className={`${selectedCreneau === item.debut ? styles.containerConfirm : styles.containerConfirmSelected}`}
                                            >
                                                Confirmer
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : null}
                    </div>

                    {page === 0 ? (
                        <div className={styles.boxRight}>
                            <h2 className={styles.h2None}>Programmer une visite</h2>
                            <h3 className={styles.h3None}>60 minutes</h3>
                            <div className={styles.title}>Sélectionnez une date et une heure</div>

                            <div className={styles.header}>
                                <div style={{ display: 'flex', flexDirection: 'row', gap: 8, marginLeft: 10 }}>
                                    <div>{Months[currentMonth]}</div>
                                    <div>{currentYear}</div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', gap: 8, marginRight: 16, marginBottom: 16 }}>
                                    <div onClick={onClickPrevMonth} style={{ color: '#0069FF' }}>
                                        Précédent
                                    </div>
                                    <div onClick={onClickNextMonth} style={{ color: '#0069FF' }}>
                                        Suivant
                                    </div>
                                </div>
                            </div>

                            {days.length > 20 && (
                                <div className={styles.calendar}>
                                    <div className={styles.titleDay}>Lu</div>
                                    <div className={styles.titleDay}>Ma</div>
                                    <div className={styles.titleDay}>Me</div>
                                    <div className={styles.titleDay}>Je</div>
                                    <div className={styles.titleDay}>Ve</div>
                                    <div className={styles.titleDay}>Sa</div>
                                    <div className={styles.titleDay}>Di</div>

                                    {[...Array(beginAt && beginAt > 0 ? beginAt : 0)].map((item) => {
                                        return <div></div>;
                                    })}

                                    {days.map((item, key) => {
                                        return (
                                            <div
                                                onClick={() => onClickDate(item)}
                                                key={key}
                                                className={`${styles.number} ${moment(item).isBefore(today) ? styles.cantSelected : {}} ${
                                                    selectedDay === item ? styles.selected : {}
                                                }`}
                                            >
                                                <p>{moment(item).format('DD')}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className={styles.boxRight}>
                            <div className={styles.title}>Renseignez vos coordonnées</div>
                            <label>Prénom / Nom</label>
                            <input />
                            <label>Email</label>
                            <input />
                            <label>Numéro de téléphone</label>
                            <input />
                            <label>
                                Nous tenons à vous apporter toutes les informations dont vous avez besoin, faites nous les savoir par avance pour être certain d’être en mesure de
                                vous satisfaire. Merci.
                            </label>
                            <input />

                            {isLoaded && page === 1 ? (
                                <div className={styles.containerHours}>
                                    <div
                                        onClick={() => onSubmit()}
                                        style={{
                                            backgroundColor: '#0069FF',
                                            paddingLeft: 20,
                                            paddingRight: 20,
                                            paddingTop: 11,
                                            paddingBottom: 11,
                                            borderRadius: 16,
                                            color: 'white',
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Programmer l’entretien téléphonique
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScheduleSceen;
