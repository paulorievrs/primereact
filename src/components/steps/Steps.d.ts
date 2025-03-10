import * as React from 'react';
import { MenuItem } from '../menuitem/MenuItem';

interface SelectParams {
    originalEvent: React.SyntheticEvent;
    item: MenuItem;
    index: number;
}

interface StepsProps {
    id?: string;
    model: MenuItem[];
    activeIndex?: number;
    readOnly?: boolean;
    style?: object;
    className?: string;
    onSelect?(e: SelectParams): void;
}

export class Steps extends React.Component<StepsProps, any> { }
