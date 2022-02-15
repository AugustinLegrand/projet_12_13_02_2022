import './Aside.css'

export default function AsideComponent() {
    return (
        <div className='aside'>
            <div className='aside-list'>
                <img src="../../yoga.svg" alt='Yoga icon' />
                <img src="../../nage.svg" alt='Nage icon' />
                <img src="../../velo.svg" alt='Velo icon' />
                <img src="../../jcp.svg" alt='Sport icon' />
            </div>
            <p>
                Copiryght, SportSee 2000
            </p>
        </div>

    )
}