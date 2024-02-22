import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const Header = () => {
  return (
     <HStack p={"4"} shadow={"base"} bgColor={'blackAlpha.700'} >
        <Button variant={'unstyled'} color={'white'}>
            <Link to="/">Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'}>
            <Link to="/exchanges">Exchange</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'}>
            <Link to="/coins">Coins</Link>
        </Button>
    </HStack>
  )
}

export default Header