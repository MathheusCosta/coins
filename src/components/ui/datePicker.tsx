import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
  name: string;
  setValue: UseFormSetValue<any>;
  value: Date;
}

export function DatePicker({ name, register, setValue, value }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !value ? "text-muted-foreground" : "text-zinc-700"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>Selecione uma data</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(newValue) => {
            setValue(name, newValue);
          }}
          {...register(name)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
