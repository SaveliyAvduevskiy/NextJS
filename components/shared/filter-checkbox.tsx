import React from 'react'
import { Checkbox } from '../ui/checkbox'; 

export interface filterChecboxProps {
    text: string;
    value: string;
    endAndorment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

export const FilterCheckbox: React.FC<filterChecboxProps> = ({
    text,
    value,
    endAndorment,
    onCheckedChange,
    checked,
}) => {
    return (
        <div className= " flex items-center space x-2">
            <Checkbox
            onCheckedChange={onCheckedChange}
            checked={checked}
            value={value}
            className="rounded-[8px] w-6 h-6"
            id={'checkbox-${string(value)}'}
            />
            <label
                htmlFor={'checkbox-${String(value)}'}
                className='leading-none cursor-pointer flex-1'
            >
                {text}
            </label>
            {endAndorment}
        </div>
    );
};