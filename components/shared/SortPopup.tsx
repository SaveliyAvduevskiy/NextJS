import { ArrowUpDown } from "lucide-react";
interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    return (
        <div className="flex items-center gap-2">
            <ArrowUpDown size={12} className=""/><p>Сортировка:</p><p className="text-primary">популярное</p>
        </div>
    );
};