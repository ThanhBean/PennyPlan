import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header"
import React, {useState} from 'react';
import ImageUpload from "../components/ImageUpload"

export default function Home() {
  return (
    <div>
      <Head>
        <title>JustRightEstimate</title>
      </Head>

      {/*Header*/}
      <Header />

      <main>
        {/* SubmitImage */}
        <ImageUpload/>
        {/* Calculating*/}
        {/* Price match */}
      </main>
    </div>
  );
}
