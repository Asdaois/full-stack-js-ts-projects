import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ message }) {
  return <Layout>{message}</Layout>;
}

export async function getServerSideProps(params) {
  let message = await fetch('/api')
  message = await message.json();
  return {
    props: { message },
  };
}
