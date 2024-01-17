import * as React from 'react';
export declare enum AvatarStyle {
    Circle = "Circle",
    Transparent = "Transparent"
}
export interface AvatarProps {
    avatarStyle: AvatarStyle;
    style?: React.CSSProperties;
}
declare const Avatar: React.FC<any>;
export default Avatar;
export { default as Piece } from './piece';
