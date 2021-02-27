import React, { useEffect, useState } from 'react'
import './WindowView.sass'
import { IoMdRemove, IoMdSquareOutline, IoMdClose } from 'react-icons/io';
import { BiWindows, BiWindow } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { selectFolderOpen, setFolderOpen } from '../../Redux/appSlice';

function WindowView() {
    const folderOpen = useSelector(selectFolderOpen)
    const [screenMode, setScreenMode] = useState({
        display: 'none',
        height: '50%',
        width: '50%',
        top: 220,
        left: 480,
        border: '1px'
    })
    const [off, setOff] = useState({ x: 10, y: 10 })
    const [isCardMoving, setIsCardMoving] = useState(false);
    const dispatch = useDispatch();

    const windowSize = () => {
        if (screenMode.height == '50%') {
            setScreenMode({ ...screenMode, height: '100%', width: '100%', top: 0, left: 0, border: '0px' })
        } else {
            setScreenMode({ ...screenMode, height: '50%', width: '50%', top: 220, left: 480, border: '1px' })
        }
    }

    const handleCardMove = (event: any) => {
        let x = event.clientX - off.x;
        let y = event.clientY - off.y;
        setScreenMode({ ...screenMode, top: y, left: x })
    };

    const getMouse = (e: any) => {
        setOff({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
    }

    useEffect(() => {
        if (isCardMoving) window.addEventListener("mousemove", handleCardMove);
        else window.removeEventListener("mousemove", handleCardMove);
        return () => window.removeEventListener("mousemove", handleCardMove);
    }, [isCardMoving, handleCardMove]);

    useEffect(() => {
        if (folderOpen) setScreenMode({ ...screenMode, display: 'flex' });
        else setScreenMode({ ...screenMode, display: 'none' });
        return () => setScreenMode({ ...screenMode, display: 'none' });
    }, [screenMode.display, folderOpen]);

    return (
        <div className='windowview' style={{ display: screenMode.display, height: screenMode.height, width: screenMode.width, top: screenMode.top + 'px', left: screenMode.left + 'px', borderWidth: screenMode.border }}>
            <div className='windowview-toolbar' onMouseDown={(e) => { getMouse(e); setIsCardMoving(true) }} onMouseUp={() => { setIsCardMoving(false) }}>
                <div></div>
                <div className='windowview-toolbar-buttons'>
                    <div className='windowview-toolbar-buttons-minimize' onClick={() => { dispatch(setFolderOpen({ folderOpen: !folderOpen })) }} onMouseDown={(e) => { e.stopPropagation() }}>
                        <IoMdRemove />
                    </div>
                    <div className='windowview-toolbar-buttons-maximize' onClick={() => windowSize()} onMouseDown={(e) => { e.stopPropagation() }}>
                        {
                            screenMode.height == '100%' ?
                                <BiWindows /> :
                                <BiWindow />
                        }
                    </div>
                    <div className='windowview-toolbar-buttons-close' onClick={() => { dispatch(setFolderOpen({ folderOpen: !folderOpen })) }} onMouseDown={(e) => { e.stopPropagation() }}>
                        <IoMdClose />
                    </div>
                </div>
            </div>
            <div className='windowview-body' onClick={() => console.log(folderOpen)}>

            </div>
        </div>
    )
}

export default WindowView
