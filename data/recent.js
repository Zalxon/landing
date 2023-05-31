const research1 = {
  id: 'anatomy',
  date: '01-19-2023',
  href: 'https://research.zalxon.com/research/anatomy',
  title: 'Anatomy',
  summary:
    'The Zalxon Anatomy is an interactive 3D tool platform for visualizing anatomy, disease, and treatment.',
  source: (() => {
    return (
      <iframe 
        id="home-widget" 
        allowtransparency="true" 
        widget-src="?m=developer_web/coronary_vessels.json&bgstd=transparent&ui-annotations=true&ui-panel=false&imageDisplay=fallback&ui-all=false&ui-info=false" 
        ng-class="{disabled: widgetDisabled}"
        width="100%" height="250" 
        frameborder="0" 
        src="https://human.biodigital.com/viewer?m=developer_web/coronary_vessels.json&bgstd=transparent&ui-annotations=true&ui-panel=false&imageDisplay=fallback&ui-all=false&ui-info=false&dk=e6d92924b104d99964ff488a3218136c73234d9e" 
        class="disabled">
      </iframe>
    )
  })(),
}
const research3 = {
  id: 'genome-to-object',
  date: '01-19-2023',
  href: '/research/genome-to-object',
  title: 'Genome to Object',
  summary:
    'In order to be able to list it better by extracting the genetic code to the object output.',
}

const research2 = {
  id: 'genome-visualization',
  date: '06-30-2022',
  title: 'Genome visualization',
  summary:
  'Genome visualization, 3d visualization tool of converted genome to object.',
  href: '/research/genome-visualization',
}

const highlights = [
  {
    label: 'Anatomy',
    href: '/research/anatomy',
  },
  // {
  //   label: 'Genome to Object',
  //   href: '/research/genome-to-object',
  // },
  // {
  //   label: 'Genome visualization',
  //   href: '/research/genome-visualization',
  // },
  // {
  //   label: 'Human anatomy diagram',
  //   href: '/research/human-anatomy-diagram',
  // },
]

const press = [
  // {
  //   label: 'CBS News',
  //   href: 'https://www.cbs.com/shows/video/M7H_yUdOiUw_E0fW5l_SP_V786PBhjI0/',
  // },
  // {
  //   label: 'National Geographic',
  //   href: 'https://www.nationalgeographic.com/environment/article/forests-as-carbon-offsets-climate-change-has-other-plans',
  // },
  // {
  //   label: 'Bloomberg',
  //   href: 'https://www.bloomberg.com/news/articles/2022-04-07/the-biggest-crypto-effort-to-end-useless-carbon-offsets-is-backfiring?srnd=premium',
  // },
  // {
  //   label: 'Planet Money',
  //   href: 'https://www.npr.org/2021/05/07/994774148/emission-impossible',
  // },
]

export { research1, research2, research3, highlights, press }
