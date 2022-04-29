import { TLPointerEventHandler } from '@tldraw/core';
import { TDShapeType } from '../../../types';
import { BaseTool } from '../BaseTool';
export declare class DrawTool extends BaseTool {
    type: TDShapeType.Draw;
    private lastShapeId?;
    onEnter: () => void;
    onCancel: () => void;
    onPointerDown: TLPointerEventHandler;
    onPointerMove: TLPointerEventHandler;
    onPointerUp: TLPointerEventHandler;
}
//# sourceMappingURL=DrawTool.d.ts.map