import { Separator } from "@/components/ui/separator"
import MainSwiper from "./MainSwiper"
import Image from "next/image";
import { CheckIcon } from "lucide-react";

const mainOptions = [
    {
        title: "평균 월 120만원",
        description: "임금을 해당 국가를 기준으로 계산합니다.",
    },
    {
        title: "최대 3회 인력교체",
        description: "막상 채용해보니 맞지 않아도 걱정하지 마세요.",
    },
    {
        title: "평균 3일, 최대 10일",
        description: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
    },
]

export default async function Main() {

    async function getData() {
        try {
            const candidates = await import('@/data/candidates').then(mod => mod.candidates);
            return candidates;
        } catch (error) {
            console.error('Error loading candidates:', error);
            return [];
        }
    }
    const candidates = await getData();

    return (
        <div className="lg:pb-10 pb-0">
        <div className="container flex flex-col lg:flex-row items-start mx-auto p-4">
            <div className="lg:w-1/2 w-full z-10 pt-10">
                    <div className="animate-in inline-block fade-in-0 slide-in-from-bottom-3 duration-300 lg:bg-white bg-[#8BC4FF] px-3 py-1.5 rounded-md mb-6 relative" >
                    <p className="text-lg lg:text-[#40E2E8] text-white">
                        풀타임, 파트타임
                    </p>
                    <div className="absolute left-3 -bottom-2">
                            <svg className="text-[#8BC4FF] lg:text-white" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.43301 10.25C6.24056 10.5833 5.75944 10.5833 5.56699 10.25L0.370835 1.25C0.178386 0.916665 0.418948 0.499999 0.803848 0.499999L11.1962 0.5C11.5811 0.5 11.8216 0.916667 11.6292 1.25L6.43301 10.25Z" fill="currentColor" />
                            </svg>
                    </div>
                </div>
                <div className="flex flex-col animate-in fade-in-0 slide-in-from-bottom-3 duration-500">
                    <h1 className="text-5xl font-black mb-4 text-white leading-tight">
                        최고의 실력을 가진<br />
                        외국인 인재를 찾고 계신가요?
                    </h1>
                </div>
                    <p className="text-2xl text-white font-black py-4 animate-in fade-in-0 slide-in-from-bottom-3 duration-500">
                    법률 및 인사관리 부담없이<br className="hidden lg:block" />
                    1주일 이내에 확격으로 채용해보세요.
                </p>
                    <p className="hidden lg:block text-lg text-white font-black underline py-2 animate-in fade-in-0 slide-in-from-bottom-3 duration-500" >
                    개발자가 필요하신가요?
                </p>
                    <div className="hidden lg:flex py-14 animate-in fade-in-0 slide-in-from-bottom-3 duration-500">
                    {mainOptions.map((option, index) => (
                        <div key={index} className="w-1/3 flex flex-col text-white space-y-2 pr-12 ">
                                <Separator className="w-32 h-[1px]" />
                                <h6 className="text-lg font-black">{option.title}</h6>
                                <p className="text-base font-black text-white/80">{option.description}</p>
                        </div>
                        ))}
                </div>
            </div>
            <div className="lg:w-1/2 w-full">
                <MainSwiper {...{candidates}} />
            </div>
            <div className="flex flex-col lg:hidden w-full z-10">
                <div className="flex gap-3 mt-[24px] mb-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-3">
                            <div className="size-[20px] bg-[#E8ECFF] rounded-md flex items-center justify-center">
                                <CheckIcon className="size-[14px] text-[#2C599B] " />
                            </div>
                            <p className="text-base text-start font-black text-white">한국어 능력</p>
                        </div> 
                        <div className="flex gap-3">
                            <div className="size-[20px] bg-[#E8ECFF] rounded-md flex items-center justify-center">
                                <CheckIcon className="size-[14px] text-[#2C599B] " />
                            </div>
                            <p className="text-base text-start font-black text-white">겸업 여부</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-3">
                            <div className="size-[20px] bg-[#E8ECFF] rounded-md flex items-center justify-center">
                                <CheckIcon className="size-[14px] text-[#2C599B] " />
                            </div>
                            <p className="text-base text-start font-black text-white">업무 수행 능력</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="size-[20px] bg-[#E8ECFF] rounded-md flex items-center justify-center">
                                <CheckIcon className="size-[14px] text-[#2C599B] " />
                            </div>
                            <p className="text-base text-start font-black text-white">평판 조회</p>
                        </div>
                    </div>
                </div>

                    <p className="text-base text-start text-[#FBFF23] font-black underline py-2 animate-in fade-in-0 slide-in-from-bottom-3 duration-500" >
                        개발자가 필요하신가요?
                    </p>
            </div>
        </div>
        </div>
    );
}