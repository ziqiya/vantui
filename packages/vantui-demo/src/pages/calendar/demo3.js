/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, Calendar } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  const [date, setDate] = react.useState()

  const formatDates = react.useCallback((d) => {
    if (d && d.length) {
      let text = []
      d.forEach((item) => {
        const res = new Date(item)
        text.push(`${res.getMonth()}-${res.getDate()}`)
      })

      return text.join(` 至 `)
    }
  }, [])

  return (
    <View>
      <Cell
        title="选择多个日期"
        value={formatDates(date)}
        onClick={() => setShow(true)}
      />
      <Calendar
        show={show}
        type="range"
        onClose={() => setShow(false)}
        onConfirm={(e) => {
          setDate(e.detail.value.map((date) => date?.valueOf()))
          setShow(false)
        }}
      />
    </View>
  )
}
