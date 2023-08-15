import { Button } from "@/components/ui/button";
import logo from "../../assets/logo.png";
import { Combobox } from "@/components/ui/combobox";
import { COINS } from "@/enums";
import { Input } from "@/components/ui/input"
import { DatePicker } from "@/components/ui/datePicker";

export default function Home() {
  return (
    <main className="flex flex-row">
      <div className="h-screen w-1/2 flex justify-center items-center flex-col gap-4">
        <div className="bg-zinc-300 p-12 rounded-md mb-12">
          <img src={logo} alt="Logo" className="w-20 " />
        </div>

        <form className="flex flex-col gap-4 w-72">
          <Combobox options={COINS}/>
          <Input className="text-black" placeholder="Digite seu valor"></Input>
          <DatePicker/>
          <Button>Buscar</Button>
        </form>
      </div>
      <div className="h-screen w-1/2 flex justify-center items-center">
        Direita
      </div>
    </main>
  );
}
