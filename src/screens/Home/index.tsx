import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { COINS } from "@/enums";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/datePicker";

import logo from "../../assets/logo.png";

export type Inputs = {
  coins: string;
  value: number;
  date: string;
};

export default function Home() {
  const { register, handleSubmit, setValue, watch } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const coins = watch("coins");

  return (
    <main className="flex flex-row">
      <div className="h-screen w-1/2 flex justify-center items-center flex-col gap-4">
        <div className="bg-zinc-300 p-12 rounded-md mb-12">
          <img src={logo} alt="Logo" className="w-20 " />
        </div>

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
            className="text-black"
            type="number"
            placeholder="Digite seu valor"
          ></Input>
          <DatePicker />
          <Button type="submit">Buscar</Button>
        </form>
      </div>
      <div className="h-screen w-1/2 flex justify-center items-center">
        Direita
      </div>
    </main>
  );
}
