const barData = [
  { timeline: 2010, content: 10 },
  { timeline: 2011, content: 20 },
  { timeline: 2012, content: 15 },
  { timeline: 2013, content: 25 },
  { timeline: 2014, content: 22 },
  { timeline: 2015, content: 30 },
  { timeline: 2016, content: 28 },
  { timeline: 2018, content: 42 },
  { timeline: 2019, content: 30 },
  { timeline: 2020, content: 10 },
]

const radarData = [
  {
    junior: [
      {
        tier: 'junior',
        level: [
          { label: 'HTML', content: 40 },
          { label: 'CSS', content: 35 },
          { label: 'JS', content: 30 },
          { label: 'React', content: 40 },
          { label: 'Vue', content: 10 },
          { label: 'DevOps', content: 5 },
        ],
      },
    ],
    middle: [
      {
        tier: 'middle',
        level: [
          { label: 'HTML', content: 70 },
          { label: 'CSS', content: 60 },
          { label: 'JS', content: 86 },
          { label: 'React', content: 49 },
          { label: 'Vue', content: 22 },
          { label: 'DevOps', content: 30 },
        ],
      },
    ],
    senior: [
      {
        tier: 'senior',
        level: [
          { label: 'HTML', content: 70 },
          { label: 'CSS', content: 80 },
          { label: 'JS', content: 86 },
          { label: 'React', content: 49 },
          { label: 'Vue', content: 70 },
          { label: 'DevOps', content: 90 },
        ],
      },
    ],
  },
]
export { barData, radarData }
