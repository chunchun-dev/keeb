import { Flex, Text, Heading } from '@chakra-ui/layout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Flex flexWrap={'wrap'} width={'100%'} height={['auto','95vh']}>
      <Link href='/switch'>
        <Flex width={['100%', '50%']} height={['100vw','95vh']} backgroundBlendMode={'multiply'} backgroundColor={'#7788a1'} justifyContent={'center'} alignItems={'center'} backgroundRepeat={'round'} backgroundImage={'/gat-ink-black.bmp'}>
          <Heading textColor={'white'}>Switches</Heading>
        </Flex>
      </Link>
      <Link href='/boards'>
        <Flex width={['100%', '50%']} height={['100vw','95vh']} backgroundBlendMode={'multiply'} backgroundColor={'#7788a1'} justifyContent={'center'} alignItems={'center'} backgroundRepeat={'round'} backgroundImage={'/jellyepoch.bmp'}>
          <Heading textColor={'white'}>Boards</Heading>
        </Flex>
      </Link>
    </Flex>
  )
}