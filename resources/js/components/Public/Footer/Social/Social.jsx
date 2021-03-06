import React from 'react';


const Social = (props) => {
    let social = props.social ? Object.keys(props.social).map((item, key) => <li key={key}><a href={props.social[item]} target="_blank" rel="nofollow noopener"></a></li>) : null
    return (
        <ul>
            {social}
        </ul>
    )
}


export default Social;
