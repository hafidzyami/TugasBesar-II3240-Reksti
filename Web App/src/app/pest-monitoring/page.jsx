"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardImage from "../../components/CardImage";
import { BlobServiceClient } from "@azure/storage-blob";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export default function PestMonitoring() {
  const [images, setImages] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const router = useRouter();

  // useEffect(() => {
  //   if (!Cookies.get("loggedmacaddress")) {
  //     router.push("/");
  //   } else {
  //     const fetchImages = async () => {
  //       const blobs = [];
  //       for await (const blob of containerClient.listBlobsFlat()) {
  //         blobs.push(blob.name);
  //       }
  //       setImages(blobs);
  //     };
  //     fetchImages();
  //     setIsLoading(false);
  //   }
  // }, []);

  // const deleteImage = async (imageName) => {
  //   const blobClient = containerClient.getBlockBlobClient(imageName);
  //   try {
  //     await blobClient.delete();
  //     // Update the state to remove the deleted image
  //     setImages((prevImages) => prevImages.filter((img) => img !== imageName));
  //   } catch (error) {
  //     console.error("Error deleting image:", error.message);
  //   }
  // };

  const formatDate = (datetime) => {
    if (datetime[0] == "n") {
      datetime = datetime.slice(1);
    }
    const year = datetime.substring(0, 4);
    const month = datetime.substring(4, 6);
    const day = datetime.substring(6, 8);
    const hour = datetime.substring(8, 10);
    const minute = datetime.substring(10, 12);
    const second = datetime.substring(12, 14);
    return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
  };

  return (
    <>
      <Navbar />
      <div className="mt-24 mb-8 flex flex-col justify-center items-center">
        <div>ESP32-CAM Images</div>
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 sm:grid-cols-2">
          <div class="w-[11.4rem] h-[20.5rem] md:w-[19rem] md:h-[28rem] bg-[#E5E5E5] border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg w-[11.4rem] md:w-[19rem] h-[10.2rem] md:h-[16rem]"
                src="/imageafms1.jpg"
                alt="Pest"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-sm md:text-xl font-bold tracking-tight text-[#274C5B] dark:text-white">
                  Date : 06/06/2024
                </h5>
                <h5 class="mb-2 md:mb-3 text-sm md:text-xl font-bold tracking-tight text-[#274C5B] dark:text-white">
                  Time : 16.45
                </h5>
              </a>
              <p
                className={`${robotoMono.className} mb-3 md:mb-4 font-normal text-xs md:text-base text-center
                  text-[#FF0000]
                }`}
              >
                Wereng Not Detected
              </p>
              <div className="flex space-x-2 md:space-x-4 justify-center">
                <a
                  // href="href={`https://tpkiot.blob.core.windows.net/${containerName}/${image}`}"
                  class="inline-flex shadow items-center px-4 md:px-7 py-2 text-sm font-medium text-center text-white bg-[#274C5B] rounded-lg hover:bg-black"
                >
                  Save
                </a>
                <button
                  // onClick={handleDelete}
                  class="inline-flex shadow items-center px-3 md:px-6 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-black hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div class="w-[11.4rem] h-[20.5rem] md:w-[19rem] md:h-[28rem] bg-[#E5E5E5] border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg w-[11.4rem] md:w-[19rem] h-[10.2rem] md:h-[16rem]"
                src="/imageafms2.jpg"
                alt="Pest"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-sm md:text-xl font-bold tracking-tight text-[#274C5B] dark:text-white">
                  Date : 06/06/2024
                </h5>
                <h5 class="mb-2 md:mb-3 text-sm md:text-xl font-bold tracking-tight text-[#274C5B] dark:text-white">
                  Time : 16.45
                </h5>
              </a>
              <p
                className={`${robotoMono.className} mb-3 md:mb-4 font-normal text-xs md:text-base text-center
                  text-[#00A224]
                }`}
              >
                Wereng Detected
              </p>
              <div className="flex space-x-2 md:space-x-4 justify-center">
                <a
                  // href="href={`https://tpkiot.blob.core.windows.net/${containerName}/${image}`}"
                  class="inline-flex shadow items-center px-4 md:px-7 py-2 text-sm font-medium text-center text-white bg-[#274C5B] rounded-lg hover:bg-black"
                >
                  Save
                </a>
                <button
                  // onClick={handleDelete}
                  class="inline-flex shadow items-center px-3 md:px-6 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-black hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div class="w-[11.4rem] h-[20.5rem] md:w-[19rem] md:h-[28rem] bg-[#E5E5E5] border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg w-[11.4rem] md:w-[19rem] h-[10.2rem] md:h-[16rem]"
                src="/imageafms3.jpg"
                alt="Pest"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-sm md:text-xl font-bold tracking-tight text-[#274C5B] dark:text-white">
                  Date : 06/06/2024
                </h5>
                <h5 class="mb-2 md:mb-3 text-sm md:text-xl font-bold tracking-tight text-[#274C5B] dark:text-white">
                  Time : 16.45
                </h5>
              </a>
              <p
                className={`${robotoMono.className} mb-3 md:mb-4 font-normal text-xs md:text-base text-center
                  text-[#00A224]
                }`}
              >
                Wereng Detected
              </p>
              <div className="flex space-x-2 md:space-x-4 justify-center">
                <a
                  // href="href={`https://tpkiot.blob.core.windows.net/${containerName}/${image}`}"
                  class="inline-flex shadow items-center px-4 md:px-7 py-2 text-sm font-medium text-center text-white bg-[#274C5B] rounded-lg hover:bg-black"
                >
                  Save
                </a>
                <button
                  // onClick={handleDelete}
                  class="inline-flex shadow items-center px-3 md:px-6 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-black hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
