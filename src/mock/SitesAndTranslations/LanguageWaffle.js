import { ResponsiveWaffle } from '@nivo/waffle'

const LanguageWaffle = ({ upToDate, inTranslation, notTranslatedYet, newInMaster, masterUpdated }) => {

  const data = [
    {
      "id": "In Translation",
      "label": "In Translation",
      "value": inTranslation,
      "color": "#ba72ff"
    },
    {
      "id": "Not Translated Yet",
      "label": "Not Translated Yet",
      "value": notTranslatedYet,
      "color": "#a1cfff"
    },
    {
      "id": "New in Master",
      "label": "New in master",
      "value": newInMaster,
      "color": "#49c27d"
    },
    {
      "id": "Master Updated",
      "label": "Master updated",
      "value": masterUpdated,
      "color": "#c0d561"
    }
  ]

  const total = inTranslation + notTranslatedYet + newInMaster + masterUpdated
  const rows = Math.sqrt(total * 9 / 16)
  const columns = total / rows

  return (
    <ResponsiveWaffle
      data={data}
      total={total}
      rows={Math.floor(rows)}
      columns={Math.ceil(columns)}
      margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
      colors={{ scheme: 'set2' }}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            0.3
          ]
        ]
      }}
      animate={true}
      motionStiffness={90}
      motionDamping={11}
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          justify: false,
          translateX: -120,
          translateY: 0,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          itemTextColor: '#3f3f3f',
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
                itemBackground: '#f7fafb'
              }
            }
          ]
        }
      ]}
    />
  )
}

export default LanguageWaffle