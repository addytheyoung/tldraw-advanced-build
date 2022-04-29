import type { TldrawApp } from '../state';
export declare function useFileSystem(): {
    onNewProject: (app: TldrawApp) => Promise<void>;
    onSaveProject: (app: TldrawApp) => void;
    onSaveProjectAs: (app: TldrawApp) => void;
    onOpenProject: (app: TldrawApp) => Promise<void>;
    onOpenMedia: (app: TldrawApp) => Promise<void>;
};
//# sourceMappingURL=useFileSystem.d.ts.map