/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  // eslint-disable-next-line no-unused-vars
  CartesianGrid,
  Tooltip,
  Legend,
  // eslint-disable-next-line no-unused-vars
  ResponsiveContainer,
} from "recharts";

import { Audio, FallingLines } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(response => response.json())
    // .then(data => setPhones(data.data))
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phonesData = data.data.data;
        const phonesWithFakeData = phonesData.map((phone) => {
          const object = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return object;
        });
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && (
        <div>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      )}
      <h2 className="text-3xl">Phones : {phones.length}</h2>
      <BarChart width={1200} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
