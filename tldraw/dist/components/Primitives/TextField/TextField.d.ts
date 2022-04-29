import * as React from 'react';
export interface TextFieldProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    icon?: React.ReactElement;
}
export declare const TextField: ({ value, onChange, placeholder, icon }: TextFieldProps) => JSX.Element;
//# sourceMappingURL=TextField.d.ts.map