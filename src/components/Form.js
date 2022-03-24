import React from "react";

const Form = () => {
  const checkoutInfo = [
    {
      id: 0,
      title: "Full name",
      value: "John Smith",
    },
    {
      id: 1,
      title: "Email",
      value: "j.smith@test.com",
    },
    {
      id: 2,
      title: "Street address",
      value: "Fakestreet 75",
    },
    {
      id: 3,
      title: "City",
      value: "Fakecity",
    },
    {
      id: 4,
      title: "Country",
      value: "Fakecountry",
    },
    {
      id: 5,
      title: "Card number",
      value: "1234 5678 9123 4567",
    },
    {
      id: 6,
      title: "Card holder",
      value: "John Smith",
    },
  ];
  return (
    <div>
      {checkoutInfo.map((info) => {
        return (
          <div key={info.id} className="flex flex-col">
            <label>{info.title}</label>
            <input
              type="text"
              name={info.title}
              id={info.title}
              defaultValue={info.value}
              className=" border-2 border-gray-400 rounded-sm py-3 mb-3 pl-2"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Form;
