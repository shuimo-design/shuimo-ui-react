/**
 * @description rice-paper mountain component
 * @author 阿怪
 * @date 2024/2/27 18:08
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { useEffect, useRef } from 'react';

const setTransform = (el: React.MutableRefObject<HTMLElement | null>, value: string) => {
  if (!el.current) {return;}
  el.current.style.cssText = `transform: ${value};`;
};

const useImgMove = (position: 'left' | 'right' = 'left') => {
  const baseRef = useRef(null);
  const midRef = useRef(null);
  const frontRef = useRef(null);
  const front2Ref = useRef(null);

  const onMove = (x: number, y: number) => {
    const leftFrontRadio = x < 0 ? 2 : 1;
    const rightFrontRadio = x > 0 ? 2 : 1;
    const leftSlowRadio = position === 'left' ? 0.95 : 1;
    const rightSlowRadio = position === 'right' ? 0.95 : 1;
    setTransform(baseRef, `translate(${x * 0.3}px, ${y * 0.3}px)`);
    setTransform(midRef, `translate(${x * 0.8}px, ${y * 0.8}px)`);
    setTransform(frontRef, `translate(${x * leftSlowRadio * leftFrontRadio}px, ${y * leftSlowRadio}px)`);
    setTransform(front2Ref, `translate(${x * rightSlowRadio * rightFrontRadio}px, ${y * rightSlowRadio}px)`);
  };

  return {
    onMove,
    baseRef, midRef, frontRef, front2Ref,
  };
};


export default function MRicePaperMountain() {

  const {
    baseRef: mLBaseRef,
    midRef: mLMidRef,
    frontRef: mLFrontRef,
    front2Ref: mLFront2Ref,
    onMove: leftOnMove,
  } = useImgMove('left');


  const {
    baseRef: mRBaseRef,
    midRef: mRMidRef,
    frontRef: mRFrontRef,
    front2Ref: mRFront2Ref,
    onMove: rightOnMove,
  } = useImgMove('right');

  const moveMountain = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const xPercent = x / w;
    const yPercent = y / h;
    const xMove = xPercent * 10 - 5;
    const yMove = (yPercent * 10 - 5) * 0.5; // UI said y-axis must move very slow.
    leftOnMove(xMove, yMove);
    rightOnMove(xMove, yMove);
  };

  useEffect(() => {
    window.addEventListener('mousemove', moveMountain);
    return () => {
      window.removeEventListener('mousemove', moveMountain);
    };
  }, []);

  return (
    <div className="mountains">
      <div className="m-m-left">
        <div className="m-l-base m-m-reflect" ref={mLBaseRef}/>
        <div className="m-l-mid m-m-reflect" ref={mLMidRef}/>
        <div className="m-l-front m-m-reflect" ref={mLFrontRef}/>
        <div className="m-l-front-2 m-m-reflect" ref={mLFront2Ref}/>
      </div>
      <div className="m-m-right">
        <div className="m-r-base m-m-reflect" ref={mRBaseRef}/>
        <div className="m-r-mid m-m-reflect" ref={mRMidRef}/>
        <div className="m-r-front m-m-reflect" ref={mRFrontRef}/>
        <div className="m-r-front-2 m-m-reflect" ref={mRFront2Ref}/>
      </div>
    </div>
  );
}
