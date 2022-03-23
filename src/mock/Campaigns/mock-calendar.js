import React, { useMemo } from 'react'
import moment from 'moment'
import {
  Calendar,
  Views,
  momentLocalizer,
} from 'react-big-calendar'
import events from './events'
import * as dates from './dates'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const mLocalizer = momentLocalizer(moment)

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

/**
 * We are defaulting the localizer here because we are using this same
 * example on the main 'About' page in Storybook
 */
const MockCalendar = ({ localizer = mLocalizer,
                    ...props
                  }) => {
  const { components, defaultDate, max, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(2015, 3, 1),
      max: dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours'),
      views: Object.keys(Views).map((k) => Views[ k ]),
    }),
    []
  )

  return (
    <>
      <div className="height600" {...props}>
        <Calendar
          components={components}
          defaultDate={defaultDate}
          events={events}
          localizer={localizer}
          max={max}
          showMultiDayTimes
          step={60}
          views={views}
        />
      </div>
    </>
  )
}

export default MockCalendar