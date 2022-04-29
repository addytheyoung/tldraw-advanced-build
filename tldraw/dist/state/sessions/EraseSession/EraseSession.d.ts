import { SessionType, TDStatus, TDShape, TldrawPatch, TldrawCommand } from '../../../types';
import type { TldrawApp } from '../../internal';
import { BaseSession } from '../BaseSession';
export declare class EraseSession extends BaseSession {
    type: SessionType;
    performanceMode: undefined;
    status: TDStatus;
    isLocked?: boolean;
    lockedDirection?: 'horizontal' | 'vertical';
    erasedShapes: Set<TDShape>;
    erasedBindings: Set<import("../../../types").ArrowBinding>;
    initialSelectedShapes: TDShape[];
    erasableShapes: Set<TDShape>;
    prevPoint: number[];
    constructor(app: TldrawApp);
    start: () => TldrawPatch | undefined;
    update: () => TldrawPatch | undefined;
    cancel: () => TldrawPatch | undefined;
    complete: () => TldrawPatch | TldrawCommand | undefined;
}
//# sourceMappingURL=EraseSession.d.ts.map