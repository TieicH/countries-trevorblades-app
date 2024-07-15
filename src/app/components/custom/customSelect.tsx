import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

interface CustomSelectProps {
  selectItems: { label: string; value: string }[];
  placeholder: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const CustomSelect = ({
  selectItems,
  placeholder,
  onChange,
  disabled = false,
}: CustomSelectProps) => {
  return (
    <Select onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className="w-full h-12 md:w-[280px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {selectItems.map((item) => {
          return (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
