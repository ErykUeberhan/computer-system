import React, { useCallback, useEffect, useState } from 'react'
import './WindowView.sass'
import { IoMdRemove, IoMdSquareOutline, IoMdClose } from 'react-icons/io';

function WindowView() {
    const [display, setDisplay] = useState('flex')
    const [maximize, setMaximize] = useState('50%')
    const [position, setPosition] = useState({ x: 600, y: 600 })
    const [off, setOff] = useState({ x: 10, y: 10 })
    const [X, setX] = useState(100)
    const [isCardMoving, setIsCardMoving] = useState(false);

    const windowSize = () => {
        if (maximize == '50%') setMaximize('100%')
        else setMaximize('50%')
    }

    const handleCardMove = useCallback((event) => {
        // console.log({ x: event.clientX, y: event.clientY });
        let x = event.clientX - X;
        let y = event.clientY - off.y;
        console.log({ x: off.x, y: off.y });
        // console.log({ bx: x, by: y });
        setPosition({ x: x, y: y })
        // console.log({ x: off['x'], y: off['y'] });
    }, []);

    const getMouse = (e: any) => {
        setOff({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
        setX(e.nativeEvent.offsetX)
        console.log({ x: off.x, y: off.y });
    }
    // const relativeCoords = (event: any) => {
    //     let bounds = event.target.getBoundingClientRect();
    //     let x = event.clientX - bounds.left;
    //     let y = event.clientY - bounds.top;
    // }

    useEffect(() => {
        if (isCardMoving) window.addEventListener("mousemove", handleCardMove);
        else window.removeEventListener("mousemove", handleCardMove);
        return () => window.removeEventListener("mousemove", handleCardMove);
    }, [isCardMoving, handleCardMove]);

    return (
        <div className='windowview' style={{ display: display, width: maximize, height: maximize, top: position['y'] + 'px', left: position['x'] + 'px' }}>
            <div className='windowview-toolbar' onClick={(e) => { getMouse(e); setIsCardMoving(!isCardMoving) }}>
                <div></div>
                <div className='windowview-toolbar-buttons'>
                    <div className='windowview-toolbar-buttons-minimize' onClick={() => setDisplay('none')}>
                        <IoMdRemove />
                    </div>
                    <div className='windowview-toolbar-buttons-maximize' onClick={() => windowSize()}>
                        <IoMdSquareOutline />
                    </div>
                    <div className='windowview-toolbar-buttons-close' onClick={() => setDisplay('none')}>
                        <IoMdClose />
                    </div>
                </div>
            </div>
            <div className='windowview-body'>

            </div>
        </div>
    )
}

export default WindowView
