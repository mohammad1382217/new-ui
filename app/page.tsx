/* Components */


import Link from "next/link"
import { Button, Card, Input, Parag } from "./components/Layout"
import { Metadata } from "next"

export default function IndexPage() {

  return (
    <div className="container">
      <div className="container w-full">
        <Parag Paragraph="With over 8,000 apps for all the different want to customize your store." Pclass="opacity-60 text-center mt-4" />
      </div>
      <div className="container items-center justify-center inline-flex">
        <Input Type="text" Id="" InputClass="absolute bg-slate-500 text-white block outline-0 w-96 mt-8 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-full focus:ring-blue-500 focus:border-blue-500" InputName="search_api" Placeholder="Search API, Apps & Plugin" InputOnChange={undefined} />
        <Button btnTitle="Search Now" Type="button" ClassName="relative bg-white text-black outline-0 w-18 mt-8 mb-4 py-1.5 px-3 rounded-full text-sm left-[8.7rem]" OnClick={undefined} />
      </div>
      <div className="container flex items-center justify-between mt-8">
        <Parag Pclass="ml-24" Paragraph="Explorer What Makes Up A Marketplace" />
        <Link className="mr-24" href="/product">See All</Link>
      </div>
      <div className="container flex items-center justify-center mb-8">
        <Card title="File Manager" text="" />
        <Card title="File Manager" text="" />
        <Card title="File Manager" text="" />
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'UI / UX',
}
