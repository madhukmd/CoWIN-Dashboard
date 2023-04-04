// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {data} = props
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <ResponsiveContainer width={1000} height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#cbd5e1',
            strokeWidth: 1,
            fontFamily: 'Roboto',
            fontSize: 15,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#cbd5e1',
            strokeWidth: 0.5,
            fontFamily: 'Roboto',
            fontSize: 15,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
