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
import { Option } from "@/utils/types";
import {
  Control,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";

interface Props {
  options: Option[];
  register: UseFormRegister<any>;
  name: string;
  setValue: UseFormSetValue<any>;
  error?: string;
  control: Control<any>;
  trigger: UseFormTrigger<any>;
}

export function Combobox({
  options,
  register,
  name,
  setValue,
  control,
  trigger,
}: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between text-zinc-900"
              >
                {field.value
                  ? options.find((option) => option.value === field.value)
                      ?.label
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
                      onSelect={async () => {
                        setValue(name, option.value);
                        setOpen(false);
                        await trigger(name);
                      }}
                      {...register(name)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          field.value === option.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage className="text-xs -mt-5 ml-3 text-red-500" />
        </FormItem>
      )}
    />
  );
}
