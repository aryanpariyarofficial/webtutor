import React from 'react';
import './Home.css';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Container,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';
import introVideo from '../../assets/videos/intro.mp4';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';



export const Course = ({
  title,
  imageSrc,
  creator,
  description,
 }) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />

      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />

        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
     
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/courses`}>
          <Button colorScheme={'yellow'}>View Course</Button>
        </Link>
       </Stack>
    </VStack>
  );
};


const Home = () => {
   return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'4'}
          >
            <Heading children="LEARN FROM THE EXPERTS" size={['2xl', 'xl']} />
            <Text
              textAlign={['center', 'flex-end']}
              fontSize={'2xl'}
              children="Find Valuable Content At Reasonable Price"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore More
              </Button>
            </Link>
          </VStack>
          <Image
            boxSize={'md'}
            src={vg}
            objectFit="contain"
            className="vector-graphics"
          />
        </Stack>
      </div>
      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          children="OUR BRANDS"
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4 "
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          src={introVideo}
          autoPlay
          controls
          muted
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>

      <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
        <Stack
          direction={['column', 'row']}
          flexWrap="wrap"
          justifyContent={['flex-start', 'space-evenly']}
          alignItems={['center', 'flex-start']}
        >
          <Course
            title={'Python Course'}
            description={'python course description'}
            imageSrc={
              'https://res.cloudinary.com/dbfhawk5q/image/upload/v1693925770/vogins2ny2mcbrgx92wl.jpg'
            }
            creator={'Aryan'}
                     
          />
          <Course
            title={'JavaScript Course'}
            description={'The Ultimate JavaScript Course'}
            imageSrc={
              'https://res.cloudinary.com/dbfhawk5q/image/upload/v1694054196/vglwvocv4mbf0e6giqjc.png'
            }
            creator={'Aryan'}
                     
          />
          <Course
            title={'PHP for Begineers'}
            description={'Learn PHP from start to end.'}
            imageSrc={
              'https://res.cloudinary.com/dbfhawk5q/image/upload/v1694056318/ydtbdca3gfhozjzwdcfy.png'
            }
            creator={'Aryan'}
                     
          />
        </Stack>
      </Container>
    </section>
  );
};

export default Home;
