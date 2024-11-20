import React, {FC} from 'react';

interface ButtonProps{
    type: string;
    width?: number;
    height?: number;
    backgroundClass?: string;
    svgSize?: number;
    disabled?: boolean;
    fontSize?: string;
}

const Button: FC<ButtonProps> = ({type, backgroundClass, height, width, svgSize, disabled, fontSize}) =>{
    if(disabled === true){
        backgroundClass += " opacity-50 ";
    }
    if(fontSize === undefined){
        fontSize = 'text-sm';
    }
    return (
        <>
        <style>
        {
          `.params {
                height: 
            }`
        }
      </style>
        {type == "button"?(
            <button type="button" disabled = {disabled} className={`inline-flex justify-between rounded-lg text-lg text-justify px-2.5 mx-5 my-3 ${backgroundClass}`} style={{
                height: height,
                width: width
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 my-auto"
                        style={{
                            height: svgSize,
                            width: svgSize
                        }}
                    >
                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                </svg>
                <span className={`my-auto ${fontSize}`}>
                    Сохранить
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 my-auto"
                    style={{
                        height: svgSize,
                        width: svgSize
                    }}
                >
                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>

            </button>

            /*<div className={`text-lg text-justify px-2 py-3 ${backgroundClass}`} >Сохранить</div>*/
        ):(
            <button type="button" disabled = {disabled} className = {`my-4 ${backgroundClass}`} style={{
                height: height,
                width: width
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
            </button>
        )

            }
            
        </>
    );
}

export default Button;