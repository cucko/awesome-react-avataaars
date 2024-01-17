import * as React from 'react';
import { PieceProps } from './piece';
export interface Props {
    maskID: string;
}
export default class Skin extends React.Component<Props & PieceProps> {
    render(): React.JSX.Element;
}
