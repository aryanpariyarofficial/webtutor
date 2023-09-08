import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react';
import { TiSocialYoutubeCircular, TiSocialInstagramCircular} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <div>
      <Box minH={'10vh'} padding={'4'} bg={'blackAlpha.900'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={['center', 'flex-start']} width={'full'}>
                <Heading children='All Rights Reserved' color={'white'} />
                <Heading children='@Web Tutor' color={'yellow.400'} fontFamily={'body'} size={'sm'} />
            </VStack>
            <HStack spacing={['2', '10']} justifyContent={'center'} color={'white'} fontSize={'50'}>
                <a href="https://youtube.com/@aryansbuddies" target={'blank'}>
                    <TiSocialYoutubeCircular />
                </a>
                <a href="https://instagram.com/aryanpariyarofficial" target={'blank'}>
                    <TiSocialInstagramCircular />
                </a>
                <a href="https://github.com/aryanpariyarofficial" target={'blank'}>
                    <DiGithub />
                </a>

            </HStack>
        </Stack>
      </Box>
    </div>
  )
}

export default Footer
