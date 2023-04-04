// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {data} = props
  console.log(data)

  return (
    <ResponsiveContainer width={1000} height={300}>
      <PieChart>
        <Pie data={data} cx="50%" cy="30%" outerRadius="60%" dataKey="count">
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>

        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="center"
          wrapperStyle={{marginTop: 60, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByAge
