import { EllipseShape, TDShapeType, TDShape, TransformInfo } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = EllipseShape;
declare type E = HTMLDivElement;
export declare class EllipseUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Ellipse;
    canBind: boolean;
    canClone: boolean;
    canEdit: boolean;
    getShape: (props: Partial<T>) => T;
    Component: any;
    Indicator: any;
    hitTestPoint: (shape: T, point: number[]) => boolean;
    hitTestLineSegment: (shape: T, A: number[], B: number[]) => boolean;
    getBounds: (shape: T) => any;
    getRotatedBounds: (shape: T) => TLBounds;
    hitTestBounds: (shape: T, bounds: TLBounds) => boolean;
    shouldRender: (prev: T, next: T) => boolean;
    getCenter: (shape: T) => number[];
    getBindingPoint: <K extends TDShape>(shape: T, fromShape: K, point: number[], origin: number[], direction: number[], bindAnywhere: boolean) => {
        point: number[];
        distance: number;
    } | undefined;
    transform: (shape: T, bounds: TLBounds, { scaleX, scaleY, initialShape }: TransformInfo<T>) => Partial<T>;
    transformSingle: (shape: T, bounds: TLBounds) => Partial<T>;
}
export {};
//# sourceMappingURL=EllipseUtil.d.ts.map