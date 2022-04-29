import { SessionType, TldrawCommand, TldrawPatch, TDStatus, RectangleShape, TriangleShape, EllipseShape, ArrowShape } from '../../../types';
import { BaseSession } from '../BaseSession';
import type { TldrawApp } from '../../internal';
import type { TLBounds } from '@tldraw/core';
export declare class TranslateLabelSession extends BaseSession {
    type: SessionType;
    performanceMode: undefined;
    status: TDStatus;
    initialShape: RectangleShape | TriangleShape | EllipseShape | ArrowShape;
    initialShapeBounds: TLBounds;
    constructor(app: TldrawApp, shapeId: string);
    start: () => TldrawPatch | undefined;
    update: () => TldrawPatch | undefined;
    cancel: () => TldrawPatch | undefined;
    complete: () => TldrawPatch | TldrawCommand | undefined;
}
//# sourceMappingURL=TranslateLabelSession.d.ts.map