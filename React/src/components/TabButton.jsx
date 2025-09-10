import React from 'react'

// export default function TabButton(props) {
//     return <li><button onClick={props.onSelect}>{props.children}</button></li>
// }

export default function TabButton({children, onSelect, isSelect}) {
    return <li><button onClick={onSelect} className={isSelect ? 'active' : ''}>{children}</button></li>;
}

// export default function TabButton({label}) {
//     return <li><button>{label}</button></li>
// }