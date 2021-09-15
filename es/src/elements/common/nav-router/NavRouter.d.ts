import * as React from 'react';
import { History } from 'history';
declare type Props = {
    children: React.ReactNode;
    history?: History;
    initialEntries?: History.LocationDescriptor[];
};
declare const NavRouter: ({ children, history, ...rest }: Props) => JSX.Element;
export default NavRouter;
