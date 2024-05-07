import React from "react";
interface ResetButtonProps {
    title: string;
    canReset: boolean;
    onClick: () => void;
}
export declare const ResetButton: (props: ResetButtonProps) => React.JSX.Element;
export {};
