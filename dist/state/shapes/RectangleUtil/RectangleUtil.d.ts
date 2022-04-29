import * as React from 'react';
import { RectangleShape, TDShapeType, TDMeta } from '../../../types';
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
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<RectangleShape, HTMLDivElement, TDMeta>, "bounds" | "isGhost" | "meta" | "isEditing" | "isSelected" | "shape" | "isBinding" | "events" | "onShapeBlur" | "onShapeChange" | "asset" | "isHovered" | "isChildOfSelected"> & React.RefAttributes<HTMLDivElement>>;
    Indicator: (props: {
        shape: RectangleShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
        bounds: import("@tldraw/core").TLBounds;
    }) => JSX.Element;
    getBounds: (shape: T) => import("@tldraw/core").TLBounds;
    shouldRender: (prev: T, next: T) => boolean;
    transform: typeof transformRectangle;
    transformSingle: typeof transformSingleRectangle;
}
export {};
//# sourceMappingURL=RectangleUtil.d.ts.map