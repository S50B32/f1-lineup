import React from 'react';
import { Oval } from 'svg-loaders-react';


const Spinner = ({isActive}) => isActive ? <Oval className={`spinner`} stroke="#ffffff"/> : null;

export default Spinner;