import { TLBoundsCorner, TLBoundsEdge, TLBoundsWithCenter, TLBounds } from '@tldraw/core';
import { SessionType, TldrawCommand, TldrawPatch, TDShape, TDStatus } from '../../../types';
import { BaseSession } from '../BaseSession';
import type { TldrawApp } from '../../internal';
declare type SnapInfo = {
    state: 'empty';
} | {
    state: 'ready';
    bounds: TLBoundsWithCenter[];
};
export declare class TransformSingleSession extends BaseSession {
    type: SessionType;
    status: TDStatus;
    performanceMode: undefined;
    transformType: TLBoundsEdge | TLBoundsCorner;
    scaleX: number;
    scaleY: number;
    isCreate: boolean;
    initialShape: TDShape;
    initialShapeBounds: TLBounds;
    initialCommonBounds: TLBounds;
    snapInfo: SnapInfo;
    prevPoint: number[];
    speed: number;
    constructor(app: TldrawApp, id: string, transformType: TLBoundsEdge | TLBoundsCorner, isCreate?: boolean);
    start: () => TldrawPatch | undefined;
    update: () => TldrawPatch | undefined;
    cancel: () => TldrawPatch | undefined;
    complete: () => TldrawPatch | TldrawCommand | undefined;
}
export {};
//# sourceMappingURL=TransformSingleSession.d.ts.map