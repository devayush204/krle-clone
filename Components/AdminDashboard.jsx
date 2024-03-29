"use client"
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
         console.log(res.data);
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
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');


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
          //not working properly
          // maintainAspectRatio: false,
          // responsive: true,
        },
      })
    };
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
            <div class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-8 mt-4 ">
              {
                chartList.map((list, index) => {
                  return (
                    <div key={list.id} class="col-span-1 ">
                      <div class="bg-white shadow-lg rounded-lg p-4 px-5  md:w-auto">
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
              <div className="col-span-1 md:w-auto bg-white rounded-lg md:h-auto shadow-lg">
                <div className="w-full border-b-[1px] border-b-zinc-300 font-medium px-7 py-4 text-3xl ">
                  <p>Revenue</p>
                </div>
                <ResponsiveContainer width="95%" height={350}>

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
                <div className="p-4 h-[400px] md:h-auto ">
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
                  <div className="flex py-4 justify-start text-zinc-800 border-b-[1px] border-b-zinc-300 bg-[#F8F9FA] px-5 md:text-[12px] lg:text-[15px] sm:text-[10px] font-medium  ">
                    <div className="w-[40%]   ">
                      Doctors Name
                    </div>
                    <div className="lg:w-[20%] md:w-[30%] sm:w-[30%] ">
                      Speciality
                    </div>
                    <div className="lg:w-[20%] md:w-[30%] sm:w-[30%]">
                      Earned
                    </div>
                    <div className="lg:block md:hidden sm:hidden w-[20%]">
                      Reviews
                    </div>
                  </div>
                  {
                    doctorsList.map((items, index) => {
                      return (
                        <div key={items.id} className="flex py-4 px-5 items-center border-b-[1px] hover:bg-[#F8F9FA] md:text-[12px] lg:text-[15px] sm:text-[10px]  text-zinc-600">
                          <div className="w-[40%] flex items-center justify-start lg:space-x-4">
                            <img className="rounded-full lg:h-[50px] lg:w-[50px] lg:block md:hidden sm:hidden " src={items.img} alt="" />
                            <p className="">
                              {items.name}
                            </p>
                          </div>
                          <div className="lg:w-[20%] md:w-[30%] sm:w-[30%]">
                            {items.speciality}
                          </div>
                          <div className="lg:w-[20%] md:w-[30%] sm:w-[30%]">
                            ${items.earning}
                          </div>
                          <div className="lg:block md:hidden sm:hidden  w-[20%]">

                          </div>
                        </div>
                      )
                    })
                  }
                </div>

              </div>

              {/* Row 2, Column 2 */}
              <div className="col-span-1  bg-white md:col-span-1 rounded-lg shadow-lg mt-4">
                <div className="bg-white md:w-auto rounded-lg shadow-lg">
                  <div className="w-full border-b-[1px] border-b-zinc-300 font-medium px-7 py-4 text-3xl ">
                    <p>Patients List</p>
                  </div>
                  <div className="">
                    <div className="flex py-4 text-zinc-800 border-b-[1px] border-b-zinc-300 bg-[#F8F9FA] px-5 md:text-[12px] lg:text-[15px] sm:text-[10px] font-medium  ">
                      <div className="w-[40%]   ">
                        Patients Name
                      </div>
                      <div className="lg:w-[20%] md:w-[30%] sm:w-[30%] ">
                        Phone
                      </div>
                      <div className="lg:w-[20%] md:w-[30%] sm:w-[30%] ">
                        Last Visited
                      </div>
                      <div className="lg:block md:hidden w-[20%] sm:hidden">
                        Paid
                      </div>
                    </div>
                    {
                      patientsList.map((items, index) => {
                        return (
                          <div key={items.id} className="flex py-4 px-5 items-center border-b-[1px] hover:bg-[#F8F9FA] md:text-[12px] lg:text-[15px] sm:text-[10px] text-zinc-600">
                            <div className="w-[40%] flex items-center lg:space-x-4">
                              <img className="rounded-full lg:h-[50px] lg:w-[50px] md:hidden lg:block sm:hidden " src={items.img} alt="" />
                              <p>
                                {items.name}
                              </p>
                            </div>
                            <div className="lg:w-[20%] md:w-[30%] sm:w-[30%]">
                              {items.phone}
                            </div>

                            <div className="lg:w-[20%] md:w-[30%] sm:w-[30%]">
                              {items.visit}
                            </div>
                            <div className="lg:block md:hidden sm:hidden w-[20%]">
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
              <div className="flex py-4 justify-start text-zinc-800 border-b-[1px] border-b-zinc-300 bg-[#F8F9FA] px-5 md:text-[12px] sm:text-[10px] lg:text-[15px] font-medium  ">
                <div className="w-[25%]    ">
                  Doctor Name
                </div>
                <div className="md:w-[15%] w-[20%] ">
                  Speciality
                </div>
                <div className="w-[25%] ">
                  Patient Name
                </div>
                <div className="md:w-[15%] w-[30%]">
                  Appointment Time
                </div>
                <div className="w-[10%] md:block hidden">
                  Status
                </div>
                <div className="w-[10%] md:block hidden">
                  Amount
                </div>
              </div>
              {
                appointmentList.map((items, index) => {
                  return (
                    <div key={items.id} className="flex py-4 px-5 items-center border-b-[1px] hover:bg-[#F8F9FA] md:text-[12px] lg:text-[15px] sm:text-[10px] text-zinc-600">

                      <div className="w-[25%] flex items-center md:space-x-4">
                        <img className="rounded-full lg:h-[50px] lg:w-[50px] md:h-[35px] md:w-[35px] sm:hidden lg:block md:block" src={items.Docimg} alt="" />
                        <p>
                          {items.Docname}
                        </p>
                      </div>
                      <div className="md:w-[15%] w-[20%]">
                        {items.Docspeciality}
                      </div>

                      <div className="w-[25%] flex items-center md:space-x-4">
                        <img className="rounded-full lg:h-[50px] lg:w-[50px] md:h-[35px] md:w-[35px] sm:hidden lg:block md:block " src={items.Pimg} alt="" />
                        <p>
                          {items.Patname}
                        </p>
                      </div>
                      <div className="md:w-[15%] w-[30%]">
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
                      <div className="w-[10%] items-center   text-white md:flex hidden">
                        <div className="bg-black px-4 py-2 rounded-2xl">
                          on
                        </div>
                      </div>
                      <div className="w-[10%] md:block hidden">
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
