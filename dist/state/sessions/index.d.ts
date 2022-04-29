import { ExceptFirst, SessionType } from '../../types';
import { ArrowSession } from './ArrowSession';
import { BrushSession } from './BrushSession';
import { DrawSession } from './DrawSession';
import { HandleSession } from './HandleSession';
import { RotateSession } from './RotateSession';
import { TransformSession } from './TransformSession';
import { TransformSingleSession } from './TransformSingleSession';
import { TranslateSession } from './TranslateSession';
import { EraseSession } from './EraseSession';
import { GridSession } from './GridSession';
export declare type TldrawSession = ArrowSession | BrushSession | DrawSession | HandleSession | RotateSession | TransformSession | TransformSingleSession | TranslateSession | EraseSession | GridSession;
export interface SessionsMap {
    [SessionType.Arrow]: typeof ArrowSession;
    [SessionType.Brush]: typeof BrushSession;
    [SessionType.Draw]: typeof DrawSession;
    [SessionType.Erase]: typeof EraseSession;
    [SessionType.Handle]: typeof HandleSession;
    [SessionType.Rotate]: typeof RotateSession;
    [SessionType.Transform]: typeof TransformSession;
    [SessionType.TransformSingle]: typeof TransformSingleSession;
    [SessionType.Translate]: typeof TranslateSession;
    [SessionType.Grid]: typeof GridSession;
}
export declare type SessionOfType<K extends SessionType> = SessionsMap[K];
export declare type SessionArgsOfType<K extends SessionType> = ExceptFirst<ConstructorParameters<SessionOfType<K>>>;
export declare const sessions: {
    [K in SessionType]: SessionsMap[K];
};
export declare const getSession: <K extends SessionType>(type: K) => SessionOfType<K>;
//# sourceMappingURL=index.d.ts.map