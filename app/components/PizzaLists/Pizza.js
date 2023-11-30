import Image from "next/image";
import ActionButtons from "./ActionButtons";

export default function Pizza({ id, href, imageSrc, imageAlt, name, price }) {
  return (
    <div>
      <a href={href} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image
            src={imageSrc}
            width={340}
            height={340}
            alt={imageAlt || "Some image description"}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
      </a>
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <h3 className="mt-4 text-lg  text-gray-700">{name}</h3>
          <p className="mt-1 text-lg font-bold text-gray-900">₱{price}</p>
        </div>
        <ActionButtons pizza={{ id, href, imageSrc, imageAlt, name, price }} />
      </div>
    </div>
  );
}
