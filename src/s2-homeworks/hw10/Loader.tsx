import s from './Loader.module.css'

export const Loader = () => (
    <svg className={s.spinner} viewBox="0 0 100 100" width="20" height="20">
        <circle cx="50" cy="50" r="42" transform="rotate(-90,50,50)"/>
    </svg>
)
