import { Card, CardHeader, CardBody, CardFooter, Image, Text, Heading, Stack, Divider, StatGroup, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Flex } from '@chakra-ui/react'

function CardPeli(props) {
    return ( 
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={"https://media.themoviedb.org/t/p/w220_and_h330_face" + props.imageUrl}
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>{props.title}</Heading>

                    <Text w={500} py='2'>
                        {props.synopsis}
                    </Text>
                </CardBody>

                <CardFooter>
                    <Flex w={'100%'} justifyContent={'center'}>
                        <StatGroup>
                            <Stat>
                                <StatLabel>Promedio Votos</StatLabel>
                                <StatNumber>{props.vote_average}</StatNumber>
                               
                            </Stat>

                            <Stat>
                                <StatLabel>Cantidad de Votos</StatLabel>
                                <StatNumber>{props.vote_count}</StatNumber>
                                <StatHelpText>
                                    <StatArrow type='decrease' />
                                    9.05%
                                </StatHelpText>
                            </Stat>
                        </StatGroup>

                    </Flex>
                </CardFooter>
                <CardFooter>
                    <Flex w={'100%'} justifyContent={'center'}>
                        <StatGroup>
                            <Stat>
                                <StatLabel>Id pelicula:</StatLabel>
                                <StatNumber>{props.id}</StatNumber>
                            </Stat>
                        </StatGroup>

                    </Flex>
                </CardFooter>
            </Stack>
        </Card>
     );
}

export default CardPeli;