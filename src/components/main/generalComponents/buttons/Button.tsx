import React, {memo} from 'react'
import style from './button.module.css'

interface IButton {
    children: React.ReactNode,
    foo: () => void,
    type?: Array<string>
}

const Button: React.FC<IButton> = memo(({children, foo, type}) => {
    return (
        <button type="button" onClick={() => foo()} className={`${type ? type.map(item => style[item]).join(' ') : ''} ${style.Button}`}>{children}</button>
    )
})

export default Button