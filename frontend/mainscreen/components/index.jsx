import React, { useState } from 'react'
import ChampScreen from '../../champscreen/components'
import styles from '../styles/Main.scss'
import BodyContainer from './bodyContainer'

const MainScreen = () => {
    const [showlist, setShowList] = useState(true)
    const [champSelected, setChampSelected] = useState({
        id: "no champ"
    })
    return (
        <div className={styles.MainContainer}>
            <div className={styles.HeaderContainer}>
                <div className={styles.HeadItem}>
                    <h3>
                        Bienvenido
                    </h3>
                </div>
                <div className={styles.HeadItem}></div>
                <div className={styles.HeadItem} >
                    <img src="/images/logo.png" alt="" />
                </div>

            </div>

            {
                showlist ?
                    <BodyContainer setChampSelected={setChampSelected} setShowList={setShowList} />
                    :
                    <ChampScreen champSelected={champSelected.id} />
            }
        </div>
    )
}

export default MainScreen
