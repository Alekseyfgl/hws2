import React, {FC} from 'react'
import Affair from './affair/Affair'
import {AffairPriorityType, AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[] // need to fix any
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (id:number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType): JSX.Element {

    const setAll = (value: 'all'):void => {
        props.setFilter(value)
    }
    const setHigh = (value: 'high'):void => {
        props.setFilter(value)
    }
    const setMiddle = (value: 'middle'):void => {
        props.setFilter(value)
    }
    const setLow = (value: 'low'):void => {
        props.setFilter(value)
    }

    const cnAll = s.button + ' ' + s.all + (props.filter === 'all' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s.high + (props.filter === 'high' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.middle + (props.filter === 'middle' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.low + (props.filter === 'low' ? ' ' + s.active : '')

    const mappedAffairs: JSX.Element[] = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={() =>props.deleteAffairCallback(a._id)}
        />
    ))

    return (
        <div>
            <div className={s.buttonContainer}>
                <button
                    id={'hw2-button-all'}
                    onClick={() => setAll('all')}
                    className={cnAll}
                >
                    All
                </button>
                <button
                    id={'hw2-button-high'}
                    onClick={() => setHigh('high')}
                    className={cnHigh}
                >
                    High
                </button>
                <button
                    id={'hw2-button-middle'}
                    onClick={() => setMiddle('middle')}
                    className={cnMiddle}
                >
                    Middle
                </button>
                <button
                    id={'hw2-button-low'}
                    onClick={() => setLow('low')}
                    className={cnLow}
                >
                    Low
                </button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
