import Head from "next/head";
import PomodoroApp from "../Components/PomodoroApp";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-black">
      <Head>
        <title>Pomodoro App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <PomodoroApp />
      </div>
    </div>
  );
}
