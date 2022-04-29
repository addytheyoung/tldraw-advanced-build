import { TDShapeType, VideoShape } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
import { transformRectangle, transformSingleRectangle } from '../shared';
declare type T = VideoShape;
declare type E = HTMLDivElement;
export declare class VideoUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Video;
    canBind: boolean;
    canEdit: boolean;
    canClone: boolean;
    isAspectRatioLocked: boolean;
    showCloneHandles: boolean;
    isStateful: boolean;
    getShape: (props: Partial<T>) => T;
    Component: any;
    Indicator: any;
    getBounds: (shape: T) => any;
    shouldRender: (prev: T, next: T) => boolean;
    getSvgElement: (shape: VideoShape) => SVGImageElement;
    transform: typeof transformRectangle;
    transformSingle: typeof transformSingleRectangle;
}
export {};
//# sourceMappingURL=VideoUtil.d.ts.map