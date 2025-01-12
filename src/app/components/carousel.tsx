import React from 'react';
import * as motion from "motion/react-client"
import Image from 'next/image'
import { Box } from '@mui/material';

export default function Carousel ({reverse}: {reverse: boolean}): React.JSX.Element {

    const imgs = [ 
        {id: 1, src: '/assets/bkylb0.jpg', alt: 'bkylb'}, 
        {id: 2, src: '/assets/coffee-shop0.jpg', alt: 'coffee shop'},
        {id: 3, src: '/assets/harlem-renaissance_0.jpg', alt: 'harlem renaissance'}
    ]
      
    return (
        <Box style={{overflowX: 'clip', overflowY: 'clip', width: '100%', height: '100%', display: 'flex', flexDirection: 'row'}}>
            <motion.div
            initial={{ x: reverse ? "-105%" : "0%" }}
            animate={{ 
                x: reverse ? "0%" : "-100%"
            }}
            transition={{ duration: 8, delay: 1, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
            }}
        >
            {imgs.map((photo) => {
                return <Image key={photo.id} src={photo.src} alt={''} width={150} height={150} style={{borderRadius: 5}}/>
            })}
        </motion.div>
        <motion.div
            initial={{x: reverse ? "-102%" : "1%" }}
            animate={{ 
                x: reverse ? "0%" : "-100%"
            }}
            transition={{ duration: 8, delay: 1, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                borderRadius: 5
            }}
        >
            {imgs.map((photo) => {
                return <Image key={photo.id} src={photo.src} alt={''} width={150} height={150} style={{borderRadius: 5}}/>
            })}
        </motion.div>
        </Box>
    )
}