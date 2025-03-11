'use client'; // Директива Next.js для использования компонента на стороне клиента 

import React from "react";
import { FilterCheckbox, filterChecboxProps } from "./filter-checkbox";
import { Input } from "../ui/input";

type Item = filterChecboxProps;

interface Props {
    title:string;
    items: Item[];
    defaultltems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?:(values: string[]) => void;
    defaultValue?: String[];
    className?: string;
}

