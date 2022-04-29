import { DrawShape, TDShapeType, TransformInfo } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = DrawShape;
declare type E = SVGSVGElement;
export declare class DrawUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Draw;
    pointsBoundsCache: WeakMap<number[][], TLBounds>;
    shapeBoundsCache: Map<string, TLBounds>;
    rotatedCache: WeakMap<DrawShape, number[][]>;
    pointCache: Record<string, number[]>;
    canClone: boolean;
    getShape: (props: Partial<T>) => T;
    Component: any;
    Indicator: any;
    transform: (shape: T, bounds: TLBounds, { initialShape, scaleX, scaleY }: TransformInfo<T>) => Partial<T>;
    getBounds: (shape: T) => any;
    shouldRender: (prev: T, next: T) => boolean;
    hitTestPoint: (shape: T, point: number[]) => any;
    hitTestLineSegment: (shape: T, A: number[], B: number[]) => boolean;
    hitTestBounds: (shape: T, bounds: TLBounds) => any;
}
export {};
//# sourceMappingURL=DrawUtil.d.ts.map