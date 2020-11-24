import React, { useState,useEffect } from 'react'
import styles from '../styles/Body.scss'
import axios from 'axios'
import ChampsContainer from './champContainer'

const BodyContainer = ({setShowList,setChampSelected}) => {

    const [state, setState] = useState('')
    const [champions, setChampions]= useState([])
    const [newChampionsList, setNewChampionsList] = useState([])

    useEffect(async () => {
     const response = await axios({
            method: 'get',
            url:'http://ddragon.leagueoflegends.com/cdn/10.21.1/data/es_MX/champion.json',

       });
       const array = []
       for (const eachone in response.data.data){
            array.push(response.data.data[eachone])
       }
       setChampions(array)
       setNewChampionsList(array)
    }, [])
    const handleChange =(e) => {
         setState(e.target.value);
         const newChampList=champions.filter(item=>{
             if(item.id.toLowerCase().includes(e.target.value.toLowerCase())){
                 return item
             }
             return 
         })
         setNewChampionsList(newChampList)
    }



    return (
        <div className={styles.Main}>
            <div className={styles.SearchContainer}>
            <input value={state} name="champion" onChange={handleChange} type="text" placeholder="Campeon"/>    
            </div>
            <div className={styles.ChampsContainer}>
                {
                    newChampionsList.map((item)=> {
                        return <ChampsContainer setChampSelected={setChampSelected}  setShowList={setShowList} key= {item.id} data={item} />
                    })


                }
                

            </div>
        </div>
    )
}

export default BodyContainer
