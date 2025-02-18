import Image from "next/image";
import PanelLayout from "./components/PanelLayout";
import TipForm from "./components/TipForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-cent p-5 lg:p-24">
      <h1 className="my-14 text-center text-3xl font-bold uppercase tracking-wides text-cyan-800">
        Tip Splitter
      </h1>

      <PanelLayout>
        <TipForm></TipForm>
      </PanelLayout>
    </main>
  );
}
