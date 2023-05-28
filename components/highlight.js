import { Box, Image, useColorMode } from 'theme-ui'
import { Row, Column, Link, Button, formatDate } from '@zalxon/components'
import { RotatingArrow } from '@zalxon/icons'
import { useThemeUI } from 'theme-ui';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import $ from 'jquery';

import { fetchFrame } from "node-iframe";

const highlightImageUrl = (id, mode) => {
  return `https://images.zalxon.com/highlights/${id}-${mode}.png`
}

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  iframe: {
    borderColor: "#000",
    borderWidth: 0,
    "& body": {
      background: "#000",
    },
    "& .view-page__logo": {
      display: "none !important"
    }
    
  }
});

const Highlight = ({ research, last }) => {
  const [colorMode] = useColorMode();
  const classes = useStyles();

  console.log("colorMode: ", colorMode)

  const theme = useThemeUI();
  let bgColor = theme.colorMode === "dark" ? "27, 30, 35" : "255, 255, 255";


  useEffect(() => {

  }, [])
  return (
    <>
      <Row sx={{ mt: [4, 5, 6, 7] }}>
        <Column start={[1]} width={[6]}>
          <Box
            sx={{
              color: 'secondary',
              fontFamily: 'mono',
              letterSpacing: '0.05em',
              fontSize: [1, 1, 1, 2],
              mt: ['2px'],
              mb: [3],
              userSelect: 'none',
              textTransform: 'uppercase',
              display: ['block', 'none', 'none', 'none'],
              textAlign: ['left'],
            }}
          >
            {formatDate(research.date)}{' '}
          </Box>
        </Column>
        <Column start={[1, 2, 3, 3]} width={[6, 6, 6, 6]}>
          <Button
            href={research.href}
            size='lg'
            suffix={<RotatingArrow sx={{ color: 'primary' }} />}
          >
            {research.title}
          </Button>
        </Column>
      </Row>
      <Row sx={{ mt: [3] }}>
        <Column start={[1, 2, 3, 3]} width={[6, 5, 5, 5]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], lineHeight: '1.25' }}>
            {research.summary}
          </Box>
        </Column>
        <Column start={[1, 7, 9, 9]} width={[6, 2, 2, 2]}>
          <Box
            sx={{
              color: 'secondary',
              fontFamily: 'mono',
              letterSpacing: '0.05em',
              fontSize: [1, 1, 1, 2],
              mt: ['2px'],
              userSelect: 'none',
              textTransform: 'uppercase',
              display: ['none', 'block', 'block', 'block'],
            }}
          >
            {formatDate(research.date)}{' '}
          </Box>
        </Column>
      </Row>
      <Row as='figure' sx={{ mt: [4, 5, 6, 7], mb: [4, 4, 4, 5] }}>
      
        <Column start={[1, 1, 2, 3]} width={[6, 8, 10, 8]}>
          {research.source ? (
            <iframe 
              id="home-widget" 
              className={classes.iframe}
              allowtransparency="true" 
              widget-src="?m=production/maleAdult/dental_cavities.json&bgstd=transparent&ui-annotations=true&ui-panel=false&imageDisplay=fallback&ui-all=false&ui-info=false" 
              // ng-class="{disabled: widgetDisabled}"
              width="100%" height="250" 
              frameBorder="0" 
              src={`https://human.biodigital.com/viewer?m=production/maleAdult/dental_cavities.json&background=${bgColor}&bgstd=transparent&ui-annotations=true&ui-panel=false&imageDisplay=fallback&ui-all=false&ui-info=false&dk=e6d92924b104d99964ff488a3218136c73234d9e`} 
            >
           </iframe>
        
          ) : (
            <Link href={research.href}>
              <Image
                src={
                  colorMode === 'light'
                    ? highlightImageUrl(research.id, 'light')
                    : highlightImageUrl(research.id, 'dark')
                }
                sx={{
                  width: '100%',
                  opacity: 1,
                  aspectRatio: '4 / 1',
                  transition: 'opacity 0.15s',
                  '@media (hover: hover) and (pointer: fine)': {
                    '&:hover': {
                      opacity: 0.6,
                    },
                  },
                }}
              />
            </Link>
          )}
             {<style>
             .view-page__logo {
                "display: none"
              }
            </style>}
        </Column>
      </Row>
      <Box sx={{ display: 'block', height: [4, 5, 6, 7] }} />
    </>
  )
}

export default Highlight
