import { TLBounds } from '@tldraw/core';
import { TDShape, TDStatus, SessionType, TldrawPatch, TldrawCommand } from '../../../types';
import { BaseSession } from '../BaseSession';
import type { TldrawApp } from '../../internal';
export declare class GridSession extends BaseSession {
    type: SessionType;
    performanceMode: undefined;
    status: TDStatus;
    shape: TDShape;
    bounds: TLBounds;
    initialSelectedIds: string[];
    initialSiblings?: string[];
    grid: Record<string, string>;
    columns: number;
    rows: number;
    isCopying: boolean;
    constructor(app: TldrawApp, id: string);
    start: () => TldrawPatch | undefined;
    update: () => TldrawPatch | undefined;
    cancel: () => TldrawPatch | undefined;
    complete: () => TldrawPatch | TldrawCommand | undefined;
    private getClone;
}
//# sourceMappingURL=GridSession.d.ts.map