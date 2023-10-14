'use client'

import * as React from 'react';
import { Text, Textarea, Button } from '@chakra-ui/react';
import Iframe from 'react-iframe';
 
 

export default function Home() {
  let [value, setValue] = React.useState('');

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  return (
    <>
      <Text mb='8px'>Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
      <Button colorScheme="teal" size='lg' variant='solid'>Button</Button>

      <div style={{display: 'flex'}}>
        <Iframe url="https://chat.openai.com/chat"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>

        <Iframe url="https://bard.google.com"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
        
      </div>

    </>
  )
}
