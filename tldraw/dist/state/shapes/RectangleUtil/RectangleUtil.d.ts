import { RectangleShape, TDShapeType } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
import { transformRectangle, transformSingleRectangle } from '../shared';
declare type T = RectangleShape;
declare type E = HTMLDivElement;
export declare class RectangleUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Rectangle;
    canBind: boolean;
    canClone: boolean;
    canEdit: boolean;
    getShape: (props: Partial<T>) => T;
    Component: any;
    Indicator: any;
    getBounds: (shape: T) => any;
    shouldRender: (prev: T, next: T) => boolean;
    transform: typeof transformRectangle;
    transformSingle: typeof transformSingleRectangle;
}
export {};
//# sourceMappingURL=RectangleUtil.d.ts.map