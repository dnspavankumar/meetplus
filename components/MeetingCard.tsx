"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { avatarImages } from "@/constants";
import { useToast } from "./ui/use-toast";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="relative overflow-hidden flex min-h-[280px] w-full flex-col justify-between rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700/50 px-6 py-8 xl:max-w-[568px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 group">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl -z-10" />

      <article className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="flex-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30">
            <Image src={icon} alt="meeting" width={24} height={24} className="filter brightness-0 invert" />
          </div>
          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-60" />
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
              {title}
            </h1>
            <p className="text-base font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {date}
            </p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="attendees"
              width={40}
              height={40}
              className={cn("rounded-full", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            />
          ))}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button onClick={handleClick} className="rounded bg-blue-1 px-6">
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="bg-dark-4 px-6"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
