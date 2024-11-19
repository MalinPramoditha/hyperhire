import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <div className="flex w-full justify-center items-center">
      <header className="container flex justify-between items-center p-4 h-20 absolute top-0  w-full z-10">
        <div>
          <Image src="/assets/images/logo-white.svg" alt="logo" className="brightness-0 invert" width={120} height={40} />
        </div>
        <div className=" items-center text-base gap-10 hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList >
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white font-black text-base hover:text-white hover:bg-transparent transition-all duration-300 focus:bg-transparent focus:text-white">채용</NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col space-y-2.5 lg:w-64 py-2.5 px-4">
                    <NavigationMenuLink asChild>
                      <Link href="/" className="px-4 py-2.5 text-gray-700 text-sm font-semibold">채용</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild >
                      <Link href="/" className="px-4 py-2.5 text-gray-700 text-sm font-medium">해외 개발자 원격 채용</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild >
                      <Link href="/" className="px-4 py-2.5 text-gray-700 text-sm font-medium">외국인 원격 채용 (비개발 직군)</Link>
                    </NavigationMenuLink>
                  <NavigationMenuLink asChild className="border-t border-[#F2F4F7]">
                      <Link href="/" className="px-4 py-2.5 text-gray-700 text-sm font-medium">한국어 가능 외국인 채용</Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/" className="text-white ">해외 개발자 활용 서비스</Link>
        </div>
          <Link href="/" className="hidden lg:flex text-[#4A77FF]  bg-white px-6 py-1.5 rounded-md cursor-pointer hover:bg-[#4A77FF] hover:text-white transition-all duration-300">
              문의하기
          </Link>
        <Sheet >
          <SheetTrigger className="lg:hidden flex">
            <Menu className="text-white"/>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription className="flex flex-col gap-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-0 flex-col">
                    <AccordionTrigger className="text-base font-black hover:no-underline">
                      채용이
                    </AccordionTrigger>
                    <AccordionContent >
                      <div className="flex flex-col items-start gap-2.5">
                        <Link href="/">채용</Link>
                        <Link href="/">해외 개발자 원격 채용</Link>
                        <Link href="/">외국인 원격 채용 (비개발 직군)</Link>
                        <Link href="/">한국어 가능 외국인 채용</Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link href="/" className="text-state text-start text-base font-black">해외 개발자 활용 서비스</Link>
                <Link href="/" className="flex justify-center text-white  bg-[#4A77FF] px-6 py-1.5 rounded-md cursor-pointer ">
                  문의하기
                </Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </header>

    </div>
  ); 
}
