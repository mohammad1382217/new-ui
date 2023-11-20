'use client';

import Link from "next/link";
import { ChangeEventHandler, HTMLInputTypeAttribute, MouseEventHandler } from "react";

export const H1Title = ({ BoldTitle, H1class }: { BoldTitle: string, H1class: string }) => {
  return <h1 className={H1class}>{BoldTitle}</h1>;
};

export const Parag = ({ Paragraph, Pclass }: { Paragraph: string, Pclass: string }) => {
  return <p className={Pclass}>{Paragraph}</p>;
};

export const Button = ({ btnTitle, Type, ClassName, OnClick }: Button) => {
  return (
    <button type={Type} className={ClassName} onClick={OnClick}>
      {btnTitle}
    </button>
  );
};

export const LiMenu = ({ title, className }: { title: string, className: string }) => {
  return (
    <li className={className}><Link href={title}>{title}</Link></li>
  )
}

export const Card = ({ title, text }: { title: string, text: string }) => {
  return (
    <div className="max-w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 mt-8">
      <div className="flex">
        <svg className="w-6 h-6 mr-4 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
        </svg>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
      </div>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
      <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
        Download API
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
        </svg>
      </a>
    </div>
  )
}

export const Input = ({
  Type,
  Id,
  InputName,
  InputClass,
  Placeholder,
  InputOnChange,
}: Input) => {
  return (
    <input
      type={Type}
      id={Id}
      name={InputName}
      className={InputClass}
      placeholder={Placeholder}
      onChange={InputOnChange}
    />
  );
};

// types
interface Button {
  btnTitle: string
  Type: "button" | "submit" | "reset" | undefined
  ClassName: string
  OnClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

interface Input {
  Type: HTMLInputTypeAttribute | undefined
  Id: string
  InputName: string
  InputClass: string
  Placeholder: string
  InputOnChange?: ChangeEventHandler<HTMLInputElement> | undefined
}



















// export const Input = ({
//   Type,
//   InputValue,
//   Id,
//   InputName,
//   InputClass,
//   Placeholder,
//   InputOnChange,
// }) => {
//   return (
//     <input
//       type={Type}
//       value={InputValue}
//       id={Id}
//       name={InputName}
//       className={InputClass}
//       placeholder={Placeholder}
//       onChange={InputOnChange}
//     />
//   );
// };
// export const Lable = ({ HtmlFor, LableClass, LableTitle }) => {
//   return (
//     <label htmlFor={HtmlFor} className={LableClass}>
//       {LableTitle}
//     </label>
//   );
// };

// export const InputPassword = ({ ID, title, Name, OnChange }) => {
//   const dispatch = useDispatch();
//   const setShowPassword = () => dispatch(setIsShowPassword());
//   const isShowPassword = useSelector((state) => state.app.isShowPassword);
//   return (
//     <>
//       <div className="w-full relative inline-flex items-center m-2.5">
//         <Input
//           Type={isShowPassword ? "text" : "password"}
//           Id={ID}
//           InputName={Name}
//           InputClass={
//             "block outline-0 w-full pl-10 pr-2.5 pb-1.5 pt-3 text-base font-normal bg-transparent rounded-md border border-solid border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           }
//           Placeholder={" "}
//           InputOnChange={OnChange}
//         />
//         <Lable
//           HtmlFor={ID}
//           LableClass={
//             "absolute top-1 text-lg cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 z-10 peer-focus:origin-[0] peer-focus:translate-x-3 bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
//           }
//           LableTitle={title}
//         />
//         {isShowPassword ? (
//           <div>
//             <FaEye
//               onClick={setShowPassword}
//               className="relative left-8 h-5 w-5 cursor-pointer"
//             />
//           </div>
//         ) : (
//           <div>
//             <FaEyeSlash
//               onClick={setShowPassword}
//               className="relative left-8 h-5 w-5 cursor-pointer"
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export const InputFloatingLable = ({ ID, title, OnChange, Name }) => {
//   return (
//     <>
//       <div className="relative m-2.5">
//         <Input
//           Type={"text"}
//           Id={ID}
//           InputName={Name}
//           InputClass={
//             "block outline-0 w-full px-2.5 pb-1.5 pt-3 text-base font-normal bg-transparent rounded-md border border-solid border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           }
//           Placeholder={" "}
//           InputOnChange={OnChange}
//         />
//         <Lable
//           HtmlFor={ID}
//           LableClass={
//             "absolute top-1 text-lg cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 z-10 peer-focus:origin-[0] peer-focus:translate-x-3 bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
//           }
//           LableTitle={title}
//         />
//       </div>
//     </>
//   );
// };

// export const InputElem = ({
//   title,
//   address,
//   OnChange,
//   Value,
//   inputLableClass,
//   inputClass,
//   inputName,
//   Placeholder,
//   divClass,
// }) => {
//   return (
//     <div className={divClass}>
//       <Lable
//         HtmlFor={address}
//         LableClass={inputLableClass}
//         LableTitle={title}
//       />
//       <Input
//         Type={"text"}
//         InputValue={Value}
//         Id={address}
//         InputName={inputName}
//         InputClass={inputClass}
//         Placeholder={Placeholder}
//         InputOnChange={OnChange}
//       />
//     </div>
//   );
// };