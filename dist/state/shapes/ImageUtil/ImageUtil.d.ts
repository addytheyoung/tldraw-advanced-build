import * as React from 'react';
import { TDShapeType, TDMeta, ImageShape } from '../../../types';
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
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<ImageShape, HTMLDivElement, TDMeta>, "bounds" | "isGhost" | "meta" | "isEditing" | "isSelected" | "shape" | "isBinding" | "events" | "onShapeBlur" | "onShapeChange" | "asset" | "isHovered" | "isChildOfSelected"> & React.RefAttributes<HTMLDivElement>>;
    Indicator: (props: {
        shape: ImageShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
        bounds: import("@tldraw/core").TLBounds;
    }) => JSX.Element;
    getBounds: (shape: T) => import("@tldraw/core").TLBounds;
    shouldRender: (prev: T, next: T) => boolean;
    transform: typeof transformRectangle;
    transformSingle: typeof transformSingleRectangle;
    getSvgElement: (shape: ImageShape) => SVGImageElement;
}
export {};
//# sourceMappingURL=ImageUtil.d.ts.map