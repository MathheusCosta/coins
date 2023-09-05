import logo from "../../assets/logo.png";
import Form from "./components/Form";
import Table from "./components/Table";

export default function Home() {
  return (
    <main className="flex flex-row">
      <div className="h-screen w-1/2 flex justify-center items-center flex-col gap-4">
        <div className="bg-zinc-300 p-12 rounded-md mb-12">
          <img src={logo} alt="Logo" className="w-20 " />
        </div>

        <Form />
      </div>

      <div className="h-screen w-1/2 flex justify-center items-center">
        <Table />
      </div>
    </main>
  );
}
