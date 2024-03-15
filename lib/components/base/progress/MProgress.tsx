/**
 * @description 进度条组件
 * @author Muzych
 * @date 2024/03/15 12:04
 * @version v1.0.0
 */
import './progress.css';
import { ProgressProps } from './index';
import { MC, Slot } from '../../../types';
import { leaf, useProgress } from './useProgress.ts';
import { CSSProperties, useEffect, useMemo, useState } from "react";

export default function MProgress(_props: ProgressProps & MC & Slot) {

    const props = _props as Required<ProgressProps>


    const [value, setValue] = useState(props.value ?? 0);
    const [max, setMax] = useState(props.max ?? 100);

    useEffect(() => {
        setValue(props.value ?? 0);
        setMax(props.max ?? 100);
    }, [props.value, props.max]);

    const { getProgressWrapperStyle, getProgressInfo } = useProgress({ props });
    const progressInfo = useMemo(() => getProgressInfo(), [value, max])
    const progressWrapperInfo = useMemo(() => {
        if (props.showInfo) {
            return getProgressWrapperStyle(progressInfo)
        }
        return undefined;
    }, [props.showInfo, progressInfo])

   

    

    return (
        <>
            {props.showInfo ? (
                <div className="m-progress-border" style={progressWrapperInfo?.baseStyle as CSSProperties}>
                    <div className="m-progress-per" style={progressWrapperInfo?.textStyle as CSSProperties}>
                        <img className="m-progress-leaf" src={leaf} alt="" />
                        {_props.children}
                    </div>
                    <progress className="m-progress" value={value} max={max} style={progressInfo.style as CSSProperties | undefined} />
                </div>
            ) : (
                <progress className="m-progress" value={value} max={max} style={progressInfo.style as CSSProperties | undefined} />
            )}
        </>
    )
}