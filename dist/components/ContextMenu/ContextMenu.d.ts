import * as React from 'react';
import { RowButtonProps } from '../Primitives/RowButton';
interface ContextMenuProps {
    onBlur?: React.FocusEventHandler;
    children: React.ReactNode;
}
export declare const ContextMenu: ({ onBlur, children }: ContextMenuProps) => JSX.Element;
export interface ContextMenuSubMenuProps {
    label: string;
    size?: 'small';
    children: React.ReactNode;
    id?: string;
}
export declare function ContextMenuSubMenu({ children, label, size, id, }: ContextMenuSubMenuProps): JSX.Element;
interface CMTriggerButtonProps extends RowButtonProps {
    isSubmenu?: boolean;
}
export declare const CMTriggerButton: ({ isSubmenu, ...rest }: CMTriggerButtonProps) => JSX.Element;
export {};
//# sourceMappingURL=ContextMenu.d.ts.map