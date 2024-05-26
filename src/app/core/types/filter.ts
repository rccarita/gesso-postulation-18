import { FilterOperator } from "./filter-operator";

export interface Filter {
    id: string;
    type: 'list' | 'date' | 'string' | 'numeric' | 'boolean' | 'enum';
    field: string;
    value?: any | any[];
    activeFalseValue?: any | any[];
    active?: boolean;
    operator: FilterOperator;
}
