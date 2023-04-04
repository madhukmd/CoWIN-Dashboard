import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props
  return (
    <ResponsiveContainer width={1000} height={300}>
      <PieChart>
        <Pie
          cx="50%"
          cy="60%"
          data={data}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="center"
          wrapperStyle={{marginTop: 50, fontFamily: 'Roboto', letterSpacing: 1}}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByGender
