import { SessionType, ShapesWithProp, TldrawCommand, TldrawPatch, TDStatus } from '../../../types';
import { BaseSession } from '../BaseSession';
import type { TldrawApp } from '../../internal';
export declare class HandleSession extends BaseSession {
    type: SessionType;
    performanceMode: undefined;
    status: TDStatus;
    commandId: string;
    topLeft: number[];
    shiftKey: boolean;
    initialShape: ShapesWithProp<'handles'>;
    handleId: string;
    constructor(app: TldrawApp, shapeId: string, handleId: string, commandId?: string);
    start: () => TldrawPatch | undefined;
    update: () => TldrawPatch | undefined;
    cancel: () => TldrawPatch | undefined;
    complete: () => TldrawPatch | TldrawCommand | undefined;
}
//# sourceMappingURL=HandleSession.d.ts.map