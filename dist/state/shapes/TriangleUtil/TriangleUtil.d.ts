import * as React from 'react';
import { TLBounds } from '@tldraw/core';
import { TriangleShape, TDShapeType, TDMeta, TDShape } from '../../../types';
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
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<TriangleShape, HTMLDivElement, TDMeta>, "bounds" | "isGhost" | "meta" | "isEditing" | "isSelected" | "shape" | "isBinding" | "events" | "onShapeBlur" | "onShapeChange" | "asset" | "isHovered" | "isChildOfSelected"> & React.RefAttributes<HTMLDivElement>>;
    Indicator: (props: {
        shape: TriangleShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
        bounds: TLBounds;
    }) => JSX.Element;
    private getPoints;
    shouldRender: (prev: T, next: T) => boolean;
    getBounds: (shape: T) => TLBounds;
    getExpandedBounds: (shape: T) => TLBounds;
    hitTestLineSegment: (shape: T, A: number[], B: number[]) => boolean;
    hitTestBounds: (shape: T, bounds: TLBounds) => boolean;
    getBindingPoint: <K extends TDShape>(shape: T, fromShape: K, point: number[], origin: number[], direction: number[], bindAnywhere: boolean) => {
        point: number[];
        distance: number;
    } | undefined;
    transform: typeof transformRectangle;
    transformSingle: typeof transformSingleRectangle;
}
export {};
//# sourceMappingURL=TriangleUtil.d.ts.map