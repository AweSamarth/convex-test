"use client";
import Image from "next/image";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  const theRandomNumber = useQuery(api.randomquery.get);
  const taskCreator = useMutation(api.taskcreator.createTask);

  const [theTask, setTheTask] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {tasks?.map(({ _id, text }) => (
          <div key={_id}>{text}</div>
        ))}
        {theRandomNumber}
      </div>
      <input
        onChange={(event) => setTheTask(event.target.value)}
        className="text-black"
        value={theTask}
      />
      <button
        onClick={() => {
          taskCreator({ text: theTask });
        }}
      >
        Create
      </button>
      <div></div>
    </main>
  );
}
