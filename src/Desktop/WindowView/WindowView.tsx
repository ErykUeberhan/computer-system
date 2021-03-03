import React, { useEffect, useRef, useState } from 'react'
import './WindowView.sass'
import { IoMdRemove, IoMdSquareOutline, IoMdClose } from 'react-icons/io';
import { BiWindows, BiWindow } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setWindowsOpen } from '../../Redux/appSlice';

function WindowView({ appName, component, isOpen, icon }: any) {
    let windowOpen = isOpen;
    let app = appName + 'Open'
    const [screenMode, setScreenMode] = useState({
        display: 'none',
        height: '500',
        width: '750',
        top: 220,
        left: 480,
        border: '1px'
    })
    const [off, setOff] = useState({ x: 0, y: 0 })
    const [isWindowMoving, setIsWindowMoving] = useState(false);
    const [isWindowResizeing, setIsWindowResizeing] = useState(false);
    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null)
    const windowSize = () => {
        if (screenMode.height != '100%') {
            setScreenMode({ ...screenMode, height: '100%', width: '100%', top: 0, left: 0, border: '0px' })
        } else {
            setScreenMode({ ...screenMode, height: '50%', width: '50%', top: 220, left: 480, border: '1px' })
        }
    }

    const handleWindowMove = (event: any) => {
        let x = event.clientX - off.x;
        let y = event.clientY - off.y;
        setScreenMode({ ...screenMode, top: y, left: x })
    };

    const handleWindowResize = (event: any) => {
        if (ref.current) {
            let x = event.clientX - ref.current?.offsetLeft;
            let y = event.clientY - ref.current?.offsetTop;
            setScreenMode({ ...screenMode, height: String(y + 'px'), width: String(x + 'px') })
        }
    };

    const getMoveMouse = (e: any) => {
        setOff({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
    }

    useEffect(() => {
        if (isWindowMoving) window.addEventListener("mousemove", handleWindowMove);
        else window.removeEventListener("mousemove", handleWindowMove);
        return () => window.removeEventListener("mousemove", handleWindowMove);
    }, [isWindowMoving, handleWindowMove]);

    useEffect(() => {
        if (isWindowResizeing) window.addEventListener("mousemove", handleWindowResize);
        else window.removeEventListener("mousemove", handleWindowResize);
        return () => window.removeEventListener("mousemove", handleWindowResize);
    }, [isWindowResizeing, handleWindowResize]);

    useEffect(() => {
        console.log(windowOpen)
        if (!windowOpen) setScreenMode({ ...screenMode, display: 'none' });
        else setScreenMode({ ...screenMode, display: 'flex' });
        return () => setScreenMode({ ...screenMode, display: 'flex' });
    }, [windowOpen]);

    return (
        <div className='windowview' id={appName} ref={ref} style={{ display: screenMode.display, height: screenMode.height, width: screenMode.width, top: screenMode.top + 'px', left: screenMode.left + 'px', borderWidth: screenMode.border }}>
            <div className='windowview-toolbar' onMouseDown={(e) => { getMoveMouse(e); setIsWindowMoving(true) }} onMouseUp={() => { setIsWindowMoving(false) }}>
                {icon}
                <div className='windowview-toolbar-title'>{appName[0].toUpperCase() + appName.substring(1)}</div>
                <div className='windowview-toolbar-buttons'>
                    <div className='windowview-toolbar-buttons-minimize' onClick={() => { dispatch(setWindowsOpen({ [app]: !windowOpen })) }} onMouseDown={(e) => { e.stopPropagation() }}>
                        <IoMdRemove />
                    </div>
                    <div className='windowview-toolbar-buttons-maximize' onClick={(e) => windowSize()} onMouseDown={(e) => { e.stopPropagation() }}>
                        {
                            screenMode.height == '100%' ?
                                <BiWindows /> :
                                <BiWindow />
                        }
                    </div>
                    <div className='windowview-toolbar-buttons-close' onClick={() => { dispatch(setWindowsOpen({ [app]: !windowOpen })) }} onMouseDown={(e) => { e.stopPropagation() }}>
                        <IoMdClose />
                    </div>
                </div>
            </div>
            <div className='windowview-body' onClick={() => console.log(dispatch(setWindowsOpen))}>
                {component}
            </div>
            {
                screenMode.height == '100%' ?
                    null :
                    <div className='windowview-scale' onMouseDown={() => { setIsWindowResizeing(true) }} onMouseUp={() => { setIsWindowResizeing(false) }}></div>
            }
        </div >
    )
}

export default WindowView
