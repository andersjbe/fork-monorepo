import { trpc } from "../hooks/trpc";

export default function Greeting() {
  const hi = trpc.hi.useQuery();
  if (!hi.data) return <h1>LOADING</h1>;

  return <h1>{hi.data.greeting}</h1>;
}
