import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/championIndex.scss'
const ChampScreen = ({ champSelected }) => {
    const [champion, setChampion] = useState()
    const [urlSplash, setUrlSplash] = useState("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champSelected + "_0.jpg")

    useEffect(async () => {
        const response = await axios({
            method: 'get',
            url: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/data/es_MX/champion/' + champSelected + '.json',
        });
        console.log("campeon traido", response);
        setChampion(response.data.data[champSelected])
    }, [])

    const Changeskin=(url)=>{
        setUrlSplash(url)
    }

    const Skins = () => {
        console.log("CAMPEON TRAIDO EN SKINS", champion);
        if (champion) {
            console.log("ya termino de cargar el get");
            console.log("URL COMPLETA", "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_" + champion.skins[1].num.toString() + ".jpg");
            return <div className={styles.SkinsContainer}>
                {
                    champion.skins.map(item => {
                        const url="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_" + item.num.toString() + ".jpg"
                        return <img onClick={()=>Changeskin(url)} src={url} />
                    })
                }
            </div>
        }
        else {
            return <div>loading</div>
        }
    }

    return (
        <div className={styles.Main}>
            <div className={styles.ChampInfoCont}>
                <div className={styles.ImageContainer}>
                    <img src={urlSplash} />
                </div>
                <div className={styles.Info}>
                    informacion
                </div>
            </div>
            <div className={styles.Skins}>
                <Skins />
            </div>
        </div>
    )
}

export default ChampScreen