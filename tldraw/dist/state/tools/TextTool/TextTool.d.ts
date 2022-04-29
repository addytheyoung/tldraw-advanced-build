import type { TLPointerEventHandler, TLKeyboardEventHandler } from '@tldraw/core';
import { TDShapeType } from '../../../types';
import { BaseTool } from '../BaseTool';
export declare class TextTool extends BaseTool {
    type: TDShapeType.Text;
    stopEditingShape: () => void;
    onKeyUp: TLKeyboardEventHandler;
    onKeyDown: TLKeyboardEventHandler;
    onPointerDown: TLPointerEventHandler;
    onPointerUp: TLPointerEventHandler;
    onPointShape: TLPointerEventHandler;
    onShapeBlur: () => void;
}
//# sourceMappingURL=TextTool.d.ts.map