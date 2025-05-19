import type { FieldValue } from '@strapi/admin/strapi-admin';
import * as React from 'react';
import { EditorApi } from './Editor';
interface WysiwygProps extends Pick<FieldValue, 'onChange'> {
    value: string;
    name: string;
    placeholder?: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
}
declare const MemoizedWysiwyg: React.MemoExoticComponent<React.ForwardRefExoticComponent<WysiwygProps & React.RefAttributes<EditorApi>>>;
export { MemoizedWysiwyg as Wysiwyg };
