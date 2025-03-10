import * as React from 'react';
import { MenuItem } from '../menuitem/MenuItem';

interface PanelMenuProps {
    id?: string;
    model?: MenuItem[];
    style?: object;
    className?: string;
    multiple?: boolean;
    transitionOptions?: object;
}

export class PanelMenu extends React.Component<PanelMenuProps, any> { }
