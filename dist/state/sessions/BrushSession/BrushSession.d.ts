import { TLBounds } from '@tldraw/core';
import { SessionType, TldrawPatch, TDStatus, TldrawCommand } from '../../../types';
import type { TldrawApp } from '../../internal';
import { BaseSession } from '../BaseSession';
export declare class BrushSession extends BaseSession {
    type: SessionType;
    performanceMode: undefined;
    status: TDStatus;
    initialSelectedIds: Set<string>;
    shapesToTest: {
        id: string;
        bounds: TLBounds;
        selectId: string;
    }[];
    constructor(app: TldrawApp);
    start: () => TldrawPatch | undefined;
    update: () => TldrawPatch | undefined;
    cancel: () => TldrawPatch | undefined;
    complete: () => TldrawPatch | TldrawCommand | undefined;
}
//# sourceMappingURL=BrushSession.d.ts.map