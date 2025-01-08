import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "TaxWE",
    username: "@webproject",
    body: "A project to help taxi drivers to fill their vacant seats.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Expenditure manager",
    username: "@webproject",
    body: "A project to track and provide information about an individual's expenditures.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Dynamic gst calculator",
    username: "@webproject",
    body: "A calculator which calculates gst dynamic.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "SGPA Calculator",
    username: "@webproject",
    body: "A Calculator which calculate sgpa according to student marks.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "SmartFace Attendance",
    username: "@Python project",
    body: "A model which take attendence on recognition of face.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "File Compressor",
    username: "@jsproject",
    body: "A project to compress MB file to KB.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[300px] w-[90%] mx-auto flex-col items-center mb-32 justify-center overflow-hidden rounded-lg  bg-black md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l "></div>
    </div>
  );
}
