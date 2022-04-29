import * as React from 'react';
import { TLBounds } from '@tldraw/core';
import { ArrowShape, TransformInfo, TDShapeType, TDMeta } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = ArrowShape;
declare type E = HTMLDivElement;
export declare class ArrowUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Arrow;
    hideBounds: boolean;
    canEdit: boolean;
    pathCache: WeakMap<ArrowShape, string>;
    getShape: (props: Partial<T>) => T;
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<ArrowShape, HTMLDivElement, TDMeta>, "bounds" | "isGhost" | "meta" | "isEditing" | "isSelected" | "shape" | "isBinding" | "events" | "onShapeBlur" | "onShapeChange" | "asset" | "isHovered" | "isChildOfSelected"> & React.RefAttributes<HTMLDivElement>>;
    Indicator: (props: {
        shape: ArrowShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
        bounds: TLBounds;
    }) => JSX.Element;
    getBounds: (shape: T) => TLBounds;
    getRotatedBounds: (shape: T) => TLBounds;
    getCenter: (shape: T) => number[];
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