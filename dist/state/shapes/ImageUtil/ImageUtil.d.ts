import { TDShapeType, ImageShape } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
import { transformRectangle, transformSingleRectangle } from '../shared';
declare type T = ImageShape;
declare type E = HTMLDivElement;
export declare class ImageUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Image;
    canBind: boolean;
    canClone: boolean;
    isAspectRatioLocked: boolean;
    showCloneHandles: boolean;
    getShape: (props: Partial<T>) => T;
    Component: any;
    Indicator: any;
    getBounds: (shape: T) => any;
    shouldRender: (prev: T, next: T) => boolean;
    transform: typeof transformRectangle;
    transformSingle: typeof transformSingleRectangle;
    getSvgElement: (shape: ImageShape) => SVGImageElement;
}
export {};
//# sourceMappingURL=ImageUtil.d.ts.map