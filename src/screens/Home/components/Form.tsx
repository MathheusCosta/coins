import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form as FormUi } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { COINS } from "@/utils/enums";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/datePicker";
import { getCurrency } from "@/api/currency";
import { useCurrencyStore } from "@/stores/currency.store";
import { convertToTableItemDTO } from "@/utils/dto/convertToTableItem";
import toast from "react-hot-toast";

const getCurrencySchema = z.object({
  coins: z.string({ required_error: "Campo obrigatório" }),
  amount: z.number().positive("Campo precisa ser maior que 0"),
  date: z.date({
    invalid_type_error: "Tipo inválido",
    required_error: "Campo obrigatório",
  }),
});

export type GetCurrencySchema = z.infer<typeof getCurrencySchema>;

const Form = () => {
  const { setCurrencyTableData } = useCurrencyStore((state) => state);

  const form = useForm<GetCurrencySchema>({
    defaultValues: {
      amount: 1,
    },
    resolver: zodResolver(getCurrencySchema),
  });

  const { register, handleSubmit, setValue, formState, control, trigger } =
    form;

  const onSubmit: SubmitHandler<GetCurrencySchema> = async (data) => {
    const { coins, amount, date } = data;

    if (!coins) {
      console.log("Nenhuma moeda selecionada");
      return;
    }

    const formattedDate = date.toISOString().split("T")[0];

    try {
      const currencyResponse = await toast.promise(
        getCurrency({
          coins,
          date: formattedDate,
        }),
        {
          loading: "Buscando informações...",
          success: <b>Sucesso!</b>,
          error: <b>Erro ao buscar informações.</b>,
        }
      );

      const result = convertToTableItemDTO(currencyResponse, coins, amount);

      setCurrencyTableData(result);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <FormUi {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-72"
      >
        <Combobox
          options={COINS}
          register={register}
          name="coins"
          setValue={setValue}
          control={control}
          trigger={trigger}
        />
        <Input
          type="number"
          name="amount"
          placeholder="Digite seu valor"
          register={register}
          error={formState.errors.amount?.message}
        ></Input>
        <DatePicker
          name="date"
          register={register}
          setValue={setValue}
          control={control}
          trigger={trigger}
        />

        <Button type="submit">Buscar</Button>
      </form>
    </FormUi>
  );
};

export default Form;
