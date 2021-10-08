import React from 'react'
import Link from 'next/link'
import { Flex } from '@chakra-ui/layout'
import { Text } from "@chakra-ui/react"

function SwitchPreview({title, type, slug, image}) {
    return (
        <Link href={`/switch/${slug}`}>
            <Flex flexDir={'column'} textAlign={'center'} maxWidth={350} minWidth={200} justifyContent={'center'} alignItems={'center'} backgroundColor={'white'} borderRadius={'lg'} p={10} marginBottom={10}>
                <img src={image.url} width='200'/>
                <Text fontSize={'lg'} fontWeight={'bold'}>{title}</Text>
                <p>{type}</p>
            </Flex>
        </Link>
    )
}

export default SwitchPreview