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
import {
  Control,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import React from "react";

interface Props {
  register: UseFormRegister<any>;
  name: string;
  setValue: UseFormSetValue<any>;
  control: Control<any>;
  trigger: UseFormTrigger<any>;
}

export function DatePicker({
  register,
  name,
  setValue,
  control,
  trigger,
}: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !field.value ? "text-muted-foreground" : "text-zinc-700"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={async (newValue) => {
                    setValue(name, newValue);
                    setOpen(false);
                    await trigger(name);
                  }}
                  {...register(name)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage className="text-xs -mt-5 ml-3 text-red-500" />
          </FormItem>
        )}
      />
    </>
  );
}
