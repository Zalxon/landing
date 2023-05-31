import { Box, Image } from 'theme-ui'
import {
  Layout,
  Row,
  Column,
  Button,
  Link,
  formatDate,
} from '@zalxon/components'
import { RotatingArrow } from '@zalxon/icons'
import { keyframes } from '@emotion/react'
import Splash from '../components/splash'
import Highlight from '../components/highlight'

import { research1, research2, highlights, press } from '../data/recent'

const sx = {
  borderTop: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
  },
  highlight: {
    mb: [3],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    color: 'secondary',
  },
}

const Index = () => {
  return (
    <Layout
    links={'homepage'}
    title={'Zalxon'}
    description={
      'Improving the transparency and scientific integrity of healthcare solutions based-AI on open data and tools.'
    }
  >
  <Box
    sx={{
      mt: [-1, 0, 0, 0],
      mb: [-1, 6, 7, 8],
    }}
  >
    <Splash />
  </Box>
  <Row as='section' sx={{ position: 'relative', mt: [1] }}>
    <Column
      start={[2, 2, 3, 3]}
      width={[1]}
      sx={{
        height: '100%',
        display: ['none', 'initial', 'initial', 'initial'],
      }}
    >
      <VerticalArrow />
    </Column>
    <Column start={[1, 4, 6, 6]} width={[6, 5, 6, 6]}>
      <Box
        as='h1'
        sx={{
          fontFamily: 'heading',
          lineHeight: ['1.025', 'heading', 'heading', 'heading'],
          fontWeight: 'heading',
          fontSize: [6, 6, 7, 8],
        }}
      >
        Data and science for{' '}
        <Box
          as='span'
          sx={{ display: ['none', 'none', 'none', 'initial'] }}
        >
          <br />
        </Box>
        healthcare action
      </Box>
      <Row columns={[6, 5, 6, 6]}>
        <Column start={[1]} width={[5, 4, 4, 4]}>
          <Box
            as='p'
            sx={{
              fontSize: [3, 3, 3, 4],
              lineHeight: '1.25',
              pt: ['2px', 0, 0, 0],
              mb: [2, 3, 0, 0],
              mt: [3, 4, 4, 5],
            }}
          >
            Improving the transparency and scientific integrity of healthcare solutions based-AI on open data and tools
          </Box>
        </Column>
      </Row>
      <Box sx={{ mt: ['12px', 4, 4, 5] }}>
        <Row columns={[6, 5, 6, 6]}>
          <Column as='nav' start={[1]} width={[6, 6, 6, 6]}>
            <InternalNav href={'/about'}>About</InternalNav>
            <InternalNav href={'https://research.zalxon.com/research'}>Research</InternalNav>
            <InternalNav href={'/blog'}>Blog</InternalNav>
            <InternalNav href={'/press'}>Press</InternalNav>
            <InternalNav href={'/team'}>Team</InternalNav>
            <InternalNav href={'/donate'} final>
              Donate
            </InternalNav>
          </Column>
        </Row>
      </Box>
    </Column>
  </Row>
  <Row sx={{ mt: [5, 7, 8, 9] }}>
    <Column
      start={[1, 2]}
      width={[6, 8, 10, 10]}
      sx={{
        pt: [5, 6, 7, 8],
        ...sx.borderTop,
      }}
    />
  </Row>
  <Row sx={{}}>
    <Column
      start={[1, 2, 2, 3]}
      width={[6, 8, 10, 10]}
      sx={{
        ...sx.highlight,
      }}
    >
      Research highlights
    </Column>
  </Row>
  <Highlight research={research1} />
  {/* <Highlight research={research2} /> */}
  <Row as='section' sx={{ mt: [5, 6, 7, 8], pb: [1] }}>
    <Column
      start={[1, 1, 2, 2]}
      width={[6, 8, 10, 10]}
      sx={{ pt: [5, 6, 7, 8], ...sx.borderTop }}
    >
      <Row columns={[6, 8, 10, 10]}>
        <Column start={[2, 2, 1, 1]} width={[5, 4, 3, 3]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
            
            >
              Annual report
            </Box>
            {/* <Button
              href='https://files.zalxon.ai/Annual-Report-2021.pdf'
              size='md'
              sx={{ mb: [3] }}
              suffix={<RotatingArrow />}
            >
              Our 2021 in review
            </Button> */}
            <Box
              sx={{
                fontSize: [3, 3, 3, 4],
                fontFamily: 'body',
                letterSpacing: 'body',
                lineHeight: '1.25',
              }}
            >
              Read all about the work we did last year, and some of what
              we're planning to do next.
            </Box>
          </Box>
        </Column>
        <Column start={[2, 2, 5, 5]} width={[5, 3, 3, 3]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
            
            >
              Research highlights
            </Box>
            {highlights.map((d, i) => (
              <Button
                key={i}
                href={d.href}
                size='md'
                sx={{ mb: [1] }}
                suffix={<RotatingArrow />}
              >
                {d.label}
              </Button>
            ))}
          </Box>
        </Column>
        <Column start={[2, 5, 8, 8]} width={[5, 3, 3, 3]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
            
            >
              Press highlights
            </Box>
            {press.map((d, i) => (
              <Button
                key={i}
                href={d.href}
                size='md'
                sx={{ mb: [1] }}
                suffix={<RotatingArrow />}
              >
                {d.label}
              </Button>
            ))}
          </Box>
        </Column>
      </Row>
    </Column>
  </Row>

{/* <Conversations /> */}
    </Layout>
  )
}

function InternalNav({ children, href, final = false }) {
  return (
    <Link
      href={href}
      sx={{
        fontSize: [2, 3, 3, 4],
        textTransform: 'uppercase',
        fontFamily: 'heading',
        display: 'inline-block',
        letterSpacing: 'smallcaps',
        borderStyle: 'solid',
        borderColor: 'primary',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        pb: [1],
        mr: [final ? 0 : 4],
        mb: [3, 2, 2, 2],
        color: 'primary',
        textDecoration: 'none',
        transition: 'border-color 0.15s, color 0.15s',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            borderColor: 'secondary',
            color: 'secondary',
          },
        },
        '@media (hover: none) and (pointer: coarse)': {
          '&:hover': {
            color: 'primary',
          },
        },
      }}
    >
      {children}
    </Link>
  )
}

const animate = keyframes({
  '0%': {
    transform: 'translateY(0px)',
  },
  '10%': {
    transform: 'translateY(10px)',
  },
  '20%': {
    transform: 'translateY(0px)',
  },
  '100%': {
    transform: 'translateY(0px)',
  },
})

function VerticalArrow() {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignContent: 'flex-end',
        display: 'flex',
        height: '100%',
        mt: ['-7px', '-7px', '-7px', '-78px'],
        transform: ['none', 'none', 'none', 'scale(1.4)'],
      }}
    >
      <Box
        sx={{
          display: 'block',
          alignSelf: 'flex-end',
          transform: 'translateY(0px)',
          animationDuration: '4000ms',
          animationPlayState: 'running',
          animationDelay: '1000ms',
          animationName: animate.toString(),
          animationIterationCount: 'infinite',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '112px',
            fill: 'none',
            stroke: 'primary',
          }}
        >
          <svg x='0px' y='0px' width='27px' height='100%'>
            <circle vectorEffect='non-scaling-stroke' cx='13' cy='11' r='9' />
            <line
              vectorEffect='non-scaling-stroke'
              x1='13'
              x2='13'
              y1='20'
              y2='111'
            />
            <line
              vectorEffect='non-scaling-stroke'
              x1='2'
              x2='13'
              y1='100'
              y2='111'
            />
            <line
              vectorEffect='non-scaling-stroke'
              x1='24'
              x2='13'
              y1='100'
              y2='111'
            />
          </svg>
        </Box>
      </Box>
    </Box>
  )
}

function Genome(){

  return (
    <Box
    sx={{
      justifyContent: 'center',
      alignContent: 'flex-end',
      display: 'flex',
      height: '100%',
      mt: ['-7px', '-7px', '-7px', '-78px'],
      transform: ['none', 'none', 'none', 'scale(1.4)'],
    }}
  >
    <Box
      sx={{
        display: 'block',
        alignSelf: 'flex-end',
        transform: 'translateY(0px)',
        animationDuration: '4000ms',
        animationPlayState: 'running',
        animationDelay: '1000ms',
        animationName: animate.toString(),
        animationIterationCount: 'infinite',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '200px',
          fill: 'none',
          stroke: 'primary',
        }}
      >
        <svg x='0px' y='0px' width='100%' height='100%'>
          <g id="SvgjsG1205" featurekey="UFHKJ9-0" transform="matrix(1.9791580786680305,0,0,1.9791580786680305,-57.270584545618995,-7.916632314672122)" fill="#ffffff">
            <path 
              xmlns="http://www.w3.org/2000/svg" 
              d="M71.05444,49.52917l-1.18725,3.81489.79425.86029-3.541,3.2691a19.89336,19.89336,0,0,0-7.17279-6.97516,19.35768,19.35768,0,0,0,9.90766-16.6936,18.642,18.642,0,0,0-1.77558-7.90424l4.57312-1.99658.46845,1.073,3.97033.44635L79.46338,22.208l-1.59857-3.66162L73.89441,18.1l-2.3717,3.21527.46838,1.07281-4.6756,2.04132A19.868,19.868,0,0,0,59.98358,17.129,19.56274,19.56274,0,0,0,69.48792,4h-4.593a14.82229,14.82229,0,0,1-1.00275,2.71735H56.21069a1.09124,1.09124,0,0,0-1.088,1.08807v.75305a1.09123,1.09123,0,0,0,1.088,1.088h5.81769A15.1378,15.1378,0,0,1,53.90613,14.833a15.13807,15.13807,0,0,1-8.1225-5.18653h5.97473c.16547,0,.27625-.12524.42511-.17633A1.3952,1.3952,0,0,1,51.14166,8.182a1.39527,1.39527,0,0,1,1.04181-1.28821c-.14886-.051-.25964-.17633-.42511-.17633H43.91992A14.81706,14.81706,0,0,1,42.91711,4h-4.593a19.5642,19.5642,0,0,0,9.50433,13.12964,19.35738,19.35738,0,0,0-9.8717,16.67505,18.69656,18.69656,0,0,0,2.27673,8.9024l-4.4931,1.98413-.47309-1.07129-3.97223-.42968-2.35821,3.22516,1.614,3.65484L34.523,50.5l2.35828-3.22516-.4729-1.07092,4.68078-2.067a19.90626,19.90626,0,0,0,6.77625,6.36139,19.01785,19.01785,0,0,0-.03412,33.37,19.82109,19.82109,0,0,0-6.18042,5.53894l-5.12482-.8133.18353-1.15643-3.10424-2.51526L29.87494,86.353l-.62616,3.946,3.10431,2.51526,3.73035-1.43079.18359-1.1568,4.39105.69684A19.07663,19.07663,0,0,0,38.32416,97h4.593a14.824,14.824,0,0,1,1.00452-2.72125h5.12482l3.13635-1.46454-3.13635-1.46448H45.78668a15.13789,15.13789,0,0,1,8.11926-5.18292,15.138,15.138,0,0,1,8.11945,5.18292H55.12177l3.13653,1.46448-3.13653,1.46454H63.8905a14.81982,14.81982,0,0,1,1.0044,2.721h4.593A19.56376,19.56376,0,0,0,59.98077,83.8689a19.35823,19.35823,0,0,0,9.87452-16.677,18.65387,18.65387,0,0,0-1.92456-8.21575l3.85247-3.55665.79413.86017,3.8974-.87921L77.662,51.58557,74.95184,48.6499Zm-24.2738-5.357h2.26593l3.13635-1.46448-3.13635-1.46447H44.49493a14.54454,14.54454,0,0,1-2.00354-5.97431h9.19483c.19324,0,.32257-.12524.49646-.17633a1.29028,1.29028,0,0,1,0-2.57635c-.17389-.05109-.30322-.17634-.49646-.17634H42.49146a14.54392,14.54392,0,0,1,2.00366-5.9743h7.26245c.16546,0,.27624-.12524.42511-.17633a1.31727,1.31727,0,0,1,0-2.57629c-.14887-.05109-.25965-.17633-.42511-.17633H46.78094a15.277,15.277,0,0,1,7.12616-4.0434,15.27447,15.27447,0,0,1,7.12427,4.04327H56.2099a1.09126,1.09126,0,0,0-1.08807,1.08808v.75305a1.09125,1.09125,0,0,0,1.08807,1.08807l7.10718-.00006a14.54535,14.54535,0,0,1,2.00348,5.97418H56.2099a1.09126,1.09126,0,0,0-1.08807,1.08808v.753A1.09125,1.09125,0,0,0,56.2099,35.269h9.11072a14.54549,14.54549,0,0,1-2.00336,5.97425H55.122l3.13659,1.46447L55.122,44.17218h5.90991a15.27428,15.27428,0,0,1-7.12476,4.0437A15.27735,15.27735,0,0,1,46.78064,44.17218ZM53.9071,81.60327a15.27765,15.27765,0,0,1-7.12646-4.0437h4.97693c.16546,0,.27624-.1253.42511-.17639a1.31727,1.31727,0,0,1,0-2.5763c-.14887-.05108-.25965-.17633-.42511-.17633H44.49493a14.54378,14.54378,0,0,1-2.00341-5.97375h6.55505L52.18292,67.192l-3.13635-1.46448H42.49139A14.54447,14.54447,0,0,1,44.49512,59.753h7.26245c.16546,0,.27624-.1253.42511-.17639a1.31727,1.31727,0,0,1,0-2.57629c-.14887-.05109-.25965-.17634-.42511-.17634H46.78094a15.277,15.277,0,0,1,7.12616-4.04333,15.27423,15.27423,0,0,1,7.12433,4.04321l-4.82153.00006a1.09116,1.09116,0,0,0-1.088,1.088V58.665a1.09124,1.09124,0,0,0,1.088,1.08807h7.10718a14.5449,14.5449,0,0,1,2.00354,5.97473h-.26233v-.00024H55.122L58.25854,67.192,55.122,68.65656h7.08447l1.40717-.00007v.00031H65.3205a14.54577,14.54577,0,0,1-2.00324,5.97369H56.2099a1.09124,1.09124,0,0,0-1.088,1.088v.75305a1.09124,1.09124,0,0,0,1.088,1.08807h4.8219A15.2745,15.2745,0,0,1,53.9071,81.60327Z" />
          </g>

          </svg>
        </Box>
      </Box>
    </Box>
  )
}

export default Index
