import { ArrowShape, TransformInfo, TDShapeType } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = ArrowShape;
declare type E = HTMLDivElement;
export declare class ArrowUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Arrow;
    hideBounds: boolean;
    canEdit: boolean;
    pathCache: WeakMap<ArrowShape, string>;
    getShape: (props: Partial<T>) => T;
    Component: any;
    Indicator: any;
    getBounds: (shape: T) => any;
    getRotatedBounds: (shape: T) => any;
    getCenter: (shape: T) => any;
    shouldRender: (prev: T, next: T) => boolean;
    hitTestPoint: (shape: T, point: number[]) => boolean;
    hitTestLineSegment: (shape: T, A: number[], B: number[]) => boolean;
    hitTestBounds: (shape: T, bounds: TLBounds) => boolean;
    transform: (shape: T, bounds: TLBounds, { initialShape, scaleX, scaleY }: TransformInfo<T>) => Partial<T>;
    onDoubleClickHandle: (shape: T, handle: Partial<T['handles']>) => Partial<T> | void;
    onHandleChange: (shape: T, handles: Partial<T['handles']>) => Partial<T> | void;
}
export {};
//# sourceMappingURL=ArrowUtil.d.ts.map