import * as React from 'react';
import { AnnotatorState, GetMatchPath } from './types';
export interface WithAnnotatorContextProps {
    annotatorState?: AnnotatorState;
    emitAnnotatorActiveChangeEvent?: (id: string) => void;
    emitRemoveEvent?: (id: string) => void;
    getAnnotationsMatchPath?: GetMatchPath;
    getAnnotationsPath?: (fileVersionId?: string, annotationId?: string) => string;
}
export default function withAnnotatorContext<P extends {}>(WrappedComponent: React.ComponentType<P>): React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<React.RefForwardingComponent<React.ComponentType<P>, {}>>>;
