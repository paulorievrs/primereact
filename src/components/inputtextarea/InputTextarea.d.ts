import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface InputTextareaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    autoResize?: boolean;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
}

export class InputTextarea extends React.Component<InputTextareaProps, any> { }
