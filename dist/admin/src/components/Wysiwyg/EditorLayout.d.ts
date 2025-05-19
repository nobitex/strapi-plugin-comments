import * as React from 'react';
interface EditorLayoutProps {
    children: React.ReactNode;
    isExpandMode: boolean;
    error?: string;
    previewContent?: string;
    onCollapse: () => void;
}
declare const EditorLayout: ({ children, isExpandMode, error, previewContent, onCollapse, }: EditorLayoutProps) => import("react/jsx-runtime").JSX.Element;
declare const ExpandButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<any, never>> | (import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<any, never>> & Omit<any, keyof React.Component<any, {}, any>>);
export { EditorLayout, ExpandButton };
export type { EditorLayoutProps };
