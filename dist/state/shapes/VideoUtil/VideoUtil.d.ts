import * as React from 'react';
import { TDShapeType, TDMeta, VideoShape } from '../../../types';
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
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<VideoShape, HTMLDivElement, TDMeta>, "bounds" | "isGhost" | "meta" | "isEditing" | "isSelected" | "shape" | "isBinding" | "events" | "onShapeBlur" | "onShapeChange" | "asset" | "isHovered" | "isChildOfSelected"> & React.RefAttributes<HTMLDivElement>>;
    Indicator: (props: {
        shape: VideoShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
        bounds: import("@tldraw/core").TLBounds;
    }) => JSX.Element;
    getBounds: (shape: T) => import("@tldraw/core").TLBounds;
    shouldRender: (prev: T, next: T) => boolean;
    getSvgElement: (shape: VideoShape) => SVGImageElement;
    transform: typeof transformRectangle;
    transformSingle: typeof transformSingleRectangle;
}
export {};
//# sourceMappingURL=VideoUtil.d.ts.map