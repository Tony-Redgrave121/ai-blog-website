import React, {memo} from 'react'
import style from "./style.module.css"

interface ICrossing {
    desc: string,
    title: string,
    children?: React.ReactNode,
}

const Crossing: React.FC<ICrossing> = memo(({desc, title, children}) => {
    return (
        <div className={style.CrossingContainer}>
            <section>
                <div>
                    <div>
                        <p>{desc}</p>
                    </div>
                    <h2>{title}</h2>
                </div>
                {children ? <div className={style.ButtonBlock}>{children}</div> : null}
            </section>
        </div>
    )
})

export default Crossing