import { Input } from "@/components/ui/input";
import logo from "../../assets/logo.png";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <main className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-col gap-3 max-w-md w-full justify-center items-center bg-zinc-400 p-4 rounded-lg shadow-xl shadow-zinc-600">
        <div className="bg-zinc-300 border border-zinc-600 p-12 rounded-md w-fit">
          <img src={logo} alt="Logo" className="w-20 " />
        </div>
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Senha" />
        <Button className="w-full">Entrar</Button>
      </div>
    </main>
  );
}
