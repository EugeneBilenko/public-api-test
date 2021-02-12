import React from 'react';
import { Box, Image, WrapItem, LinkBox, LinkOverlay, Flex } from '@chakra-ui/react';
import { ListEntity } from '../../store/entitiesSlice';
import { Link } from 'react-router-dom';
import cutStringToLength from '../../utils/cutStringToLength';

interface IProps {
  item: ListEntity
}

const ListEntitiesItem = ({ item }: IProps) => {
  const cutDescription = cutStringToLength(item.description, 120);
  return (
    <WrapItem>
      <LinkBox>
        <Box maxW="sm" maxH="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Flex>
            <Flex align="center" justify="center" w="30%">
              <LinkOverlay as={Link} to={`/entity/${item.id}`}>
                <Image py="10px" boxSize="200px" objectFit="contain" src={item.image_url} alt={item.name} />
              </LinkOverlay>
            </Flex>
            <Box p="6" w="70%">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {item.name}
              </Box>

              <Box>
                <Box as="span" color="gray.600" fontSize="sm">
                  {cutDescription}
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </LinkBox>
    </WrapItem>
  );
};

export default ListEntitiesItem;
