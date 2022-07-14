import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

export const Audit = ({ image, url }) => {
    return (
        <div 
            className="col-md-2 col-sm-3 d-flex align-items-stretch"
        >
            <div className={clsx(styles.card)}>
                <a href={url}>
                    <img
                        src={image}
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
};
