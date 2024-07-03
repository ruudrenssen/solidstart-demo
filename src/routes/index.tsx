import { createEffect, createSignal } from "solid-js";

const serverFunction = (count: number) => {
  "use server";

  console.log("server", count);
};

const normalFunction = (count: number) => {
  console.log("normal", count);
};

export default function Index() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    serverFunction(count());
    normalFunction(count());
  });

  return (
    <main>
      <h1>Hello world!</h1>
      <button
        class="increment"
        onClick={() => setCount(count() + 1)}
        type="button"
      >
        Clicks: {count()}
      </button>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
