import Link from "next/link";
import { Image } from "cloudinary-react";
import { HousesQuery_houses } from "src/generated/HousesQuery";

interface IProps {
  houses: HousesQuery_houses[];
}

export default function HouseList({ houses }: IProps) {
<<<<<<< HEAD
  return (
    <>
      {houses.map((house) => (
        <Link key={house.id} href={`/houses/${house.id}`}>
          <div className="px-6 pt-4 cursor-pointer flex flex-wrap">
            <div className="sm:w-full md:w-1/2">
              <Image
                className="pb-2"
                cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                publicId={house.publicId}
                alt={house.address}
                secure
                dpr="auto"
                quality="auto"
                width={350}
                height={Math.floor((9 / 16) * 350)}
                crop="fill"
                gravity="auto"
              />
            </div>
            <div className="sm:w-full md:w-1/2 sm:pl-0 md:pl-4">
              <h2 className="text-lg">{}house.address</h2>
              <p>{house.bedrooms} 🛏 house</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
=======
  return houses.map((house) => (
    <Link key={house.id} href={`/houses/${house.id}`}>
      <div className="px-6 pt-4 cursor-pointer flex flex-wrap">
        <div className="sm:w-full md:w-1/2">
          <Image
            className="pb-2"
            cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
            publicId={house.publicId}
            alt={house.address}
            secure
            dpr="auto"
            quality="auto"
            width={350}
            height={Math.floor((9 / 16) * 350)}
            crop="fill"
            gravity="auto"
          />
        </div>
        <div className="sm:w-full md:w-1/2 sm:pl-0 md:pl-4">
          <h2 className="text-lg">{}house.address</h2>
          <p>{house.bedrooms} 🛏 house</p>
        </div>
      </div>
    </Link>
  ));
>>>>>>> d80408c886c19ac8e5f10ad43c21c3b9d70148b9
}
