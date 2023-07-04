import React from 'react'
import { VStack, Heading, Img } from '@chakra-ui/react'
import FullScreenPrac from './FullScreenPrac'


const greeting = 'Hello, i am Mohamed Hassan'
const bio1 = 'A frontend Developer'
const bio2 = 'specialized in React'

const LandingPrac = () => {
    <FullScreenPrac
    isDarkBackground
    backgroundColor='#2A4365'
    alignItems='center'
    justifyContent='center'
    >
        <VStack spacing={12}>
            <VStack>
                <Img src={require('../images/Me.jpg')} alt='Me' borderRadius='full' boxSize='150px' />
                <p>{greeting}</p>
            </VStack>
            <VStack spacing={4}>
                <Heading as='h1' size='4xl' >{bio1}</Heading>
                <Heading as='h1' size='4xl' >{bio2}</Heading>
            </VStack>
        </VStack>
    </FullScreenPrac>
}

export default LandingPrac;