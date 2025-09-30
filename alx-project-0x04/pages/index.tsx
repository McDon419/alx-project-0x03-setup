import { PageRouteProps } from "@/interface";

export default function Home({ title, description }: HomeProps) {
  return (
    <main>
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
  );
}
