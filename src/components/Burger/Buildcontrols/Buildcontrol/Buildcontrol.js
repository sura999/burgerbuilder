import React from 'react';
import classes from './Buildcontrol.module.css';

const buildcontrol=(props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.less} disabled={props.disable}>Less</button>
        <button className={classes.More} onClick={props.more}>More</button>
    </div>
)
export default buildcontrol;