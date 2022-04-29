import React from 'react';
import s from './Modal.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setActivateModal} from '../../../n1-main/m2-bll/s1-reducer/app-reducer';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';

type ModalType = {
    children?: React.ReactNode
    open?: boolean
    onClick: () => void
    titleButton?: string
    buttonTitle?: string
    title?: string
    setModal: (modal: string) => void
}

export const Modal = ({
                          children,
                          open,
                          onClick,
                          buttonTitle,
                          title,
                          setModal
                      }: ModalType) => {

    return (<>
            {open
                ? <div className={!open ? s.active : s.modal} onClick={() => setModal('close')}>
                    <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={s.modalHeader}>
                            <div className={s.modalTitle}>{title}</div>
                            <hr/>
                        </div>
                        <div className={s.modalBody}>
                            {children}
                        </div>
                        <div className={s.modalFooter}>
                            <button onClick={() => setModal('close')}>Close</button>
                            <button onClick={onClick}>{buttonTitle}</button>
                        </div>
                    </div>
                </div>
                : <></>
            }
        </>

    );
};

