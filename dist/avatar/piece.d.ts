import * as React from 'react';
import { AvatarStyle } from '.';
export interface PieceComponentProps {
    pieceSize?: string;
    pieceType?: string;
    avatarStyle: AvatarStyle;
    style?: React.CSSProperties;
    viewBox?: string;
}
export interface PieceProps {
    renderPieceOnly?: boolean;
    pieceDescription?: any;
}
export default class PieceComponent extends React.Component<PieceComponentProps> {
    render(): React.JSX.Element;
}
