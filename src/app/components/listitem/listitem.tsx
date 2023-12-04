'use client'

import { useEffect, useRef } from 'react';
import getValueFromScrollPositon from '../utils';
import styles from './styles.module.css'
import { IoCheckbox } from "react-icons/io5";

interface ListItemPropsInterface {
    text: string
}

export default function ListItem(props: ListItemPropsInterface) {
    const { text } = props

    const listItemRef = useRef<HTMLLIElement>(null);
    const listItemContentRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const listItemContent = listItemContentRef.current


        const listWrapperObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    listItemContent?.classList.add(`${styles.listitemshown}`)
                }
            })
        }, { threshold: 1, });
    
        if (listItemContent) {
            listWrapperObserver.observe(listItemContent)
        }

        return () => {
          if (listItemContent) {
            listWrapperObserver.unobserve(listItemContent);
          }
        };
    }, []);

    return (
        <li ref={listItemRef}>
            <div ref={listItemContentRef} className={styles.listitem}>
                <div className={styles.listcheck}>
                    <IoCheckbox />
                </div>
                <p>
                    {text}
                </p>
            </div>
        </li>
    )
}