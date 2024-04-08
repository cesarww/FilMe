import { Card, CardHeader, CardBody, CardFooter, Image, Text, Heading, Stack, Divider, StatGroup, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Flex, Button } from '@chakra-ui/react'

function CardPeli(props) {
    return ( 
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            height={'330px'}
            p={3}
            mt={10}
        >
            <Image
                objectFit='cover'
                width={'100%'}
                height={'100%'}
                src={"https://media.themoviedb.org/t/p/w220_and_h330_face" + props.imageUrl}
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Flex justifyContent={'space-between'}>
                        <Heading size='md'>{props.title}</Heading>
                        <Button bg={'green'} color={'white'}>+</Button>
                    </Flex>
                    

                    <Text w={500} py='2'>
                        {props.synopsis}
                    </Text>
                    <Flex w={'100%'} justifyContent={'center'}>
                        <StatGroup w={'100%'}>
                            <Stat>
                                <StatLabel>Promedio Votos</StatLabel>
                                <StatNumber>{props.vote_average}</StatNumber>
                               
                            </Stat>

                            <Stat>
                                <StatLabel>Cantidad de Votos</StatLabel>
                                <StatNumber>{props.vote_count}</StatNumber>
                            </Stat>
                        </StatGroup>

                    </Flex>
                    
                </CardBody>

                
            </Stack>
        </Card>
     );
}

export default CardPeli;