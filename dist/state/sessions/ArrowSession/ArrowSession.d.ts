import { ArrowShape, TDBinding, TDStatus, SessionType, TldrawPatch, TldrawCommand } from '../../../types';
import { BaseSession } from '../BaseSession';
import type { TldrawApp } from '../../internal';
export declare class ArrowSession extends BaseSession {
    type: SessionType;
    performanceMode: undefined;
    status: TDStatus;
    newStartBindingId: string;
    draggedBindingId: string;
    didBind: boolean;
    initialShape: ArrowShape;
    handleId: 'start' | 'end';
    bindableShapeIds: string[];
    initialBinding?: TDBinding;
    startBindingShapeId?: string;
    isCreate: boolean;
    constructor(app: TldrawApp, shapeId: string, handleId: 'start' | 'end', isCreate?: boolean);
    start: () => TldrawPatch | undefined;
    update: () => TldrawPatch | undefined;
    cancel: () => TldrawPatch | undefined;
    complete: () => TldrawPatch | TldrawCommand | undefined;
    private findBindingPoint;
}
//# sourceMappingURL=ArrowSession.d.ts.map