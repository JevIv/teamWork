import React from 'react';
import style from './PageNotFound.module.scss';

export const PageNotFound = () => {
    return (
        <div>
            <h1>404 Error Page</h1>
            <p className={style.zoomArea}><b>Oops!</b> We can't seem to find the page you're looking for. </p>
            <section className={style.errorContainer}>
                <span className={style.four}><span className={style.screenReaderText}>4</span></span>
                <span className={style.zero}><span className={style.screenReaderText}>0</span></span>
                <span className={style.four}><span className={style.screenReaderText}>4</span></span>
            </section>
            <div className={style.linkContainer}>
                <a target="_blank" href="https://www.silocreativo.com/en/creative-examples-404-error-css/"
                   className={style.moreLink}>Home</a>
            </div>
        </div>
    );
};
