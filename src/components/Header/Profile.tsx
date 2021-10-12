import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>John Doe</Text>
        <Text color="gray.300" fontSize="small">john.doe@test.com</Text>
      </Box>
      <Avatar size="md" name="John Doe" src="https://github.com/john.doe.png" />
    </Flex>
  )
}