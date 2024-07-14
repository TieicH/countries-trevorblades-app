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
}

export const CustomSelect = ({
  selectItems,
  placeholder,
  onChange,
}: CustomSelectProps) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[280px]">
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
