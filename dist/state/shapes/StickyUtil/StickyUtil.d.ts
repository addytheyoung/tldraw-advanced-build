import { StickyShape, TDShapeType, TransformInfo } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = StickyShape;
declare type E = HTMLDivElement;
export declare class StickyUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Sticky;
    canBind: boolean;
    canEdit: boolean;
    canClone: boolean;
    hideResizeHandles: boolean;
    showCloneHandles: boolean;
    getShape: (props: Partial<T>) => T;
    Component: any;
    Indicator: any;
    getBounds: (shape: T) => any;
    shouldRender: (prev: T, next: T) => boolean;
    transform: (shape: T, bounds: TLBounds, { scaleX, scaleY, transformOrigin }: TransformInfo<T>) => Partial<T>;
    transformSingle: (shape: T) => Partial<T>;
    getSvgElement: (shape: T) => SVGElement | void;
}
export {};
//# sourceMappingURL=StickyUtil.d.ts.map