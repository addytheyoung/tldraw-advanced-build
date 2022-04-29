import * as React from 'react';
export declare function useFileSystemHandlers(): {
    onNewProject: (e?: KeyboardEvent | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | undefined) => Promise<void>;
    onSaveProject: (e?: KeyboardEvent | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | undefined) => void;
    onSaveProjectAs: (e?: KeyboardEvent | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | undefined) => void;
    onOpenProject: (e?: KeyboardEvent | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | undefined) => Promise<void>;
    onOpenMedia: (e?: KeyboardEvent | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | undefined) => Promise<void>;
};
//# sourceMappingURL=useFileSystemHandlers.d.ts.map