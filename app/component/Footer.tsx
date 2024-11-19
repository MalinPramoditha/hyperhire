import { Separator } from "@/components/ui/separator"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"

const footerData = [
    {
        icon: "/assets/images/icons/icon-code.png",
        title: "해외 개발자 원격 채용",
        link: "#",
    },
    {
        icon: "/assets/images/icons/icon-avatar.png",
        title: "외국인 원격 채용 (비개발)",
        link: "#",
    },
    {
        icon: "/assets/images/icons/icon-kor.png",
        title: "한국어 가능 외국인 채용",
        link: "#",
    },
    {
        icon: "/assets/images/icons/icon-gear.png",
        title: "해외 개발자 활용 서비스",
        link: "#",
    },
]

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="flex justify-center bg-[#FBFBFB]">
            <div className="container py-[80px] px-4">
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
                    <div className="lg:w-2/6 w-full">
                            <Image src="/assets/images/logo.svg" alt="logo" width={187} height={34} />
                            <h6 className="mt-4 mb-[18px] font-black text-sm text-font-dark">우리는 국가의 장벽을 넘어 최고의 인재를 매<br/>칭해드립니다.</h6>
                            <div className="flex flex-col text-sample space-y-2 font-black text-[13px]">
                                <a href="tel:010-0000-0000" className="text-font-light">010-0000-0000</a>
                                <a href="mailto:aaaaa@naver.com" className="text-font-light">aaaaa@naver.com</a>
                            </div>
                    </div>
                    <div className="lg:w-4/6 w-full ">
                        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-2">
                            {footerData.map((item, index) => (
                            <div key={index} className="h-full">
                                <div className="rounded-md bg-white p-4 h-full">
                                    <div className="p-2 bg-[#EFF1F6] rounded-md size-[40px]">
                                        <Image src={item.icon} alt="footer-1" width={24} height={24} />
                                    </div>
                                    <h6 className="font-black text-sm mt-4 mb-[12px] text-font-dark">{item.title}</h6>
                                    <a href={item.link} className="flex items-center gap-1">
                                        <p className="text-sm font-black text-font-light">바로가기</p>
                                        <div className="w-5 h-5 flex items-center justify-center border border-[#5E626F] rounded-md">
                                            <ArrowRightIcon className="w-3 h-3"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-start py-12 lg:gap-4 gap-9">
                    <div className="lg:w-1/2 w-full flex flex-wrap justify-between  gap-9 lg:gap-0">
                        <div>
                            <h6 className="text-xs text-font-dark">상호명</h6>
                            <p className="mt-[10px] mb-[5px] text-[13px] text-font-light">하이퍼하이어</p>
                            <h5 className="text-[13px] text-font-light">Hyperhire India Private Limited</h5>
                        </div>
                        <div>
                            <h6 className="text-xs text-font-dark">대표 CEO</h6>
                            <p className="mt-[10px] mb-[5px] text-[13px] text-font-light">김주현</p>
                            <h5 className="text-[13px] text-font-light">Juhyun Kim</h5>
                        </div>
                        <div className="lg:pr-6">
                            <h6 className="text-xs text-font-dark ">사업자등록번호 CIN</h6>
                            <p className="mt-[10px] mb-[5px] text-[13px] text-font-light">427-86-01187</p>
                            <h5 className="text-[13px] text-font-light">U74110DL2016PTC290812</h5>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div >
                            <h6 className="text-xs text-font-dark">주소 ADDRESS</h6>
                            <p className="mt-[10px] mb-[5px] text-[13px] text-font-light">서울특별시 강남대로 479, 지하 1층 238호 </p>
                            <h5 className="text-[13px] text-font-light">D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
                                <br/>110053 India</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[13px] text-font-light">ⓒ {year} Hyperhire</p>
                </div>
            </div>
        </footer>
    )
}