import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { COINS } from "@/enums";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/datePicker";
import { getCurrency } from "@/api/currency";

export type Inputs = {
  coins: string;
  amount: string;
  date: Date;
};

const Form = () => {
  const { register, handleSubmit, setValue, watch } = useForm<Inputs>({
    defaultValues: {
      date: new Date(),
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { coins, date } = data;

    if (!coins) {
      console.log("Nenhuma moeda selecionada");
      return;
    }

    const formattedDate = date.toISOString().split("T")[0];

    try {
      const currencyResponse = await getCurrency({
        coins,
        date: formattedDate,
      });
      console.log(currencyResponse);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const coins = watch("coins");

  const date = watch("date");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-72"
    >
      <Combobox
        options={COINS}
        register={register}
        name="coins"
        setValue={setValue}
        value={coins}
      />
      <Input
        type="number"
        name="amount"
        className="text-black"
        placeholder="Digite seu valor"
        register={register}
      ></Input>
      <DatePicker
        value={date}
        name="date"
        register={register}
        setValue={setValue}
      />

      <Button type="submit">Buscar</Button>
    </form>
  );
};

export default Form;
