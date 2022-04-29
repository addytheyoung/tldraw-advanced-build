import type { TLPointerEventHandler } from '@tldraw/core';
import { TDShapeType } from '../../../types';
import { BaseTool } from '../BaseTool';
export declare class StickyTool extends BaseTool {
    type: TDShapeType.Sticky;
    shapeId?: string;
    onPointerDown: TLPointerEventHandler;
    onPointerUp: TLPointerEventHandler;
}
//# sourceMappingURL=StickyTool.d.ts.map