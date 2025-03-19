import React from "react";
import Layout from "../Layout /Layout";
import Heading from "./Heading";
import { LuWalletCards } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { orderData } from "./orderData";
import { orderData2 } from "./orderData";
import { order3 } from "./orderData";
import { order4 } from "./orderData";
// import { orderData } from "./orderData";
const Dashboard = () =>{
    const orderInfo = orderData.map((item,i) => {
        return(
            <div key={i}>
                <div>
                    <div className="flex items-center justify-between w-full">
                        <h3>{item.heading}</h3>
                        <a href="#">{item.button}</a>
                    </div>
                    <li className="list-none">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start">
                                <img src={item.icon} />
                                <div className="px-3">
                                    <h4>{item.name}</h4>
                                    <p>OrderId:{item.orderId}</p>    
                                </div>
                            </div>

                            <div>
                                <h4>NGN {item.amount}</h4>
                            </div>

                        </div>
                    </li>
                    <li className="list-none">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start">
                                <img src={item.icon} />
                                <div className="px-3">
                                    <h4>{item.name}</h4>
                                    <p>OrderId:{item.orderId}</p>
                                </div>
                            </div>

                            <div>
                                <h4>NGN {item.amount}</h4>
                            </div>

                        </div>
                    </li>
                    <li className="list-none">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start">
                                <img src={item.icon} />
                                <div className="px-3">
                                    <h4>{item.name}</h4>
                                    <p>OrderId:{item.orderId}</p>
                                </div>
                            </div>

                            <div>
                                <h4>NGN {item.amount}</h4>
                            </div>

                        </div>
                    </li>
                </div>
            </div>
        )
    })


    const orderInfo2 = orderData2.map((item,i) => {
        return(
            <div key={i}>
                <div>
                    <div className="flex items-center justify-between w-full">
                        <h3>{item.heading}</h3>
                        <a href="#">{item.button}</a>
                    </div>
                    <li className="list-none">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start">
                                <img src={item.icon} />
                                <div className="px-3">
                                    <h4>{item.name}</h4>
                                    <p>OrderId:{item.orderId}</p>
                                </div>
                            </div>

                            <div>
                                <h4>NGN {item.amount}</h4>
                            </div>

                        </div>
                    </li>
                    <li className="list-none">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start">
                                <img src={item.icon} />
                                <div className="px-3">
                                    <h4>{item.name}</h4>
                                    <p>OrderId:{item.orderId}</p>
                                </div>
                            </div>

                            <div>
                                <h4>NGN {item.amount}</h4>
                            </div>

                        </div>
                    </li>
                    <li className="list-none">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start">
                                <img src={item.icon} />
                                <div className="px-3">
                                    <h4>{item.name}</h4>
                                    <p>OrderId:{item.orderId}</p>
                                </div>
                            </div>

                            <div>
                                <h4>NGN {item.amount}</h4>
                            </div>

                        </div>
                    </li>
                </div>
            </div>
        )
    })


    const orderInfo3 = order3.map((item,i) => {
        return(
            <div key={i}>
                <div>
                    <div className="flex items-center justify-between w-full">
                        <h3>{item.heading}</h3>
                        <a href="#">{item.button}</a>
                    </div>
                    <li className="list-none">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start">
                                <img src={item.icon} />
                                <div className="px-3">
                                    <h4>{item.name}</h4>
                                    <p>OrderId:{item.orderId}</p>
                                </div>
                            </div>

                            <div>
                                <h4>NGN {item.amount}</h4>
                            </div>

                        </div>
                    </li>
                    <li className="list-none">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start">
                                <img src={item.icon} />
                                <div className="px-3">
                                    <h4>{item.name}</h4>
                                    <p>OrderId:{item.orderId}</p>
                                </div>
                            </div>

                            <div>
                                <h4>NGN {item.amount}</h4>
                            </div>

                        </div>
                    </li>
                    <li className="list-none">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start">
                                <img src={item.icon} />
                                <div className="px-3">
                                    <h4>{item.name}</h4>
                                    <p>OrderId:{item.orderId}</p>
                                </div>
                            </div>

                            <div>
                                <h4>NGN {item.amount}</h4>
                            </div>

                        </div>
                    </li>
                </div>
            </div>
        )
    })

    const orderInfo4 = order4.map((item,i) => {
        return(
            <div key={i}>
                <div>
                    <div className="flex items-center justify-between w-full">
                        <h3>{item.heading}</h3>
                        <a href="#">{item.button}</a>
                    </div>
                    <li className="list-none">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start">
                                <img src={item.icon} />
                                <div className="px-3">
                                    <h4>{item.name}</h4>
                                    <p>OrderId:{item.orderId}</p>
                                </div>
                            </div>

                            <div>
                                <h4>NGN {item.amount}</h4>
                            </div>

                        </div>
                    </li>
                    <li className="list-none">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start">
                                <img src={item.icon} />
                                <div className="px-3">
                                    <h4>{item.name}</h4>
                                    <p>OrderId:{item.orderId}</p>
                                </div>
                            </div>

                            <div>
                                <h4>NGN {item.amount}</h4>
                            </div>

                        </div>
                    </li>
                    <li className="list-none">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start">
                                <img src={item.icon} />
                                <div className="px-3">
                                    <h4>{item.name}</h4>
                                    <p>OrderId:{item.orderId}</p>
                                </div>
                            </div>

                            <div>
                                <h4>NGN {item.amount}</h4>
                            </div>

                        </div>
                    </li>
                </div>
            </div>
        )
    })
    return(
        <Layout>
            <Heading
                header="Welcome Ade"
                text="Look at what is happening with your business"
             />
             {/* Main Container Section */}
             <div className="flex items-start justify-between w-full px-5 mt-5">



                {/* Statistics Container */}
                <div className="flex items-center justify-between w-[49%]  flex-wrap">
                    <div className="bg-white w-[49%] mt-10 flex items-start px-5 py-5 justify-between flex-col rounded-xl shadow-xl">
                        <div className="flex items-center justify-start w-full">
                            <div className="p-3 bg-iconcolor rounded-full text-textcolor"><LuWalletCards className="text-2xl roundeed-xl" /></div>
                            <div className="px-8">
                                <p className="text-lg font-bold">Total Balance</p>
                                <h3 className="text-2xl font-bold">NGN 540,000</h3>
                            </div>
                        </div>
                        <div className="flex items-center justify-start w-full mt-4">
                            <p className="font-bold">20.02%</p>
                            <p className="px-8 font-bold text-base">+5K this month</p>
                        </div>
                    </div>
                    <div className="bg-white w-[49%] mt-10 flex items-start px-5 py-5 justify-between flex-col rounded-xl shadow-xl">
                        <div className="flex items-center justify-start w-full">
                            <div className="p-3 bg-iconcolor rounded-full text-textcolor"><LuUsers className="text-2xl roundeed-xl"/></div>
                            <div className="px-8">
                                <p className="text-lg font-bold">Total Visitors</p>
                                <h3 className="text-2xl font-bold">NGN 540,000</h3>
                            </div>
                        </div>
                        <div className="flex items-center justify-start w-full mt-4">
                            <p className="font-bold">20.02%</p>
                            <p className="px-8 font-bold text-base">+5K this month</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-xl w-[49%] py-5 px-5 mt-10">{orderInfo}</div>
                    <div className="bg-white rounded-xl shadow-xl px-5 py-5 w-[49%] mt-10">{orderInfo3}</div>
                    <div className="bg-white rounded-xl shadow-xl py-5 px-5 w-[49%] mt-10">{orderInfo2}</div>
                    <div className="bg-white rounded-xl shadow-xl py-5 px-5 w-[49%] mt-10">{orderInfo4}</div>
                    <div className="bg-red-400 p-20 h-52 w-full mt-10"></div>
                </div>










                {/* Graphical Container */}
                <div className="flex items-center justify-between bg-blue-500  flex-col w-[49%]">
                    <div className="bg-yellow-400 p-56 h-52 w-full mt-10"></div>
                    <div className="bg-yellow-400 p-20 h-52 w-full mt-10"></div>
                    <div className="bg-yellow-400 p-20 h-52 w-full mt-10"></div>
                </div>
             </div>
        </Layout>
    )
}
export default Dashboard;