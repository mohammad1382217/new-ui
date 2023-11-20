'use client'

import Link from "next/link";
import { Button, LiMenu, Parag } from "./Layout";

export const HeaderBottom = ({ titr, redirect }: { titr: string, redirect: string }) => {
  return (
    <div className="flex flex-wrap items-center -mx-2 mb-4 px-2">
      <div className="flex basis-6/12 flex-shrink-0 flex-grow-0 max-w-[50%] w-full p-0 mb-0 bg-transparent">
        <h1 className="m-0 text-xl text-[#212529]">{titr}</h1>
      </div>
      <div className="flex basis-6/12 flex-shrink-0 flex-grow-0 max-w-[50%] w-full p-0 mb-0 bg-transparent justify-end">
        <ol className="flex flex-wrap list-none rounded">
          <li>
            <Link href="/panel" className="text-sm">
              خانه
            </Link>
          </li>
          <li>
            <Link
              href={redirect}
              className="before:content-['/'] before:pl-2 pr-2 text-sm"
            >
              {titr}
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export const HeaderTop = () => {
  return (
    <>
      <nav className="flex flex-row justify-evenly w-100 h-14">
        <Parag Paragraph="/mohammad@gmail.io" Pclass="text-white m-2 p-2" />
        <ul className="flex">
          <LiMenu className={'m-2 p-2 max-[768px]:hidden'} title='Product' />
          <LiMenu className={'m-2 p-2 max-[768px]:hidden'} title='Resources' />
          <LiMenu className={'m-2 p-2 max-[768px]:hidden'} title='Our Work' />
        </ul>
        <section className="flex flex-row">
          <Link href={'FAQ'} className="m-2 p-2">FAQ</Link>
          <Button Type="button" btnTitle="Download API" ClassName="bg-slate-800 text-white m-2 p-2 inline-block rounded-lg" OnClick={() => { }} />
        </section>
      </nav>
      <div className="flex items-center justify-between h-14 mt-2 bg-slate-800">
        <section className="flex flex-col items-baseline justify-center ml-24">
          <h5 className="text-white mx-2 px-2">Unlock Permium</h5>
          <Parag Paragraph="Subscribe to get 50% OFF till 31st Dec" Pclass="text-white opacity-60 mx-2 py-1 px-2 " />
        </section>
        <section className="flex flex-col items-baseline justify-center mr-24">
          <h5 className="text-white mx-2 px-2 font-medium">Learn More</h5>
        </section>
      </div>
    </>
  );
};
