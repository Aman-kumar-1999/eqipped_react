import React from 'react'
import '../css/DashboardGraph.css'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts'
import { PieChart, Pie, Sector, Cell} from 'recharts';
const Array = [
    {
        name: 'Jan',
        price: '20',
    },
    {
        name: 'Feb',
        price: '50',
    },
    {
        name: 'Mar',
        price: '75',
    },
    {
        name: 'Apr',
        price: '88',
    },
    {
        name: 'May',
        price: '40',
    },
    {
        name: 'Jun',
        price: '34',
    },
    {
        name: 'Jul',
        price: '67',
    },
    {
        name: 'Aug',
        price: '55',
    },
    {
        name: 'Sep',
        price: '98',
    }, {
        name: 'Oct',
        price: '',
    },
    {
        name: 'Nov',
        price: '',
    }
];

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];
function DashboardGraph() {
    return (
        <div className='container '>
            <div className='graphborder'>

                <div className='row'>
                    <div className='adiv col-2'>
                        <h5>Total Orders</h5>
                        <p>+3.34%</p>
                        <h4>108</h4>
                    </div>
                    <div className=' adiv2 col-2'>
                        <h5>Earnings</h5>
                        <p>+12.34%</p>
                        <h4>Rs.75000</h4>
                    </div>
                    <div className='adiv3 col-2'>
                        <h5>Revenue</h5>
                        <p>+12.34%</p>
                        <h4>Rs.43000</h4>
                    </div>
                    <div className=' holder col-2'>
                        <li>
                            <a>All</a>
                            <a>1D</a>
                            <a>1M</a>
                            <a>6M</a>
                            <a>1Y</a>
                        </li>
                    </div>
                </div>
                <ResponsiveContainer width="85%" aspect={2.5} className='graph'>
                    <BarChart data={Array} width={400} height={400}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="price" fill='rgb(40,108,153)' />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className='longdiv'>
                <h5>Recent Orders</h5>
                <nav>
                    <li>Today</li>
                    <li className='a1'>Weekly</li>
                    <li>Monthly</li>
                </nav>
            </div>

            <div className='largediv'>
                <nav>
                    <li>No.</li>
                    <li>Product ID</li>
                    <li>Date</li>
                    <li>Customer Name</li>
                    <li>Place</li>
                    <li>Product</li>
                    <li>Quantity</li>
                    <li>Price</li>
                    <li>Status</li>
                    <li>Action</li>
                </nav>
            </div>
            <div className='longdiv'>
                <h5 className='newh5'>Recent Product Listed</h5>
                <nav>
                    <li>Today</li>
                    <li className='a1'>Weekly</li>
                    <li>Monthly</li>
                </nav>
            </div>

            <div className='largediv'>
                <nav className='newspace'>
                    <li>No.</li>
                    <li>Product ID</li>
                    <li>Date</li>
                    <li>Vendor Name</li>
                    <li>Product Type</li>
                    <li>Quantity</li>
                    <li>Price(each)</li>
                    <li>Total Price</li>
                    <li>Status</li>
                    <li>Action</li>
                </nav>
            </div>

            <div className='row' >
                <div className='bigcard col-7'>
                    <h5>Recent Reviews:</h5>
                </div>
                <div className='longcard col-4'>
                    <h5>Sales By Traffic Source</h5>
                    <ResponsiveContainer width="100%" height="70%">
                        <PieChart width={400} height={400}>
                            <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#fff" />
                            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="orange" label />
                        </PieChart>
                    </ResponsiveContainer>
                    <nav>
                        <li>Source</li>
                        <li>Orders</li>
                        <li>Amount</li>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default DashboardGraph