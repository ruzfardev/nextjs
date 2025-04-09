import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Author, Startup } from "@/sanity/types";

export type Card = Omit<Startup, "author"> & {
  author?: Author;
};

interface Props {
  startup: Card;
}

const StartupCard = ({ startup }: Props) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(startup._createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{startup.views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${startup.author?._id}`}>
            <p className="text-16-medium line-clamp-1">
              {startup.author?.name}
            </p>
          </Link>
          <Link href={`/startup/${startup._id}`}>
            <h3 className="text-26-semibold line-clamp-1">
              {startup.description}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${startup.author?._id}`}>
          <Image
            src="https://i.pravatar.cc/600"
            alt="placeholder"
            className="rounded-full"
            height={48}
            width={48}
          />
        </Link>
      </div>
      <Link href={`/startup/${startup._id}`}>
        <p className="startup-card_desc">{startup.description}</p>
        <img className="startup-card_img" src={startup.image} alt="startup" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/query=${startup.category}`}>
          <p className="text-16-medium">{startup.category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${startup._id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
