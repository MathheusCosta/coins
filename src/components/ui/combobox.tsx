import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Option } from "@/types";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface Props {
  options: Option[];
  register: UseFormRegister<any>;
  name: string;
  setValue: UseFormSetValue<any>;
  value: string;
}

export function Combobox({ options, register, name, setValue, value }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-zinc-900"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Selecione uma opção"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popper-anchor-width)] p-0 ">
        <Command id={name}>
          <CommandInput placeholder="Digite uma moeda..." />
          <CommandEmpty>Nenhuma moeda encontrada.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                id={name}
                value={option.label}
                onSelect={() => {
                  setValue(name, option.value);
                  setOpen(false);
                }}
                {...register(name)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
