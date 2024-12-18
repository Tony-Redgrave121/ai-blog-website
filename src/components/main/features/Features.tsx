import React, {memo} from 'react'
import style from "./style.module.css"

interface IParams {
    title: string,
    desc: string
}

interface IBlog {
    icon: string,
    title: string,
    desc: string,
    params: Array<IParams>,
}

const Features: React.FC<IBlog> = memo(({icon, desc, title, params}) => {
    return (
        <div className={style.FeatureContainer}>
            <div className={style.FeatureContainerLeft}>
                <img src={require(`../../../utils/icons/main/blogs/${icon}.svg`)} alt={title}/>
                <div>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </div>
            <div className={style.FeatureContainerRight}>
                {
                    params.map(item => (
                        <div key={item.title}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
})

export default Features