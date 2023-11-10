import { hash } from '../../utils/utils';
import { STORAGE_STYLE } from '../../storage/const';
import { COLOR } from '../../storage/const';
import { CACHE_TABLE } from '../../storage/const';

import './Button.css'


const createStyle = ()=>{
    const style = document.createElement('style');
    document.head.insertAdjacentElement("beforeend", style);
    return style;
}
function generateStyleRulles (variant, color, cacheName){
    let cssRules = `.${CACHE_TABLE[cacheName]}{`;
    if(variant==='soft'){
        cssRules+=`background-color: ${COLOR[color].softColor}; color: ${COLOR[color].defaultColor};}`;
        cssRules+=`.${CACHE_TABLE[cacheName]}:hover{background-color: ${COLOR[color].softColorHover}}`;
    }
    if(variant==='outlined'){
        cssRules+=`background-color: transparent; color: ${COLOR[color].defaultColor}; outline: 1px solid ${COLOR[color].defaultColor};}`;
        cssRules+=`.${CACHE_TABLE[cacheName]}:hover{background-color: ${COLOR[color].softColor}}`;
    }
    if(variant==='plain'){
        cssRules+=`background-color: transparent; color: ${COLOR[color].defaultColor};}`;
        cssRules+=`.${CACHE_TABLE[cacheName]}:hover{background-color: ${COLOR[color].softColor}}`;
    }
    return cssRules;
}

export function Button ({children, variant, color, size, disabled}){
    const classList = ['button'];
    if(size) classList.push(size);
    if(color) classList.push(color);

    if(variant && color && !disabled){
        if(!STORAGE_STYLE.buttonStyle)STORAGE_STYLE.buttonStyle = createStyle();
        const cacheName = `${variant}-${color}`;
        if(!CACHE_TABLE[cacheName]){
            CACHE_TABLE[cacheName] = `button-${hash()}`;
           const style = generateStyleRulles(variant, color, cacheName);
            STORAGE_STYLE.buttonStyle.innerText += style;
        }
        classList.push(CACHE_TABLE[cacheName])
    }
    if(disabled){
        switch (variant) {
            case 'soft':
                classList.push('btnA');
                break;
            case 'plain':
                classList.push('btnA');
                break;
            case 'outlined':
                classList.push('btnB');
                break;
        }
        
        if(!variant){
            classList.push('btnC');
        }
    }

    return <button disabled={disabled} className={classList.join(' ')} >
        {children}
    </button>
}