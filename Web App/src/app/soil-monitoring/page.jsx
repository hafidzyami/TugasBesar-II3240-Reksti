"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function SoilMonitor() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!Cookies.get("loggedmacaddress")) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <p className="h-screen flex justify-center items-center">Loading...</p>
      ) : (
        <>
          <Navbar />
          <div className="flex flex-col justify-center items-center h-screen">
            <embed
              src="https://thingsboard.cloud/dashboard/c75516a0-23e5-11ef-b47a-4b47b368e850?publicId=f00e8b70-23e6-11ef-aa16-e306a24f1090"
              className="h-full w-full md:w-[1000px] md:h-[450px] rounded-xl md:rounded-3xl"
              data-aos="fade-up"
            ></embed>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
