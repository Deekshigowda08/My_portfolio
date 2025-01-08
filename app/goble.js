import Globe from "@/components/ui/globe";
import { TbBrandDisney } from "react-icons/tb";
import { FaFacebookMessenger } from "react-icons/fa6";


export function GlobeDemo() {
    const handleScrollToBottom = () => { window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })};
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg   pb-40 pt-8 md:pb-60 md:shadow-xl">
        <div className="flex flex-wrap">
        <div className="w-full h-20 flex justify-between px-3">
        <div><TbBrandDisney className="w-8 h-8" /></div>
        <div><FaFacebookMessenger onClick={handleScrollToBottom} className="w-6 h-6" /></div>
        </div>
        <div className="flex flex-wrap mx-5 w-[90vw] mb-10  h-[60%]">
      <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-100/80 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Hey, It's
      </div>
      <div className=" pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-100/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Deekshith H R 
      </div></div></div>
      <Globe className="top-48 " />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
