import { Button } from "@/components/ui/button";
import useCounterStore from "@/store/counterStore";

const HomePage = () => {
  const count = useCounterStore((state) => state.bears);
  const increment = useCounterStore((state) => state.increase);
  const decrement = useCounterStore((state) => state.decrease);

  return (
    <div className="w-full flex h-full">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-xl text-[#ff0080] ">Bears : {count}</h1>

        <Button onClick={() => increment(1)}>Increase +</Button>
        <Button onClick={() => decrement(1)}>Decrease -</Button>
      </div>
    </div>
  );
};

export default HomePage;
