import * as React from 'react';
import { Location } from 'history';
import { Action, Annotator, AnnotationActionEvent, GetMatchPath } from './types';
export declare type ActiveChangeEvent = {
    annotationId: string | null;
    fileVersionId: string;
};
export declare type ActiveChangeEventHandler = (event: ActiveChangeEvent) => void;
export declare type ComponentWithAnnotations = {
    emitActiveChangeEvent: (id: string | null) => void;
    emitRemoveEvent: (id: string) => void;
    getAction: (eventData: AnnotationActionEvent) => Action;
    getAnnotationsPath: (fileVersionId?: string, annotationId?: string | null) => string;
    getMatchPath: GetMatchPath;
    handleActiveChange: ActiveChangeEventHandler;
    handleAnnotationChangeEvent: (id: string | null) => void;
    handleAnnotationCreate: (eventData: AnnotationActionEvent) => void;
    handleAnnotationFetchError: ({ error }: {
        error: Error;
    }) => void;
    handleAnnotator: (annotator: Annotator) => void;
    handlePreviewDestroy: (shouldReset?: boolean) => void;
};
export declare type WithAnnotationsProps = {
    location?: Location;
    onAnnotator: (annotator: Annotator) => void;
    onError?: (error: Error, code: string, contextInfo?: Record<string, unknown>) => void;
    onPreviewDestroy: (shouldReset?: boolean) => void;
};
export declare type WithAnnotationsComponent<P> = React.ComponentClass<P & WithAnnotationsProps>;
export default function withAnnotations<P extends object>(WrappedComponent: React.ComponentType<P>): WithAnnotationsComponent<P>;
