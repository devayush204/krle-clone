import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";
import AdminNav from './AdminNav'
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceDot, ResponsiveContainer } from 'recharts';


const AdminDashboard = () => {
  const [chartList, setChartList] = useState([]);

  const [doctorsList, setDoctorsList] = useState([]);
  const [patientsList, setPateintsList] = useState([]);
  const [appointmentList, setappointmentList] = useState([]);


  // getting json data of 4 bars 
  useEffect(() => {
    axios.get("/AdminDashboardCharts.json")
      .then((res) => {
        setChartList(res.data)
        // console.log(res.data);
      })
  }, [])

  // getting data of Doctors 
  useEffect(() => {
    axios.get("/DoctorsList.json")
      .then((res) => {
        setDoctorsList(res.data);
        // console.log(res.data)
      })
  }, [])

  // getting data of Patients 
  useEffect(() => {
    axios.get("/PatientsList.json")
      .then((res) => {
        setPateintsList(res.data);
        // console.log(res.data)
      })
  }, [])

  // getting data of appointment list 
  useEffect(() => {
    axios.get("/AppointmentList.json")
      .then((res) => {
        setappointmentList(res.data);

      })
  }, [])



  const data = [
    { x: 'Jan', y: 120 },
    { x: 'Feb', y: 150 },
    { x: 'Mar', y: 200 },
    { x: 'Apr', y: 180 },
    { x: 'May', y: 210 },
    { x: 'Jun', y: 160 },
  ];

  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "#667eea"); // blue
    gradient.addColorStop(1, "#764ba2"); // purple

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 60],
            backgroundColor: gradient,
            borderColor: "transparent",
            pointBackgroundColor: "transparent",
            pointBorderColor: "transparent",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, []);







  return (
    <>
      <AdminNav />

      {/* main page  */}
      <div className='bg-[#F8F9FA] ml-[250px] py-4 px-3 '>
        <div className='my-2 mx-3'>
          {/* heading  */}
          <div className='md:w-auto  flex flex-col '>
            <p className='text-3xl text-black font-semibold'>
              Welcome Admin!
            </p>
            <p className='text-md text-zinc-600 font-semibold mt-2'>
              Dashboard
            </p>
          </div>

          <div>
            {/* four charts */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 ">
              {
                chartList.map((list, index) => {
                  return (
                    <div class="col-span-1 ">
                      <div class="bg-white shadow-lg rounded-lg p-4 px-5 max-w-[350px] md:w-auto">
                        <div class="flex ">
                          <span class="text-primary border-primary py-3 rounded-full">
                            <div className='rounded-full border-2 p-4 border-[#1f65a2]' dangerouslySetInnerHTML={{ __html: list.svg }} />
                          </span>
                          <div class="ml-[80px] md:ml-auto mt-4">
                            <h3 class="text-3xl font-semibold">{list.value}</h3>
                          </div>
                        </div>
                        <div class="mt-4">
                          <h6 class="text-sm text-muted">{list.name}</h6>


                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            {/* two graphs  */}
            <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-8 ">
              {/* Row 1, Column 1 */}
              <div className="col-span-1 md:w-auto bg-white rounded-lg h-[400px] shadow-lg">
                <div className="w-full border-b-[1px] border-b-zinc-300 font-medium px-7 py-4 text-3xl ">
                  <p>Revenue</p>
                </div>
                <ResponsiveContainer width="100%" height={300}>

                  <LineChart data={data} className="mt-2 py-4 ">
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="y" stroke="#8884d8" />
                    <Line type="bumpX" dataKey="y" stroke="#F8F9FA" />

                    <ReferenceDot x="Mar" y={160} r={5} fill="red" isFront />
                    <ReferenceDot x="Apr" y={150} r={5} fill="red" isFront />
                    <ReferenceDot x="Jan" y={130} r={5} fill="red" isFront />
                    <ReferenceDot x="Feb" y={140} r={5} fill="red" isFront />
                    <ReferenceDot x="Jun" y={210} r={5} fill="red" isFront />
                    <ReferenceDot x="May" y={150} r={5} fill="red" isFront />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Row 1, Column 2 */}
              <div className="col-span-1 md:w-auto md:h-auto rounded-lg bg-white shadow-lg  overflow-hidden ">
                <div className="w-full border-b-[1px] border-b-zinc-300 font-medium px-7 py-4 text-3xl ">
                  <p>Status</p>
                </div>
                <div className="p-4 h-[300px] md:h-auto ">
                  {/* <ResponsiveContainer width="100%" height="100%"> */}
                    <canvas ref={chartRef} />
                  {/* </ResponsiveContainer> */}
                </div>
              </div>
            </div>
            {/* Row 2, Column 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className="  bg-white md:w-auto rounded-lg shadow-lg mt-4 ">
                <div className="w-full border-b-[1px] border-b-zinc-300 font-medium px-7 py-4 text-3xl ">
                  <p>Doctors List</p>
                </div>
                <div className="">
                  <div className="flex py-4 text-zinc-800 border-b-[1px] border-b-zinc-300 bg-[#F8F9FA] px-5 text-[15px] font-medium  ">
                    <div className="w-[40%]   ">
                      Doctors Name
                    </div>
                    <div className="w-[20%] ">
                      Speciality
                    </div>
                    <div className="w-[20%] ">
                      Earned
                    </div>
                    <div className="">
                      Reviews
                    </div>
                  </div>
                  {
                    doctorsList.map((items, index) => {
                      return (
                        <div className="flex py-4 px-5 items-center border-b-[1px] hover:bg-[#F8F9FA] text-[15px] text-zinc-600">

                          <div className="w-[40%] flex items-center space-x-4">
                            <img className="rounded-full h-[50px] w-[50px] " src={items.img} alt="" />
                            <p>
                              {items.name}
                            </p>
                          </div>
                          <div className="w-[20%]">
                            {items.speciality}
                          </div>

                          <div className="w-[20%]">
                            ${items.earning}
                          </div>
                        </div>
                      )
                    })
                  }
                </div>

              </div>

              {/* Row 2, Column 2 */}
              <div className="col-span-1  bg-white md:w-[588px] rounded-lg shadow-lg mt-4">
                <div className="bg-white md:w-auto rounded-lg shadow-lg">
                  <div className="w-full border-b-[1px] border-b-zinc-300 font-medium px-7 py-4 text-3xl ">
                    <p>Patients List</p>
                  </div>
                  <div className="">
                    <div className="flex py-4 text-zinc-800 border-b-[1px] border-b-zinc-300 bg-[#F8F9FA] px-5 text-[15px] font-medium  ">
                      <div className="w-[40%]   ">
                        Patients Name
                      </div>
                      <div className="w-[20%] ">
                        Phone                    </div>
                      <div className="w-[20%] ">
                        Last Visited
                      </div>
                      <div className="">
                        Paid
                      </div>
                    </div>
                    {
                      patientsList.map((items, index) => {
                        return (
                          <div className="flex py-4 px-5 items-center border-b-[1px] hover:bg-[#F8F9FA] text-[15px] text-zinc-600">

                            <div className="w-[40%] flex items-center space-x-4">
                              <img className="rounded-full h-[50px] w-[50px] " src={items.img} alt="" />
                              <p>
                                {items.name}
                              </p>
                            </div>
                            <div className="w-[20%]">
                              {items.phone}
                            </div>

                            <div className="w-[20%]">
                              {items.visit}
                            </div>
                            <div className="w-[20%]">
                              ${items.paid}
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>

                </div>
              </div>
            </div>




          </div>

          {/* appoitnment list  */}
          <div className="bg-white w-[100%] rounded-lg shadow-lg mt-4">
            <div className="w-full border-b-[1px] border-b-zinc-300 font-medium px-7 py-4 text-3xl ">
              <p>Apponitment List</p>
            </div>
            <div className="">
              <div className="flex py-4 text-zinc-800 border-b-[1px] border-b-zinc-300 bg-[#F8F9FA] px-5 text-[15px] font-medium  ">
                <div className="w-[25%]   ">
                  Doctor Name
                </div>
                <div className="w-[15%] ">
                  Speciality
                </div>
                <div className="w-[25%] ">
                  Patient Name
                </div>
                <div className="w-[15%] mr-16">
                  Appointment Time
                </div>
                <div className="w-[10%]">
                  Status
                </div>
                <div className="w-[10%]">
                  Amount
                </div>
              </div>
              {
                appointmentList.map((items, index) => {
                  return (
                    <div className="flex py-4 px-5 items-center border-b-[1px] hover:bg-[#F8F9FA] text-[15px] text-zinc-600">

                      <div className="w-[40%] flex items-center space-x-4">
                        <img className="rounded-full h-[50px] w-[50px] " src={items.Docimg} alt="" />
                        <p>
                          {items.Docname}
                        </p>
                      </div>
                      <div className="w-[20%]">
                        {items.Docspeciality}
                      </div>

                      <div className="w-[40%] flex items-center space-x-4">
                        <img className="rounded-full h-[50px] w-[50px] " src={items.Pimg} alt="" />
                        <p>
                          {items.Patname}
                        </p>
                      </div>
                      <div className="w-[23%]">
                        {
                          items.appointmenttime.map((item) => {
                            return (
                              <>
                                <p>{item.date}</p>
                                <p>{item.time}</p>
                              </>
                            )
                          })
                        }
                      </div>
                      <div className="w-[10%] items-center flex bg-black">
                        on
                      </div>
                      <div className="w-[20%]">
                        ${items.amount}
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>

        </div>
      </div>



    </>
  )
}

export default AdminDashboard
