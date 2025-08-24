const FloatingInputStatic = ({
  id,
  name,
  isTextArea = false,
  required = false,
  maxLength,
}: {
  id: string;
  name: string;
  isTextArea?: boolean;
  required?: boolean;
  maxLength?: number;
}) => {
  return (
    <div>
      <div className="relative">
        {!isTextArea ? (
          <input
            type="text"
            name={id}
            id={id}
            required={required}
            maxLength={maxLength}
            className={`block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-lg xs-mx:text-base sm-mx:pb-1 sm-mx:pt-2 rounded-xl text-white bg-transparent border border-textColor appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
            placeholder=""
          />
        ) : (
          <textarea
            name={id}
            id={id}
            required={required}
            maxLength={maxLength}
            rows={4}
            className={`block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-lg xs-mx:text-base rounded-xl text-white bg-transparent border border-textColor appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
            placeholder=""
          ></textarea>
        )}

        <label
          htmlFor={id}
          className={`absolute text-xl sm-mx:text-lg xs-mx:text-base text-textColor duration-300 transform -translate-y-4 scale-100 top-1 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${
            !isTextArea
              ? "peer-placeholder-shown:top-1/2"
              : "peer-placeholder-shown:top-6"
          } peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
        >
          {name}
          {/* {required && <span className="text-red-500"> *</span>} */}
        </label>
      </div>
    </div>
  );
};

export default FloatingInputStatic;
