import React from 'react'
import Link from 'next/link'
import { Flex } from '@chakra-ui/layout'
import { Text } from "@chakra-ui/react"
import { motion } from 'framer-motion'

function BoardPreview({title, slug, image}) {
    return (
        <Link href={`/board/${slug}`}>
            <Flex flexDir={'column'} textAlign={'center'} minHeight={280} maxWidth={350} minWidth={200} justifyContent={'center'} alignItems={'center'} backgroundColor={'white'} borderRadius={'lg'} p={10} marginBottom={10}>
                <motion.img src={image} width='200' whileHover={{ y: -10 }}/>
                <Text fontSize={'lg'} fontWeight={'bold'}>{title}</Text>
            </Flex>
        </Link>
    )
}

export default BoardPreview
