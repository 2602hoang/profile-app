import { cn } from "@/lib/utils";
import Image from "next/image";

const ReviewCard = ({
  key,
  title,
  description,
  git,
  demo,
  image,
}: {
  key: number;
  title?: string;
  description?: object;
  git?: string;
  demo?: string;
  image?: string;
}) => {
  return (
    <figure
      key={key}
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <Image
          width={400}
          height={400}
          alt={title as string}
          src={image ?? "/me.png"}
          loading="lazy"
          className="max-w-full h-48 object-cover"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {title}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{git}</p>
          <p className="text-xs font-medium dark:text-white/40">{demo}</p>
        </div>
      </div>
      {Object.values(description ?? {}).map((desc, index) => (
        <blockquote className="mt-2 text-sm" key={index}>
          {desc}
        </blockquote>
      ))}
    </figure>
  );
};
export default ReviewCard;
