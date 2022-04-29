import { TriangleShape, TDShapeType, TDShape } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
import { transformRectangle, transformSingleRectangle } from '../shared';
declare type T = TriangleShape;
declare type E = HTMLDivElement;
export declare class TriangleUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Triangle;
    canBind: boolean;
    canClone: boolean;
    canEdit: boolean;
    getShape: (props: Partial<T>) => T;
    Component: any;
    Indicator: any;
    private getPoints;
    shouldRender: (prev: T, next: T) => boolean;
    getBounds: (shape: T) => any;
    getExpandedBounds: (shape: T) => any;
    hitTestLineSegment: (shape: T, A: number[], B: number[]) => boolean;
    hitTestBounds: (shape: T, bounds: TLBounds) => boolean;
    getBindingPoint: <K extends TDShape>(shape: T, fromShape: K, point: number[], origin: number[], direction: number[], bindAnywhere: boolean) => {
        point: any;
        distance: number;
    } | undefined;
    transform: typeof transformRectangle;
    transformSingle: typeof transformSingleRectangle;
}
export {};
//# sourceMappingURL=TriangleUtil.d.ts.map