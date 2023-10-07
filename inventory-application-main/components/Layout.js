import Head from "next/head";
import NavBar from "./navbar/NavBar";
import React from "react";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-12 grid-rows-6 min-h-screen">
      <Head>
        <title>Inventory Application | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex col-span-12 row-span-5">
        <NavBar />
        {children}
      </main>

      <footer className="col-span-12 row-span-1 flex items-center justify-center w-full border-t">
        This is the footer
      </footer>
    </div>
  );
}

export default Layout;
