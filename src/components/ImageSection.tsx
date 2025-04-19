

export default function ImageSection() {
  return (
    <div className="overflow-hidden grow shrink self-stretch my-auto min-w-60 w-[419px] max-md:max-w-full">
      <div className=" flex flex-col justify-center md:px-5 md:py-32 md:bg-gray-50 rounded-lg ">
        <div className="mb-0 border p-2 rounded-md border-white border-solid max-md:mb-2.5 max-md:max-w-full">
          <figure className="  flex flex-col border border-gray-200 justify-center items-center p-1.5 w-full bg-gray-100 rounded-md ">
            <img
              src="features_v2.png"
              alt="Feature illustration"
              className="object-contain max-w-full rounded aspect-[1.73] w-[430px]"
            />
          </figure>
        </div>
      </div>
    </div>
  )
}

