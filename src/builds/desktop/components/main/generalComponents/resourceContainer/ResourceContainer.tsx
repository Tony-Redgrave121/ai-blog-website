import React from 'react'
import style from "./style.module.css"

interface IResourceContainerProps {
    children: React.ReactNode,
}

const ResourceContainer: React.FC<IResourceContainerProps> = ({children}) => {
    return (
        <div className={style.ResourceContainer}>
            {children}
        </div>
    )
}

export default ResourceContainer